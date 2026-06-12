# Gaukhar Uzatu Invitation

Static wedding invitation website.

## Files

- `index.html` - main site file
- `assets/images/` - optimized website images
- `assets/audio/music.mp3` - background music

## Run Locally

Open `index.html` in a browser, or serve the folder with any static server.

## GitHub Pages

Upload the contents of this folder to a GitHub repository and enable GitHub Pages from the repository settings.

## Shared Wishes

By default, wishes are saved only in the current browser. To make wishes visible to everyone:

1. Create a Google Sheet.
2. Open Extensions -> Apps Script.
3. Paste the code from `backend/google-apps-script.js`.
4. Deploy it as a Web App with access set to "Anyone".
5. Copy the Web App URL.
6. In `index.html`, set:

```js
const sharedWishesEndpoint = "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL";
```
