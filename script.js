// ===== Elements =====

const pages = document.querySelectorAll(".page");

const loading = document.getElementById("loading");
const music = document.getElementById("bgMusic");

const playBtn = document.getElementById("playBtn");
const continueJourney = document.getElementById("continueJourney");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const openLetter = document.getElementById("openLetter");
const finishBtn = document.getElementById("finishBtn");

const letterText = document.getElementById("letterText");
const balloonContainer = document.getElementById("balloonContainer");

// ===== Page Change =====

function showPage(id){

pages.forEach(page=>page.classList.remove("active"));

document.getElementById(id).classList.add("active");

}

// ===== Loading =====

window.onload=()=>{

setTimeout(()=>{

loading.style.display="none";

},2000);

};

// ===== Play Music =====

playBtn.onclick=()=>{

music.play();

showPage("journeyPage");

};

// ===== Journey =====

continueJourney.onclick=()=>{

showPage("questionPage");

};

// ===== YES / NO =====

let yesCount = 0;

yesBtn.onclick = () => {

yesCount++;

if(yesCount < 4){

yesBtn.style.position = "absolute";

yesBtn.style.left = Math.random()*70 + "%";

yesBtn.style.top = Math.random()*60 + "%";

return;

}

showPage("balloonPage");

createBalloons();

};

noBtn.onclick = () => {

showPage("balloonPage");

createBalloons();

};

// ===== Balloons =====

let popped = 0;

function createBalloons(){

balloonContainer.innerHTML = "";

popped = 0;

for(let i=0;i<20;i++){

const balloon = document.createElement("div");

balloon.className = "balloon";

balloon.style.left = Math.random()*85 + "%";

balloon.style.top = Math.random()*70 + "%";

balloon.onclick = ()=>{

balloon.remove();

popped++;

if(popped === 20){

showPage("galleryPage");

}

};

balloonContainer.appendChild(balloon);

}

}

// ===== Love Letter =====

const letter = `

My Dearest Koushika ❤️

Happy International Girlfriend Day 🌹

Thank you for coming into my life.

Every smile of yours,
every memory we made,
every little moment together
means the world to me.

You are my happiness,
my peace,
and my favorite person.

No matter where life takes us,
I will always choose you.

Forever Yours,

Gunank ❤️

`;

let index = 0;

function typeLetter(){

letterText.innerHTML = "";

index = 0;

typing();

}

function typing(){

if(index < letter.length){

letterText.innerHTML += letter.charAt(index);

index++;

setTimeout(typing,35);

}

}

openLetter.onclick = ()=>{

showPage("letterPage");

typeLetter();

};

finishBtn.onclick = ()=>{

showPage("endPage");

};


// ===== Floating Hearts =====

setInterval(()=>{

const heart = document.createElement("div");

heart.className = "heart";

heart.innerHTML = "❤️";

heart.style.left = Math.random()*100 + "vw";

document.body.appendChild(heart);

setTimeout(()=>heart.remove(),6000);

},700);
