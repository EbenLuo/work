# Defence notes

Five minutes, live, no slides. Three minutes showing the site, two minutes of
questions.

## Three-minute demo

1. Open https://ebenluo.github.io/work/.
2. Read the thesis: game history is not only a story of better graphics.
3. Move the Playback slider to 1962, 1994, and 2007. Show that the exhibit,
   year, era link, and text all change.
4. Open the Arcade page. Show one photograph and its credit.
5. Open the 3D page. Point out the original DualShock photo from Sony
   Interactive Entertainment and explain why it is period-correct.
6. Open the Online page. Show that the four pages share one navigation system.
7. Finish with the design decision: an archive catalogue, not a timeline.

## Questions and short answers

### Why game history?

I know games well, and I wanted a topic I could write about from my own
knowledge rather than a generic template. The risk is that game history is too
broad, so I narrowed it to one argument: changes in input changed how games
were played.

### Why these three eras?

Each era describes a different control problem: public play becomes domestic
play; 3D movement needs a camera and an analog stick; the network and the
touchscreen take play out of one room. Four pages — a home page and three era
pages — are enough to make that argument clearly.

### Why four pages and not more?

The project brief asks for at least four pages. More pages would have made the
content thinner. I chose four pages with four exhibits each, so every page has
a clear job and the site can be finished and tested properly.

### Why this visual style?

The subject is an archive, so the site looks like a small museum catalogue:
dark background, warm paper plates, green and amber labels, large serif
headings, and monospaced catalogue labels. The photographs are mounted on
paper-coloured plates so different museum images feel like one collection.

### How did you source the images?

I searched with Bing and Baidu, followed the results to the original museum or
official pages, downloaded the images locally, and recorded the source, credit,
and access date in `CREDITS.md`. I did not hotlink images. Each image also has
alt text and a visible credit.

### How does Playback work?

The events are stored in a JavaScript array. A `range` input provides the year.
On input, `nearestEvent()` finds the closest exhibit, and `render()` updates the
year, era, title, description, and link. A separate visually hidden status
region announces the result when the slider changes. The page also has a
"Surprise me" button. No data is sent anywhere.

### Why no framework, server, or database?

The site is static, so it can be hosted on GitHub Pages with no server code or
database. That makes it faster and easier to maintain. The only state is the
slider position and the current exhibit; neither needs to be stored.

### What went wrong during the build?

Two HTML problems: duplicate `<meta>` and `<link>` elements before `<head>`,
and a stray `</span>` in the h1. I also had image cropping caused by percentage
heights inside an aspect-ratio box; I fixed it with an absolutely positioned
image and `object-fit: contain`.

### What would you improve?

I would add more years to Playback, add a small filter by era, and test on more
real phones. I would also replace the remaining secondary source links with
more primary museum sources if I had more time.

### How did you use AI?

I used AI as a coding assistant for scaffolding, debugging, and image sourcing.
I checked the pages in the browser, validated the HTML, ran an accessibility
audit, verified the image sources, and made the design decisions. I can explain
the structure, the Playback code, and the reasons for each image and layout
choice.

## Before the defence

```bash
git status
git log --oneline
```

Open the live site, not only the local copy. Have Live Server ready as a backup.
