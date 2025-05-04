const audio = document.getElementById("myAudio");
const btn = document.getElementById("playPauseBtn");

audio.play();
btn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    btn.textContent = "⏸️"; // pause icon
  } else {
    audio.pause();
    btn.textContent = "▶️"; // play icon
  }
});

//text animation
var wobbleElements = document.querySelectorAll(".wobble");

wobbleElements.forEach(function (el) {
  el.addEventListener("mouseover", function () {
    if (
      !el.classList.contains("animating") &&
      !el.classList.contains("mouseover")
    ) {
      el.classList.add("animating", "mouseover");

      var letters = el.innerText.split("");

      setTimeout(function () {
        el.classList.remove("animating");
      }, (letters.length + 1) * 50);

      var animationName = el.dataset.animation;
      if (!animationName) {
        animationName = "jump";
      }

      el.innerText = "";

      letters.forEach(function (letter) {
        if (letter == " ") {
          letter = "&nbsp;";
        }
        el.innerHTML += '<span class="letter">' + letter + "</span>";
      });

      var letterElements = el.querySelectorAll(".letter");
      letterElements.forEach(function (letter, i) {
        setTimeout(function () {
          letter.classList.add(animationName);
        }, 50 * i);
      });
    }
  });

  el.addEventListener("mouseout", function () {
    el.classList.remove("mouseover");
  });
});
