const text = "Will you be my Valentine? 💌";
let heartInterval;

function openEnvelope() {
  document.getElementById("envelope").classList.add("open");
  document.getElementById("happyMusic").play();

  setTimeout(() => {
    document.getElementById("envelope-screen").classList.add("hidden");
    document.getElementById("letter-screen").classList.remove("hidden");
    typeText();
    startHearts();
  }, 800);
}

function typeText() {
  const target = document.getElementById("typed-text");
  target.textContent = "";
  let i = 0;

  const typing = setInterval(() => {
    target.textContent += text[i];
    i++;
    if (i === text.length) {
      clearInterval(typing);
      document.getElementById("buttons").classList.remove("hidden");
    }
  }, 70);
}

function yesAnswer() {
  document.getElementById("letter-screen").classList.add("hidden");
  document.getElementById("yes-screen").classList.remove("hidden");
}

function noAnswer() {
  document.getElementById("letter-screen").classList.add("hidden");
  document.getElementById("no-screen").classList.remove("hidden");
  document.getElementById("happyMusic").pause();
  document.getElementById("sadMusic").play();
}

function goBack() {
  document.getElementById("no-screen").classList.add("hidden");
  document.getElementById("letter-screen").classList.remove("hidden");
}

/* ❤️ HEARTS */
function startHearts() {
  heartInterval = setInterval(() => {
    const heart = document.createElement("span");
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    document.getElementById("hearts").appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
  }, 300);
}
