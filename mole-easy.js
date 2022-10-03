//Global Variables
const liveStatus = document.querySelector('#live-status');
const seconds = document.querySelector('#seconds');
const restartButton = document.querySelector('#restart-button');
const cells = document.querySelectorAll('.cell');
const mole = document.querySelector('.mole');

//Mole got hit audio
const boinkSound = new Audio('../music/boink.mp3');
const winSound = new Audio('../music/win.mp3');
const loseSound = new Audio('../music/game-over.mp3');
loseSound.volume = 0.2;
const backgroundMusic = new Audio('../music/background-music.mp3');
backgroundMusic.volume = 0.2;
backgroundMusic.loop = true;

let cellArray = Array.from(cells);
let playerScore = document.querySelector('#player-score');
let score = 0;
let switchSpeed = null;
let currentlyPlaying = false
let stopClick = false
let lastCell;
let wackMole;
let time = 15;
let startCountDown;

seconds.innerText = 15;




//functions
const startGame = () => {
    currentlyPlaying = true
    backgroundMusic.play()
    liveStatus.innerText = `Reach 100 Point To Win`;
    startCountDown = setInterval(countDown, 1000);
    moleMoveSpeed();
    cells.forEach(cell => {
        cell.addEventListener('click', function(){
            if(cell.id ===  wackMole && score < 100) { 
                // if stopClick is true, it will return and prevent from adding more points from the same cell
                if(stopClick){
                    return;
                } 
                addScore();
            }
            if (score === 100){
                youWin();
            }
        })
    })
}

const addScore = () => {
    boinkSound.play();
    score += 10;
    playerScore.innerText = score;
    // stops player from cheating and adding multiple points from the same cell
    stopClick = true;
}

const youWin = () => {
    backgroundMusic.pause()
    winSound.play()
    liveStatus.innerText = `You Win!`;
    //cleans the game after a win
    clearInterval(switchSpeed);
    clearInterval(startCountDown)
    cells.forEach(cell => {
        cell.classList.remove('mole');
    })
}

const restart = () => {
    
    backgroundMusic.pause()
    clearInterval(switchSpeed);
    clearInterval(startCountDown)
    score = 0;
    time = 15;
    seconds.innerText = 15;
    playerScore.innerText = score;
    
    cells.forEach(cell => {
        cell.classList.remove('mole');
    })
    startGame()
}

const gameOver = () => {
    currentlyPlaying = false;
    liveStatus.innerText = `You Lose`;
    clearInterval(switchSpeed);
    clearInterval(startCountDown)
    cells.forEach(cell => {
        cell.classList.remove('mole');
    })
    
    backgroundMusic.pause();
    loseSound.play();
    playAgain()
}

const playAgain = () => {
    restartButton.innerText = `Play Again`;
}

const randomMole = () =>{
    //revomes mole after it appears
    cells.forEach(cell => {
        cell.classList.remove('mole');
    })
    stopClick = false;
    //randomized the mole appearance
    let random = cells[Math.floor(Math.random()*5)];
   // if the last randomized cell equals to the new random cell, it will return and run the function randomMole() again
    if(random === lastCell){
        return randomMole();
    }
    //adding the class .mole to the id's in the html document
    random.classList.add('mole');
    wackMole = random.id;
    
    // stores the last randomized cell into the variable lastCell
    lastCell = random
    return random;
}

const moleMoveSpeed = () => {
    switchSpeed = setInterval(randomMole, 1000);
}

const countDown = () => {
    if(time > 0){ 
    time--;
	seconds.innerText = time;
    }
    if(time === 0){
        gameOver();
    }
}






restartButton.addEventListener('click', restart);
//called functions
startGame();








