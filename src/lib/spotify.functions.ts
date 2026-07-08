import { createServerFn } from "@tanstack/react-start";

const PLAYLIST_ID = "5419zbBnnQlrsf9RCnxGyU";

export type LatestTrack = {
  id: string;
  title: string;
  artist: string;
  cover: string;
  url: string;
};

type EmbedTrack = {
  uri: string;
  title: string;
  subtitle: string;
};

export const getLatestTracks = createServerFn({ method: "GET" }).handler(
  async (): Promise<LatestTrack[]> => {
    const embedRes = await fetch(
      `https://open.spotify.com/embed/playlist/${PLAYLIST_ID}`,
      { headers: { "User-Agent": "Mozilla/5.0" } },
    );
    if (!embedRes.ok) {
      throw new Error(`Playlist fetch failed [${embedRes.status}]`);
    }
    const html = await embedRes.text();
    const match = html.match(
      /<script id="__NEXT_DATA__" type="application\/json">([\s\S]*?)<\/script>/,
    );
    if (!match) throw new Error("Playlist payload not found");
    const data = JSON.parse(match[1]);
    const list: EmbedTrack[] =
      data?.props?.pageProps?.state?.data?.entity?.trackList ?? [];
    if (!list.length) throw new Error("Playlist is empty");

    // Neueste Adds stehen am Ende der Playlist → letzte 8, umgedreht
    const newest = list.slice(-8).reverse();

    const enriched = await Promise.all(
      newest.map(async (t): Promise<LatestTrack> => {
        const id = t.uri.split(":").pop() ?? "";
        let cover = "";
        try {
          const oe = await fetch(
            `https://open.spotify.com/oembed?url=${encodeURIComponent(t.uri)}`,
          );
          if (oe.ok) {
            const j = (await oe.json()) as { thumbnail_url?: string };
            cover = j.thumbnail_url ?? "";
          }
        } catch {
          // ignore, cover stays empty
        }
        return {
          id,
          title: t.title,
          artist: t.subtitle,
          cover,
          url: `https://open.spotify.com/track/${id}`,
        };
      }),
    );

    return enriched;
  },
);
