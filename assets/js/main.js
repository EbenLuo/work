(function () {
  "use strict";

  const events = [
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

  const range = document.getElementById("year");
  if (!range) return;

  const yearOutput = document.getElementById("year-output");
  const resultYear = document.getElementById("result-year");
  const resultEra = document.getElementById("result-era");
  const resultTitle = document.getElementById("result-title");
  const resultText = document.getElementById("result-text");
  const resultLink = document.getElementById("result-link");
  const randomButton = document.getElementById("random-year");
  const status = document.getElementById("playback-status");

  let currentYear = 1972;

  function nearestEvent(year) {
    return events.reduce(function (closest, event) {
      return Math.abs(event.year - year) < Math.abs(closest.year - year)
        ? event
        : closest;
    }, events[0]);
  }

  function render(event, announce) {
    currentYear = event.year;
    range.value = String(event.year);
    range.setAttribute("aria-valuetext", event.year + ", " + event.title);

    yearOutput.textContent = String(event.year);
    resultYear.textContent = String(event.year);
    resultEra.textContent = event.era;
    resultTitle.textContent = event.title;
    resultText.textContent = event.text;
    resultLink.href = event.href;
    resultLink.textContent = "Read " + event.era;

    if (announce && status) {
      status.textContent = event.year + ": " + event.title + ". " + event.text;
    }
  }

  range.addEventListener("input", function () {
    render(nearestEvent(Number(range.value)), false);
  });

  range.addEventListener("change", function () {
    render(nearestEvent(Number(range.value)), true);
  });

  if (randomButton) {
    randomButton.addEventListener("click", function () {
      if (events.length < 2) return;

      let next = events[Math.floor(Math.random() * events.length)];
      while (next.year === currentYear) {
        next = events[Math.floor(Math.random() * events.length)];
      }
      render(next, true);
    });
  }

  render(nearestEvent(1972), false);
})();