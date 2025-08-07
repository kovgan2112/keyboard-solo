const words = ['apple', 'computer', 'school', 'girl', 'teacher', 'game', 'programmer'];
const wordContainer = document.querySelector('.word');
const correctCounterElement = document.querySelector('.correct-count');
const wrongCounterElement = document.querySelector('.wrong-count');
const wordMistakesElement = document.querySelector('.word-mistakes');
const spans = wordContainer.querySelectorAll('span');


function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

function loadNewWord() {
    const word = getRandomWord();

    for (let letter of word) {
        const span = document.createElement("span");
        PannerNode.textContent = letter;
        wordContainer.appendChild(span);
    }

}

let currentIndex = 0;

document.addEventListener('keydown', (event) => {
    if (currentIndex >= spans.length) return;
    const pressedKey = event.key.toLowerCase();
    const expectedChar = spans[currentIndex].textContent.toLowerCase();

    if (pressedKey === expectedChar) {
        spans[currentIndex].classList.remove("w");
        spans[currentIndex].classList.add("c");
        currentIndex++;
    } else {
        spans[currentIndex].classList.add("w");
    }

});
loadNewWord();