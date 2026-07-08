import { createServerFn } from "@tanstack/react-start";

const PLAYLIST_ID = "5419zbBnnQlrsf9RCnxGyU";

export type LatestTrack = {
  id: string;
  title: string;
  artist: string;
  cover: string;
  url: string;
  addedAt: string;
};

export const getLatestTracks = createServerFn({ method: "GET" }).handler(
  async (): Promise<LatestTrack[]> => {
    const clientId = process.env.SPOTIFY_CLIENT_ID;
    const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
    if (!clientId || !clientSecret) {
      throw new Error("Spotify credentials not configured");
    }

    const tokenRes = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " + Buffer.from(`${clientId}:${clientSecret}`).toString("base64"),
      },
      body: "grant_type=client_credentials",
    });
    if (!tokenRes.ok) {
      const body = await tokenRes.text();
      throw new Error(`Spotify token failed [${tokenRes.status}]: ${body}`);
    }
    const { access_token } = (await tokenRes.json()) as { access_token: string };

    const fields =
      "items(added_at,track(id,name,external_urls,artists(name),album(images)))";
    const url = `https://api.spotify.com/v1/playlists/${PLAYLIST_ID}/tracks?limit=50&fields=${encodeURIComponent(fields)}`;
    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${access_token}` },
    });
    if (!res.ok) {
      const body = await res.text();
      throw new Error(`Spotify playlist failed [${res.status}]: ${body}`);
    }
    const data = (await res.json()) as {
      items: Array<{
        added_at: string;
        track: {
          id: string;
          name: string;
          external_urls: { spotify: string };
          artists: Array<{ name: string }>;
          album: { images: Array<{ url: string; width: number }> };
        } | null;
      }>;
    };

    return data.items
      .filter((i) => i.track)
      .sort((a, b) => (a.added_at < b.added_at ? 1 : -1))
      .slice(0, 8)
      .map((i) => {
        const t = i.track!;
        const img = t.album.images[0]?.url ?? "";
        return {
          id: t.id,
          title: t.name,
          artist: t.artists.map((a) => a.name).join(", "),
          cover: img,
          url: t.external_urls.spotify,
          addedAt: i.added_at,
        };
      });
  },
);
