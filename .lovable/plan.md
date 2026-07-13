Use the uploaded `jbLOGO_fin.png` (white "JB" on black) as the site favicon.

Steps:
1. Upload the file via `lovable-assets` to CDN, then copy a local copy into `public/favicon.png` so it's served at `/favicon.png`.
2. Update `src/routes/__root.tsx` `head().links`: replace the existing favicon entry with `{ rel: "icon", type: "image/png", href: "/favicon.png" }`.
3. Delete the template's default `public/favicon.ico` so browsers/crawlers don't keep serving the old Lovable icon.

Note: browsers cache favicons aggressively — a hard reload (or a new tab) may be needed to see the change.