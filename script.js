const text = "Would you please be my valentine? ˚ʚ♡ɞ˚";
let heartInterval;

function openEnvelope() {
  document.getElementById("envelope-screen").classList.remove("active");
  document.getElementById("happyMusic").play();
  document.getElementById("letter-screen").classList.add("active");
  typeText();
  startHearts();
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
  document.getElementById("letter-screen").classList.remove("active");
  document.getElementById("yes-screen").classList.add("active");
}

function noAnswer() {
  document.getElementById("letter-screen").classList.remove("active");
  document.getElementById("no-screen").classList.add("active");
  document.getElementById("happyMusic").pause();
  document.getElementById("sadMusic").play();
}

function goBack() {
  document.getElementById("no-screen").classList.remove("active");
  document.getElementById("letter-screen").classList.add("active");
}

/* HEARTS */
function startHearts() {
  heartInterval = setInterval(() => {
    const heart = document.createElement("span");
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    document.getElementById("hearts").appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
  }, 300);
}
