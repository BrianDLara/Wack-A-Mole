const liveStatus = document.querySelector('#live-status');
const cell = document.querySelectorAll('.cell');
const restartButton = document.querySelector('#restart-button')

let cellArray = Array.from(cell);
let gameInSession = false;
let playerScore = document.querySelector('player-score')