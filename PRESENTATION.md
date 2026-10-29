# Play/Past — 3-minute live presentation

Live site: https://ebenluo.github.io/work/

## Before you start

- Open the live homepage in one tab.
- Open `arcade.html` in a second tab as a backup.
- Close notifications and unrelated tabs.
- Browser zoom: 100%.
- Have Live Server ready as a network backup.
- Do not read the page word for word. Point, pause, then speak.

## Time plan

| Time | What you show | What you say |
|---|---|---|
| 0:00–0:25 | Homepage, title | Who you are, what the site is, the argument |
| 0:25–1:30 | Playback | Drag to 1962, 1994, 2007; explain the interaction |
| 1:30–2:15 | Arcade page | Four-page structure, four exhibits, image credits |
| 2:15–2:40 | Back to Home / design | Archive design, semantic HTML, no server |
| 2:40–3:00 | Homepage | What you learned; thank you |

---

## English script (about 300 words)

**[Open https://ebenluo.github.io/work/. Pause two seconds.]**

Hi, I’m Eben. This is *Play/Past: How We Played*.

It is a short history of video games, but it is not a timeline of every console. It makes one argument: the biggest changes in games did not come from better graphics. They came from new ways of playing.

**[Scroll to Playback.]**

To make that argument interactive, I built Playback. You can choose any year from 1962 to 2025, and the page finds the nearest exhibit. It updates the year, the title, the explanation, and the link.

**[Drag to 1962.]**

In 1962, Spacewar! turned a laboratory computer into a place for two people to play.

**[Drag to 1994.]**

In 1994, PlayStation brought 3D graphics and CD sound into the living room.

**[Drag to 2007.]**

In 2007, the iPhone made the screen itself the controller.

The point is not the date. The point is that the way we touch, move, and connect to a game keeps changing.

**[Scroll down / click Arcade.]**

The site has four pages: Home, Arcade, 3D, and Online. Each era page has four exhibits. Every exhibit has a photograph, a short explanation, and a section called “Why it mattered.”

For example, the Arcade page moves from Spacewar! and Pong to the Atari 2600 and the Famicom. The images come from museums, official company pages, and one credited press gallery. They are stored locally, with a credit under each image and in `CREDITS.md`.

**[Return to Home or point to the design.]**

The design is part of the argument too. It uses a dark archive style, paper-coloured image plates, serif headings, and monospaced labels. It should feel like a small museum catalogue, not a blog.

The site is built with semantic HTML, one external CSS file, and plain JavaScript. There is no framework, no server, and no database. Playback runs entirely in the browser.

**[Pause. Look at the audience.]**

Working on this project taught me that game history is not only about technology getting bigger. It is about the small interface between a player and a game. That is what I wanted the site to make visible.

Thank you.

---

## 中文对照（只帮你理解，不要现场读中文）

大家好，我是 Eben。这是 *Play/Past: How We Played*。

它是一段简短的电子游戏史，但不是每一台主机的年表。它只提出一个论点：游戏最大的变化不是来自更好的画面，而是来自新的“玩”的方式。

为了让这个论点可以互动，我做了 Playback。你可以选 1962 到 2025 之间的任意年份，页面会找到最接近的展品，更新年份、标题、说明和链接。

1962 年，Spacewar! 把实验室电脑变成了两个人一起玩的地方。
1994 年，PlayStation 把 3D 画面和 CD 声音带进客厅。
2007 年，iPhone 让屏幕本身变成了控制器。

重点不是年份，而是我们触摸、移动、连接游戏的方式一直在变。

网站有四页：Home、Arcade、3D、Online。每个时代页有四个展品。每个展品都有照片、简短说明和“Why it mattered”。

比如 Arcade 页，从 Spacewar!、Pong 到 Atari 2600、Famicom。图片来自博物馆、公司官方页面和一个注明来源的媒体图库，存在本地，每张图下面有 credit，`CREDITS.md` 里也有记录。

设计本身也是论点的一部分：深色档案馆、纸色图片展板、衬线标题、等宽标签。它应该像一本小型博物馆目录，而不是博客。

技术上是语义 HTML、一个外部 CSS 文件、原生 JavaScript。没有框架、没有服务器、没有数据库。Playback 完全在浏览器里运行。

这个项目让我明白：游戏史不只是技术越来越大，而是玩家和游戏之间那个小小的界面。这就是我想让网站呈现的东西。

谢谢。

---

## Likely questions, 1–2 sentence answers

### 1. Why this topic?

I know games well, and I wanted an argument rather than a list. The site argues that input changed games more than graphics did.

### 2. Why these three eras?

Each era changes the player’s relationship with the machine: public play becomes domestic, 3D movement needs a camera and an analog stick, and the network and touchscreen take play everywhere.

### 3. Why only four pages?

The brief asks for four. Four pages with four exhibits each gave me depth instead of a thin timeline.

### 4. Why no framework?

The site is static. Plain HTML, CSS and JavaScript are fast, easy to host on GitHub Pages, and I can explain every line.

### 5. How does Playback work?

The events are in a JavaScript array. `nearestEvent()` uses `Math.abs` to find the closest year. `render()` updates the text, link and `aria-valuetext`. The `input` event updates the screen; the `change` event also announces the result.

### 6. Why these images?

The teacher allowed online images, but the course requires proper sourcing. I downloaded each image, stored it locally, and recorded the source, credit and access date under the image and in `CREDITS.md`.

### 7. What was the hardest bug?

Images were being cropped inside the 4:3 frames because of percentage heights. I fixed it with absolute positioning, `inset: 0`, and `object-fit: contain`.

### 8. What would you improve?

More years in Playback, a filter by era, more real-device testing, and stronger primary sources for some claims.

### 9. How did you use AI?

I used it as an assistant for scaffolding, debugging and image sourcing. I checked the pages in the browser, validated the HTML, ran an accessibility audit, and verified the image sources. I can explain the structure and the Playback code.

### 10. Why the title Play/Past?

“Play” is the subject, “past” is the history, and the slash looks like a timeline. It also connects to the name Playback.

### 11. Why the dark archive style?

The subject is a museum-like history. Dark background, paper plates and catalogue labels make the photographs feel like one collection rather than random images from the web.

### 12. What are you most proud of?

Playback. It turns the timeline into something a visitor can use, and it is keyboard accessible without a server.
