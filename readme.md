# Shopify popup window

### How was it deployed?

- HTML, CSS, JS merged into 1 file `index.html`
- Created new file `popup.liquid` in sections folder
- In `theme.liquid` -> include this file by adding -> `{% section 'popup' %}`
- SVG file imported to assets folder & imported to popup by adding -> `background-image: url({{ 'BloomRobbins.svg' | asset_url }})`
