# Deploying sigrhold.dev to DigitalOcean

This folder is the complete site. Upload everything in it, keeping the
folder structure, and you are live.

## What's in here

- index.html      the site itself (do not edit for content changes)
- content.js      ALL your content. This is the only file you edit.
- support.js      runtime the site needs (do not edit)
- assets/         logo and rune images

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

## Updating the site later

1. Open the live site, click the gear icon (top right).
2. Make your edits in the panel. They preview instantly.
3. Click "Download content.js" (or Copy).
4. Replace content.js on the server:
   - App Platform: replace the file in the repo and push.
   - Droplet: scp content.js root@YOUR_DROPLET_IP:/var/www/html/
5. Refresh. Done.

You can also edit content.js directly in any text editor. The
instructions are written inside the file.

## Notes

- The gear/settings panel is visible to anyone but changes nothing on
  the server. It only edits the visitor's own view until you replace
  content.js. Ask Claude to hide it behind a keyboard shortcut if you
  prefer.
- No build step, no database, no dependencies to maintain.
