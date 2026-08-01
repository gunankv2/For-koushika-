// Floating Golden Particles
function createParticles() {
  const container = document.getElementById("bgParticles");
  if (!container) return;
  
  for (let i = 0; i < 30; i++) {
    const p = document.createElement("div");
    p.className = "particle";
    const size = Math.random() * 3 + 1;
    p.style.width = size + "px";
    p.style.height = size + "px";
    p.style.left = Math.random() * 100 + "%";
    p.style.animationDelay = Math.random() * 10 + "s";
    p.style.animationDuration = 6 + Math.random() * 6 + "s";
    container.appendChild(p);
  }
}
createParticles();

// Page Switcher
const pages = document.querySelectorAll(".page");

function showPage(id) {
  pages.forEach(p => p.classList.remove("active"));
  const target = document.getElementById(id);
  if (target) target.classList.add("active");
}

// Loading Hide
window.onload = () => {
  setTimeout(() => {
    const loader = document.getElementById("loading");
    if (loader) loader.style.display = "none";
  }, 2200);
};

// Controls
const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const galleryNextBtn = document.getElementById("galleryNextBtn");
const finishBtn = document.getElementById("finishBtn");
const balloonContainer = document.getElementById("balloonContainer");
const letterText = document.getElementById("letterText");

if (startBtn) startBtn.onclick = () => showPage("journey");
if (nextBtn) nextBtn.onclick = () => showPage("questionPage");

// Prank YES Button
let yesCount = 0;
if (yesBtn) {
  yesBtn.onclick = () => {
    yesCount++;
    if (yesCount < 4) {
      yesBtn.style.position = "absolute";
      yesBtn.style.left = Math.floor(Math.random() * 50) + "%";
      yesBtn.style.top = Math.floor(Math.random() * 50) + "%";
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

// Pearl Pop Game
function createBalloons() {
  if (!balloonContainer) return;
  balloonContainer.innerHTML = "";
  let popped = 0;
  const total = 15;

  for (let i = 0; i < total; i++) {
    const b = document.createElement("div");
    b.className = "balloon";
    b.innerHTML = "✦";

    b.onclick = () => {
      b.style.transform = "scale(0)";
      b.style.opacity = "0";
      b.style.pointerEvents = "none";
      popped++;

      if (popped === total) {
        setTimeout(() => {
          showPage("galleryPage");
        }, 400);
      }
    };

    balloonContainer.appendChild(b);
  }
}

// Handwritten Letter Effect
const letterContent = `Dearest Koushika,

Happy Girlfriend Day ✨

Thank you for every smile, every quiet moment, and every beautiful memory we share.

You make my world infinitely brighter just by being in it.

I will always choose you, today and every day after.

Forever Yours,
Gunank`;

function startTypewriter() {
  if (!letterText) return;
  letterText.innerHTML = "";
  let i = 0;

  function type() {
    if (i < letterContent.length) {
      const char = letterContent.charAt(i);
      letterText.innerHTML += char === "\n" ? "<br>" : char;
      i++;
      setTimeout(type, 35);
    } else {
      if (finishBtn) finishBtn.style.display = "flex";
    }
  }
  type();
}

if (galleryNextBtn) {
  galleryNextBtn.onclick = () => {
    showPage("letterPage");
    startTypewriter();
  };
}

if (finishBtn) {
  finishBtn.onclick = () => {
    showPage("endPage");
    if (typeof confetti === 'function') {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#f5d7a1', '#ff4d6d', '#ffffff']
      });
    }
  };
}
