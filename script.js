// Pages
const pages = document.querySelectorAll(".page");

function showPage(id) {
  pages.forEach(p => p.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// Loading
window.onload = () => {
  setTimeout(() => {
    document.getElementById("loading").style.display = "none";
  }, 2000);
};

// Buttons
const startBtn = document.getElementById("startBtn");
const continueBtn = document.getElementById("continueBtn");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const letterBtn = document.getElementById("letterBtn");
const finishBtn = document.getElementById("finishBtn");

const balloonContainer = document.getElementById("balloonContainer");
const letterText = document.getElementById("letterText");

// Navigation
startBtn.onclick = () => showPage("journeyPage");

continueBtn.onclick = () => showPage("questionPage");

// YES button prank
let yesCount = 0;

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

noBtn.onclick = () => {
  showPage("balloonPage");
  createBalloons();
};

// Balloon Game
function createBalloons() {

  balloonContainer.innerHTML = "";

  let popped = 0;

  for (let i = 0; i < 20; i++) {

    const b = document.createElement("div");

    b.className = "balloon";

    b.innerHTML = "🎈";

    b.onclick = () => {

      b.remove();

      popped++;

      if (popped === 20) {

        showPage("galleryPage");

      }

    };

    balloonContainer.appendChild(b);

  }

}

// Letter
const letter = `My Dearest Koushika ❤️

Happy Girlfriend Day 🌹

Thank you for every smile,
every memory,
and every beautiful moment.

You are my happiness.

Forever Yours ❤️

Gunank`;

letterBtn.onclick = () => {

  showPage("letterPage");

  letterText.innerHTML = "";

  let i = 0;

  function type() {

    if (i < letter.length) {

      letterText.innerHTML += letter.charAt(i);

      i++;

      setTimeout(type, 35);

    }

  }

  type();

};

finishBtn.onclick = () => {
  showPage("endPage");
};
