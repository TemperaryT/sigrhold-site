# Deploying sigrhold.dev to DigitalOcean

This folder is the complete site. Upload everything in it, keeping the
folder structure, and you are live.

## What's in here

- index.html      the site itself (do not edit for content changes)
- content.js      ALL your content. This is the only file you edit.
- support.js      runtime the site needs (do not edit)
- assets/         logo and rune images
- vendor/         self-hosted runtime libraries (react, react-dom,
                  babel). Do not edit or delete — without these the
                  site would depend on unpkg.com being up.

## Option A: DigitalOcean App Platform (recommended, simplest)

1. Put this folder in a GitHub repo (or upload as a zip).
2. In DigitalOcean: Create > App > choose the repo.
3. Select "Static Site" when asked. Build command: none. Output dir: /
4. Attach your domain (sigrhold.dev) under Settings > Domains.

Free tier covers a static site like this. Every push to the repo
redeploys automatically, so updating = edit content.js, commit, push.

## Option B: A droplet you manage yourself

1. Create the smallest droplet with the Nginx image (or add nginx:
   apt install nginx).
2. Copy this folder's contents to /var/www/html/
   e.g. from your machine:
   scp -r ./* root@YOUR_DROPLET_IP:/var/www/html/
3. Point your domain's A record at the droplet IP.
4. Add HTTPS: certbot --nginx -d sigrhold.dev

## Before you share the URL — fill these in

Open content.js (or the settings panel) and set:

1. Connect links — LinkedIn / GitHub / Instagram URLs and your
   contact email are currently blank, so those rows are hidden.
   The commented templates are right above them in content.js.
2. profile.email — blank.
3. Optional: primaryActionLabel/Url, resumeUrl, posts, stats —
   all blank and hidden until filled.

## Updating the site later

1. Open the live site and press the "s" key three times quickly.
   (The gear icon is hidden from visitors; the shortcut opens the
   same settings panel.)
2. Make your edits in the panel. They preview instantly.
3. Click "Download content.js" (or Copy).
4. Replace content.js on the server:
   - App Platform: replace the file in the repo and push.
   - Droplet: scp content.js root@YOUR_DROPLET_IP:/var/www/html/
5. Refresh. Done.

You can also edit content.js directly in any text editor. The
instructions are written inside the file.

## Notes

- The settings panel changes nothing on the server. It only edits
  your own browser's view until you replace content.js. It is hidden
  behind the triple-"s" shortcut, so visitors won't stumble into it.
- No build step, no database, no dependencies to maintain.
