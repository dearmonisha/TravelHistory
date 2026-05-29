# Passport Stamp Tracker

A family travel history app that tracks entry and exit passport stamps across countries, for every member of the family.

## Features

- **Per-traveler timelines** — each family member gets their own tab
- **Stamp tracking** — log whether each entry/exit was stamped or unstamped
- **Group trips** — apply one trip to multiple travelers at once
- **Country coverage view** — see all countries visited with family member dots
- **Family dashboard** — at-a-glance stats for everyone
- **Export / Import** — save your data as `passport_data.json` and reload it any time
- **Year filter** — drill into any single travel year

## Running Locally

Open `index.html` directly in your browser. No server or build step needed.

## Deploying to GitHub Pages

1. Push this folder to a GitHub repository
2. Go to **Settings → Pages**
3. Set source to **main branch / root**
4. Your app will be live at `https://<username>.github.io/<repo-name>/`

## Data Storage

Data is stored in your browser's `localStorage`. Use **Export** to save a `passport_data.json` backup and **Import** to restore it. You can also commit `passport_data.json` to the repo as a versioned backup.

## Adding Family Members

Click **Manage** next to the traveler tabs, enter a name, relation (e.g. Son, Mom), pick a color, and click **Add Traveler**.
