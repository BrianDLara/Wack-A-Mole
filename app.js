const liveStatus = document.querySelector('#live-status');
const cells = document.querySelectorAll('.cell');
const restartButton = document.querySelector('#restart-button');
const mole = document.querySelector('.mole');

let cellArray = Array.from(cells);
let playerScore = document.querySelector('#player-score');
let score = 0;
let time = null;
let stopClick = false
let wackMole;




//functions
const randomMole = () =>{
    //revomes mole after it appears
    cells.forEach(cell => {
        cell.classList.remove('mole');
    })
    stopClick = false;
    //randomized the mole appearance
    let random = cells[Math.floor(Math.random()*5)];
    random.classList.add('mole');
    wackMole = random.id;

}

const moleTimer = () => {
    time = setInterval(randomMole, 750);
}

const youWin = () => {
    liveStatus.innerText = `You Win!`;
    clearInterval(time);
    //cleans the game after a win
    cells.forEach(cell => {
        cell.classList.remove('mole');
    })

}

const addScore = () => {
    score ++;
    playerScore.innerText = score;
    stopClick = true;

}

const startGame = () => {
    liveStatus.innerText = `Hit 10 Moles To Win`;
    moleTimer();
    cells.forEach(cell => cell.addEventListener('click', function(){
        if(cell.id ===  wackMole && score < 10) { 
            if(stopClick){
                return;
            } 
            addScore();
        }else if (score === 10){
            youWin();
        }
}))
}


startGame()





