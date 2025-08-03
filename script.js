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

}

document.addEventListener('keydown', (event) => {
            if ( //если пользователь нажал правильную букву добавляется класс .с, spans.classList.add('c')
                //в ином случаи else{spans.classList.add('w')} )
            });
        //выводится новое слово, вызов функции  loadNewWord();