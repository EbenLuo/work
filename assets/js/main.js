/* Playback 交互：用 IIFE 包起来，避免变量污染全局。 */
(function () {
  /* 严格模式：把一些静默错误变成明显错误。 */
  "use strict";

  /* 展品数据：数组里每个对象存 year/title/era/href/text；全部在浏览器内，无服务器。 */
  const events = [
    /* 街机时代：公共机器 → 客厅；四条事件对应 arcade.html。 */
    {
      year: 1962,
      title: "Spacewar!",
      era: "the Arcade Era",
      href: "arcade.html",
      text: "A two-player space duel made on a PDP-1. It showed that a computer could be a place to play, not just a machine for calculation."
    },
    {
      year: 1972,
      title: "Pong",
      era: "the Arcade Era",
      href: "arcade.html",
      text: "Two paddles, one ball, and a score. Pong turned a laboratory demo into a public arcade habit."
    },
    {
      year: 1977,
      title: "Atari 2600",
      era: "the Arcade Era",
      href: "arcade.html",
      text: "A console with swappable cartridges brought arcade games home and turned the living room into a games room."
    },
    {
      year: 1983,
      title: "Famicom",
      era: "the Arcade Era",
      href: "arcade.html",
      text: "Nintendo's family computer combined a cheap console, a cross-shaped controller pad, and games designed for the home."
    },
    {
      year: 1985,
      title: "Nintendo Entertainment System",
      era: "the Arcade Era",
      href: "arcade.html",
      text: "The North American release of the Famicom helped rebuild the home console market after the crash of 1983."
    },
    /* 3D 时代：镜头、光盘、摇杆；四条事件对应 3d.html。 */
    {
      year: 1993,
      title: "Doom",
      era: "the 3D Revolution",
      href: "3d.html",
      text: "A fast first-person shooter that made the mouse and keyboard feel like a way to move through a world."
    },
    {
      year: 1994,
      title: "PlayStation",
      era: "the 3D Revolution",
      href: "3d.html",
      text: "Sony's console brought 3D graphics and CD sound into the living room, and made games feel like mainstream entertainment."
    },
    {
      year: 1996,
      title: "Nintendo 64",
      era: "the 3D Revolution",
      href: "3d.html",
      text: "Its analog stick gave players a continuous range of movement, which made 3D spaces easier to explore."
    },
    {
      year: 1997,
      title: "DualShock",
      era: "the 3D Revolution",
      href: "3d.html",
      text: "Two analog sticks and vibration turned the controller into a two-handed interface for 3D movement and feedback."
    },
    /* 在线时代：网络、触屏、便携；四条事件对应 online.html。 */
    {
      year: 2002,
      title: "Xbox Live",
      era: "the Online Era",
      href: "online.html",
      text: "A console online service with a friends list and voice chat. It made the network part of the console experience."
    },
    {
      year: 2004,
      title: "World of Warcraft",
      era: "the Online Era",
      href: "online.html",
      text: "A persistent online world that turned logging in into a social routine for millions of players."
    },
    {
      year: 2007,
      title: "iPhone",
      era: "the Online Era",
      href: "online.html",
      text: "A multi-touch screen removed the physical buttons and made direct touch a new kind of game controller."
    },
    {
      year: 2017,
      title: "Nintendo Switch",
      era: "the Online Era",
      href: "online.html",
      text: "A console that could be a handheld or a living-room machine. It made the screen and the controller portable together."
    }
  ];

  /* 找到年份滑块；如果页面没有 #year（脚本被别的页面加载），下面会直接退出。 */
  const range = document.getElementById("year");
  /* 防御性判断：宁可什么都不做，也不要在 null 上调用方法。 */
  if (!range) return;

  /* 缓存所有需要更新的 DOM 节点，避免每次事件都重新查询。 */
  const yearOutput = document.getElementById("year-output");
  const resultYear = document.getElementById("result-year");
  const resultEra = document.getElementById("result-era");
  const resultTitle = document.getElementById("result-title");
  const resultText = document.getElementById("result-text");
  const resultLink = document.getElementById("result-link");
  const randomButton = document.getElementById("random-year");
  const status = document.getElementById("playback-status");

  /* 当前展品年份，用于“随机”时避免连续选到同一个。 */
  let currentYear = 1972;

  /* 输入任意年份，返回最接近的展品；滑块不需要每年都有事件。 */
  function nearestEvent(year) {
    /* reduce 累积“目前最接近的展品”；Math.abs 取绝对差，三元表达式选更近者。 */
    return events.reduce(function (closest, event) {
      return Math.abs(event.year - year) < Math.abs(closest.year - year)
        ? event
        : closest;
    }, events[0]);
  }

  /* 把一条事件渲染到页面；announce 为 true 时才写入 aria-live 状态。 */
  function render(event, announce) {
    /* 记录当前年份，供随机按钮比较。 */
    currentYear = event.year;
    /* 滑块值必须是字符串；同时让滑块“吸附”到展品年份。 */
    range.value = String(event.year);
    /* 给屏幕阅读器一个比裸数字更有意义的读法。 */
    range.setAttribute("aria-valuetext", event.year + ", " + event.title);

    /* 更新大号年份、结果年份/时代/标题/正文和链接。 */
    yearOutput.textContent = String(event.year);
    resultYear.textContent = String(event.year);
    resultEra.textContent = event.era;
    resultTitle.textContent = event.title;
    resultText.textContent = event.text;
    /* 结果链接指向对应章节页面。 */
    resultLink.href = event.href;
    resultLink.textContent = "Read " + event.era;

    /* 只在 change（松开/确定）或按钮点击时播报，避免拖动时刷屏。 */
    if (announce && status) {
      status.textContent = event.year + ": " + event.title + ". " + event.text;
    }
  }

  /* input：拖动过程中持续触发；只更新视觉，不播报。 */
  range.addEventListener("input", function () {
    render(nearestEvent(Number(range.value)), false);
  });

  /* change：值确定时触发；更新并写入 aria-live。 */
  range.addEventListener("change", function () {
    render(nearestEvent(Number(range.value)), true);
  });

  /* 随机按钮是可选增强；找不到就不绑定。 */
  if (randomButton) {
    /* 点击后随机挑一个不同的展品，并播报。 */
    randomButton.addEventListener("click", function () {
      /* 只有一个事件时无法避免重复，直接返回。 */
      if (events.length < 2) return;

      /* Math.random 返回 0–1；乘长度、向下取整得到数组索引。 */
      let next = events[Math.floor(Math.random() * events.length)];
      /* 如果随机到当前年份，就重新抽，直到不同。 */
      while (next.year === currentYear) {
        next = events[Math.floor(Math.random() * events.length)];
      }
      render(next, true);
    });
  }

  /* 初始渲染：1972/Pong；初始内容不播报（HTML 已有默认值）。 */
  render(nearestEvent(1972), false);
})();