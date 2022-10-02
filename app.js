//Global Variables
const liveStatus = document.querySelector('#live-status');
const cells = document.querySelectorAll('.cell');
const restartButton = document.querySelector('#restart-button');
const mole = document.querySelector('.mole');

//Mole got hit audio
const boink = new Audio('../music/boings_jews-harp-7153.mp3');


let cellArray = Array.from(cells);
let playerScore = document.querySelector('#player-score');
let score = 0;
let time = null;
let stopClick = false
let lastCell;
let wackMole;




//functions
const startGame = () => {
    liveStatus.innerText = `Hit 10 Moles To Win`;
    moleMoveSpeed();
    cells.forEach(cell => {
        cell.addEventListener('click', function(){
            boink.play();
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
    time = setInterval(randomMole, 1500);
}

const youWin = () => {
    liveStatus.innerText = `You Win!`;
    //cleans the game after a win
    clearInterval(time);
    cells.forEach(cell => {
        cell.classList.remove('mole');
    })
}

const addScore = () => {
    score += 10;
    console.log('score')
    playerScore.innerText = score;
    // stops player from cheating and adding multiple points from the same cell
    stopClick = true;
}

//called functions
startGame()





