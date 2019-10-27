// Get the elements you’ll need from your HTML
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const missedGuesses = 0;
const overlay = document.getElementById('overlay');
const startGameBtn = document.querySelector('.btn__reset');

// Event listener to hide the “Start Game” overlay screen
startGameBtn.addEventListener('click', () => {
  overlay.style.display = "none";
});

// Array with phrases
var phrases = [
  "What I love most about my home is who I share it with",
  "It works fine on my computer",
  "It is not a bug it is a feature",
  "What version of Internet Explorer are you using",
  "Somebody must have changed my code",
  "Is the cable plugged in"
];

function getRandomPhraseAsArray() {
  var getArray = phrases.length;
  for (let i = 0; i < getArray; i++) {
    console.log(phrases[i]);
  }
}

getRandomPhraseAsArray();
