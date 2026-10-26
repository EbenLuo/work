# Play/Past: How We Played

A brief history of input, from joysticks to touchscreens.

**Live site:** https://ebenluo.github.io/work/  
**Repository:** https://github.com/EbenLuo/work

## What it is

A four-page static site about three moments when new ways of playing changed
video games: the move from arcades into the living room, the arrival of 3D
cameras and analog sticks, and the rise of online play and touchscreens.

The argument is simple: game history is usually told as a story of better
graphics, but the bigger changes came from the ways players touched, moved,
and connected to games.

## Pages

| Page | Role |
|---|---|
| `index.html` | The thesis, three era links, and the Playback year explorer |
| `arcade.html` | The Arcade Era, 1962–1985 |
| `3d.html` | The 3D Revolution, 1993–2001 |
| `online.html` | The Online Era, 2002–today |

## Interaction

**Playback** is a year explorer on the home page. A range input chooses a year;
the page finds the nearest exhibit and updates the title, description, era
link, and an accessible status message. It works with the keyboard, and it
does not need a server or a database.

## Tech

Plain HTML, CSS and JavaScript. No frameworks, no build step, no server-side
code, and no database. The site is deployed with GitHub Pages.

## Images and credits

All historical photographs are stored locally in `assets/images/` and credited
below each image and in [`CREDITS.md`](CREDITS.md). The site does not hotlink
images. The favicon and app icon are original identity assets made for this
project.

## Run locally

From this folder:

```bash
python -m http.server 4174
```

Then open <http://127.0.0.1:4174/>.

## Course

A student project for Web Technologies at BiUH, 2026.
