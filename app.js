const liveStatus = document.querySelector('#live-status');
const cells = document.querySelectorAll('.cell');
const restartButton = document.querySelector('#restart-button')
const mole = document.querySelector('.mole')

let cellArray = Array.from(cells);
let playerScore = document.querySelector('#player-score');
let score = 0;
let time = null




//functions
const randomMole = () =>{
    cells.forEach(cell => {
        cell.classList.remove('mole')
    })
    let random = cells[Math.floor(Math.random()*5)]
    random.classList.add('mole')
}

const moleTimer = () => {
    time = setInterval(randomMole, 500)
}

const startGame = () => {
    moleTimer()
    
    cells.forEach(cell => cell.addEventListener('click', function(){
        if(score < 5){
            score += 1
            playerScore.innerText = score 
        }
        
       
        
        
    }))
}

startGame()




