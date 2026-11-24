# Love: 2 Gathering download page

A buildless GitHub Pages site. Keep index.html, style.css, gallery.js, .nojekyll and assets/ together at the root of the Pages repository. All images are local and all asset paths are relative, including when the site is served under /Love2GatheringPages/.

## Local preview

Open index.html directly or run the following from this directory and visit http://127.0.0.1:8000/.

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

## Downloads

The direct installer links point to release v2026.11.15.4 in Alexayy/Love2Gathering. When updating to a new release, replace the displayed version and both verified asset URLs in index.html. Browse all releases always opens the game repository’s release list. While the game repository is private, GitHub requires a signed-in account with access.

## Publishing after review

When ready, commit the files in the Pages repository. In its GitHub Pages settings choose deployment from the branch containing the site, using the root directory. The source includes no deployment workflow.

The screenshots show a development build. The hero illustration was created for this page.
