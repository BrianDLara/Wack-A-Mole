const liveStatus = document.querySelector('#live-status');
const cells = document.querySelectorAll('.cell');
const restartButton = document.querySelector('#restart-button')

let cellArray = Array.from(cells);
let currentlyPlaying = false;
let playerScore = document.querySelector('#player-score');
let score = 0;

const startGame = () => {
currentlyPlaying = true;

    // playerScore.innerText = score
}

const addScore = () => {
    score += 1
    playerScore.innerText = score
}

cells.forEach(cell => cell.addEventListener('click', addScore))
   


startGame()




