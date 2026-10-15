# ONU: Deadline Dash

A friendly, fictional endless runner for ONU, a textile engineer who studied at Primeasia University. Dhaka traffic, fabric rolls, urgent buyer emails, and the life-saving power of cha.

## Play

Open `index.html` in any modern browser. No install, build, backend, or API keys required. Works offline after download (optional Google Fonts fall back to system fonts).

- **Space / ↑ / tap the game / Jump button:** jump. Press again for a double jump.
- **↓ / Slide button:** slide for 0.78 seconds. In the air, fast-fall.
- **P / Esc / pause button:** pause or resume.
- **X / Dash button:** smash through obstacles for 0.7 seconds. Six-second cooldown.
- **Tea:** five-second shield. **Magnet:** attracts pickups for seven seconds.
- Three lives, with temporary invulnerability after damage. Complete shipments to recover one life and earn 500 points.
- Collect golden samples to fill the shipment meter. Build combos for up to a 5x pickup/dodge multiplier.
- Seven-second boss rush every 25 seconds; survive for a 150-point bonus. Four rotating scenery palettes.
- Jump over rickshaws, fabric rolls and cones; slide under urgent emails.
- Difficulty gradually increases. Best score is stored only in your browser.
- Sound is optional and off by default. Switching tabs automatically pauses.

## Host

Upload `index.html` to any static host. For GitHub Pages, select **Settings → Pages → Deploy from a branch → main / (root)** where available for your repository plan and visibility.

## Development

Everything lives in `index.html`: responsive layout, Canvas artwork, delta-time physics, collision detection, procedural obstacle generation, optional Web Audio, keyboard and touch controls. All art is drawn in code; no third-party image assets.

For a local HTTP preview, run `node server.cjs`, then visit http://localhost:4173.

This is affectionate fictional comedy, not a factual account of any real workplace or university. ONU's character is an invented cartoon, not a likeness.