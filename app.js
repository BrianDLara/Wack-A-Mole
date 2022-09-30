const liveStatus = document.querySelector('#live-status');
const cells = document.querySelectorAll('.cell');
const restartButton = document.querySelector('#restart-button')

let cellArray = Array.from(cells);
let playerScore = document.querySelector('#player-score');
let score = 0;

const startGame = () => {
cells.forEach(cell => cell.addEventListener('click', function(){
    
    if(score < 5){
        score += 1
        playerScore.innerText = score 
    }
if(score === 5){
        liveStatus.innerText = `You Won!`
    }
}))
}


    

   



startGame()




