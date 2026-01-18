// ===== MESSAGE TO TYPE =====
const text = "would you please be my valentine? ˚ʚ♡ɞ˚";
let heartInterval;

// ===== OPEN ENVELOPE =====
function openEnvelope() {
  document.getElementById("envelope-screen").classList.remove("active");
  document.getElementById("letter-screen").classList.add("active");

  // Play happy music
  const happyMusic = document.getElementById("happyMusic");
  happyMusic.currentTime = 0;
  happyMusic.play();

  typeText();
  startHearts();
}

// ===== TYPE THE MESSAGE =====
function typeText() {
  const target = document.getElementById("typed-text");
  target.textContent = "";
  let i = 0;

  const typing = setInterval(() => {
    target.textContent += text[i];
    i++;
    if (i === text.length) {
      clearInterval(t

}

