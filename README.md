# VELOURA — A Little More Magic

A responsive, cinematic ice-cream brand website with a full-bleed hero image, scroll-reveal transitions, local image assets, and an interactive Three.js model loaded from a local GLB file.

## Run locally

Because the interactive model is loaded as a GLB asset, open this project through a local web server rather than double-clicking `index.html`.

### Python
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000`.

### VS Code
Install **Live Server**, right-click `index.html`, and choose **Open with Live Server**.

## Project structure

- `index.html` — page structure and metadata
- `styles.css` — responsive design, visual effects and animations
- `script.js` — navigation, scroll reveals, progress indicator and demo form
- `model.js` — Three.js scene and local GLB loader
- `assets/images/` — hero art and section image assets
- `assets/models/veloura-icecream.glb` — locally stored 3D ice-cream model

## Notes
- The supplied image is used as the full-bleed hero background and is also the source for the locally stored editorial crops in `assets/images/`.
- Google Fonts and Three.js are loaded from CDNs, so those features need an internet connection. All photographic image assets and the GLB model are local.
- The contact form is a front-end demo only; connect a backend or form service to receive messages.
