// Pages Selection
const pages = document.querySelectorAll(".page");

function showPage(id) {
  const targetPage = document.getElementById(id);
  if (targetPage) {
    pages.forEach(p => p.classList.remove("active"));
    targetPage.classList.add("active");
  } else {
    console.error(`Page with ID "${id}" not found.`);
  }
}

// Loading Hide
window.onload = () => {
  setTimeout(() => {
    const loadingElem = document.getElementById("loading");
    if (loadingElem) {
      loadingElem.style.display = "none";
    }
  }, 2000);
};

// Buttons Selection
const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const galleryNextBtn = document.getElementById("galleryNextBtn");
const finishBtn = document.getElementById("finishBtn");

const balloonContainer = document.getElementById("balloonContainer");
const letterText = document.getElementById("letterText");

// Navigation
if (startBtn) {
  startBtn.onclick = () => showPage("journey");
}

if (nextBtn) {
  nextBtn.onclick = () => showPage("questionPage");
}

// YES / NO Button Logic (Prank Game)
let yesCount = 0;

if (yesBtn) {
  yesBtn.onclick = () => {
    yesCount++;

    if (yesCount < 4) {
      yesBtn.style.position = "absolute";
      yesBtn.style.left = Math.random() * 70 + "%";
      yesBtn.style.top = Math.random() * 60 + "%";
      return;
    }

    showPage("balloonPage");
    createBalloons();
  };
}

if (noBtn) {
  noBtn.onclick = () => {
    showPage("balloonPage");
    createBalloons();
  };
}

// Balloon Game
function createBalloons() {
  if (!balloonContainer) return;
  
  balloonContainer.innerHTML = "";
  let popped = 0;
  const totalBalloons = 20;

  for (let i = 0; i < totalBalloons; i++) {
    const b = document.createElement("div");
    b.className = "balloon";
    b.innerHTML = "🎈";

    b.onclick = () => {
      b.style.visibility = "hidden";
      popped++;

      if (popped === totalBalloons) {
        setTimeout(() => {
          showPage("galleryPage");
        }, 300);
      }
    };

    balloonContainer.appendChild(b);
  }
}

// Letter Typing Effect
const letter = `My Dearest Koushika ❤️

Happy Girlfriend Day 🌹

Thank you for every smile,
every memory,
and every beautiful moment.

You are my happiness.

Forever Yours ❤️

Gunank`;

function startLetterTyping() {
  if (!letterText) return;
  letterText.innerHTML = "";
  let i = 0;

  function type() {
    if (i < letter.length) {
      if (letter.charAt(i) === "\n") {
        letterText.innerHTML += "<br>";
      } else {
        letterText.innerHTML += letter.charAt(i);
      }
      i++;
      setTimeout(type, 35);
    }
  }

  type();
}

// Gallery page -> Letter page button handler
if (galleryNextBtn) {
  galleryNextBtn.onclick = () => {
    showPage("letterPage");
    startLetterTyping();
  };
}

// Finish Button -> End page handler
if (finishBtn) {
  finishBtn.onclick = () => {
    showPage("endPage");
  };
}
