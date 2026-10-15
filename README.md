# ONU: Deadline Dash

A friendly, fictional endless runner for ONU, a textile engineer who studied at Primeasia University. Dhaka traffic, fabric rolls, urgent buyer emails, and the life-saving power of cha.

## Play

Open `index.html` in any modern browser. No install, build, backend, or API keys required. Works offline after download (optional Google Fonts fall back to system fonts).

- **Space / ↑ / tap the game / Jump button:** jump. Press again for a double jump.
- **↓ / Slide button:** slide for 0.78 seconds. In the air, fast-fall.
- **P / Esc / pause button:** pause or resume.
- **Tea:** collect for 10 bonus meters and a five-second shield.
- Jump over fabric rolls and cones; slide under urgent emails.
- Difficulty gradually increases. Best distance is stored only in your browser.
- Sound is optional and off by default. Switching tabs automatically pauses.

## Host

Upload `index.html` to any static host. For GitHub Pages, select **Settings → Pages → Deploy from a branch → main / (root)** where available for your repository plan and visibility.

## Development

Everything lives in `index.html`: responsive layout, Canvas artwork, delta-time physics, collision detection, procedural obstacle generation, optional Web Audio, keyboard and touch controls. All art is drawn in code; no third-party image assets.

For a local HTTP preview, run `node server.cjs`, then visit http://localhost:4173.

This is affectionate fictional comedy, not a factual account of any real workplace or university. ONU's character is an invented cartoon, not a likeness.