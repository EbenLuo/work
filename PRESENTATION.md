# Play/Past — 5-minute live presentation

**3 minutes: show the live site · 2 minutes: questions · no slides · no script.**

- Live: https://ebenluo.github.io/work/
- Repository: https://github.com/EbenLuo/work
- Local backup: `C:\Users\31826\Desktop\play-past`, served with Live Server

> The rule from the course: “No script. Nothing read out from your phone or from
> paper.” This file is for rehearsal only. Do not bring it, do not read it.
> Learn the six beats and the four numbers; say the rest in your own words.

---

## Before you walk in

- Open your **project entry on webtech.landrock.io** (poster, description, links).
  The presentation starts there, then clicks through to the live site.
- Open the live site in a second tab.
- Start **Live Server** on the local folder and test it once:
  `http://127.0.0.1:5500/`. This is the network backup.
- Browser zoom 100%. Notifications off. Charger in the bag.
- Phone hotspot ready, in case campus Wi-Fi fails.
- Arrive at **14:30**. Rehearsal is **10:15–11:45** in the same room.
- Know your room: Group 1 = B310, Group 2/3 = B311.

## The six beats — cue card

| # | Time | Do this | Say this (one line, then stop) |
|---|---|---|---|
| 1 | 0:00–0:20 | Platform entry → click live site | “Four pages, one argument: games changed more through input than through graphics.” |
| 2 | 0:20–1:25 | Scroll to Playback; drag 1962 → 1994 → 2007 | “The timeline is the interaction — you can feel the change, not just read it.” |
| 3 | 1:25–2:10 | Open Arcade; one exhibit | “Photo, caption, why it mattered, source. The image is evidence, not decoration.” |
| 4 | 2:10–2:40 | Point at layout; resize to phone width | “Archive design, semantic HTML, one stylesheet, plain JavaScript, no server.” |
| 5 | 2:40–3:00 | Back to the top | “The history is the small interface between a player and a game. Thank you.” |
| 6 | 3:00–5:00 | Stand still; answer | Decisions, not features. One sentence, then evidence. |

**Four numbers to remember:** 1962 Spacewar! · 1994 PlayStation · 2007 iPhone ·
13 events in Playback.

**Do not** tour all four pages. Show the homepage, Playback, and one era page.
The other pages are there for questions.

---

## Rehearsal script (practice only — do not read on the day)

**[Project entry on the platform. Pause.]**

Hi, I’m Eben. This is *Play/Past: How We Played*. On the platform you can see the
poster and the description; this is the site.

It has four pages and one argument: the big changes in games came from new ways
of playing, not from better graphics.

**[Click Live site. Scroll to Playback.]**

Playback makes that argument usable. Pick any year from 1962 to 2025; it finds
the nearest exhibit and updates the year, the title, the text and the link.

**[Drag to 1962.]**

1962: Spacewar! turned a laboratory computer into a two-player game.

**[Drag to 1994.]**

1994: PlayStation brought 3D graphics and CD sound into the living room.

**[Drag to 2007.]**

2007: the iPhone made the screen itself the controller.

The date matters less than the interface: what the player touches, and what the
machine answers.

**[Open Arcade.]**

Each era page has four exhibits. Here is Spacewar! again: a photograph, a short
explanation, why it mattered, and its source. The images are stored locally and
credited under each one and in `CREDITS.md`.

**[Point at the layout.]**

The design is a small archive: a dark room, paper-coloured plates, serif
captions, monospaced labels. The photographs are the evidence; the text is the
caption.

**[Resize to phone width.]**

Underneath it is semantic HTML, one stylesheet, and plain JavaScript. No
framework, no server, no database. It works on a phone, and Playback works from
the keyboard.

**[Back to the top. Pause.]**

What I learned: game history is not only technology getting bigger. It is the
small interface between a player and a game. That is what I wanted the site to
make visible.

Thank you.

---

## 中文对照（只帮你理解，不要现场读）

我在课程平台的个人项目页开始：海报、描述、链接，然后点进线上网站。

网站有四页，一个论点：游戏最大的变化来自新的“玩”的方式，而不是更好的画面。

Playback 让这个论点可以操作。选 1962 到 2025 的任意一年，页面找到最近的展品，
更新年份、标题、说明和链接。

1962 年 Spacewar! 把实验室电脑变成双人游戏；1994 年 PlayStation 把 3D 和 CD
声音带进客厅；2007 年 iPhone 让屏幕本身成为控制器。

重点不是年份，而是玩家触摸什么、机器回应什么。

每个时代页有四个展品：照片、说明、为什么重要、来源。图片存在本地，图下和
`CREDITS.md` 都有 credit。

设计像一个小档案馆：暗色房间、纸色展板、衬线说明、等宽标签。照片是证据，
文字是图注。

技术是语义 HTML、一个 CSS、原生 JS；没有框架、服务器、数据库。手机能用，
Playback 也能用键盘操作。

我学到的是：游戏史不只是技术变大，而是玩家和游戏之间那个小界面。

---

## Q&A — the decisions he will ask about

Answer in one or two sentences, then point at the screen. Do not recite.

### 1. Why game history?

I know games well, and I wanted an argument rather than a list. The site argues
that input changed games more than graphics did.

### 2. Why these three eras?

Each era changes the player’s relationship with the machine: public play becomes
domestic; 3D movement needs a camera and an analog stick; the network and
touchscreen take play everywhere.

### 3. Why only four pages?

The brief asks for four. Four pages with four exhibits each gave me depth instead
of a thin timeline.

### 4. Why this layout?

It is an archive catalogue, not a blog: a dark room makes the photographs glow,
paper plates unify images from different sources, and one reading column keeps
the text caption-like.

### 5. Why Playback?

The thesis is about interaction, so a static timeline would contradict it. The
slider lets the visitor feel the change, and it is the one piece of JavaScript I
can explain line by line.

### 6. How does Playback work?

The events are in an array. `nearestEvent()` uses `Math.abs` to find the closest
year. `render()` updates the text, the link and `aria-valuetext`. `input` updates
the screen while dragging; `change` also announces the result.

### 7. Why these 13 events?

Each one marks a change in input or access, not just a popular console. Some are
platforms — the iPhone, Xbox Live — because they changed how people play.

### 8. Why no framework?

The site is static. Plain HTML, CSS and JavaScript are fast, easy to host on
GitHub Pages, and I can explain every line. A framework would add a build step
and no user value.

### 9. Why these images?

The course allows online images if they are properly sourced. I downloaded each
one, stored it locally, and recorded the source, credit and access date under the
image and in `CREDITS.md`.

### 10. Are the images licensed?

They are public-domain museum images, official company press images, or a credited
press gallery. `CREDITS.md` records the status of each one.

### 11. What was the hardest bug?

Images were cropped inside the 4:3 frames because of percentage heights. I fixed
it with absolute positioning, `inset: 0`, and `object-fit: contain`.

### 12. How did you test it?

I checked every link and image, validated the HTML, ran an accessibility audit,
and tested the layout at 375 px, tablet and desktop widths. I also tested the
slider with the keyboard.

### 13. What about accessibility?

Skip link, landmarks, one `h1` per page, `aria-current` on the nav, labelled
slider, `aria-live` status, alt text, visible focus, and reduced motion.

### 14. What would you change?

More events and more non-Western examples, a proper sources page, lighter images,
and more real-device testing. I would also add a way to compare two years.

### 15. How did you use AI?

As an assistant for scaffolding, debugging and checking sources. I edited the
text, checked the pages in the browser, and I can explain the structure and the
Playback code. The decisions are mine.

### 16. What are you most proud of?

Playback. It turns the timeline into something a visitor can use, and it is
keyboard accessible without a server.

---

## Code you must be able to point at

If he says “show me”, open these — do not scroll randomly.

1. `assets/js/main.js` — the `events` array (13 objects), `nearestEvent()`,
   `render()`, the `input` / `change` listeners, and the random button.
2. `assets/css/style.css` — `.figure-frame` with `aspect-ratio` and
   `object-fit: contain`; the exhibit grid; the media queries.
3. `index.html` — skip link, `aria-live` status, the labelled range input.
4. `CREDITS.md` — one line per image: source, credit, licence, access date.

If you cannot explain a line, do not point at it. Point at what you know.
