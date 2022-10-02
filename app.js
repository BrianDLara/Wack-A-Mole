const liveStatus = document.querySelector('#live-status');
const cells = document.querySelectorAll('.cell');
const restartButton = document.querySelector('#restart-button')
const mole = document.querySelector('.mole')

let cellArray = Array.from(cells);
let playerScore = document.querySelector('#player-score');
let score = 0;
let time = null
let wackMole;



//functions
const randomMole = () =>{
    cells.forEach(cell => {
        cell.classList.remove('mole')
    })
    let random = cells[Math.floor(Math.random()*5)]
    random.classList.add('mole')
    wackMole = random.id

}

const moleTimer = () => {
    time = setInterval(randomMole, 1000)
}

const youWin = () => {
    liveStatus.innerText = `You Win!`
    clearInterval(time)
    cells.forEach(cell => {
        cell.classList.remove('mole')
    })

}

const addScore = () => {
  
    score ++
    playerScore.innerText = score
}

const startGame = () => {
    moleTimer()
    cells.forEach(cell => cell.addEventListener('click', function(){
        if(cell.id ===  wackMole && score < 3) { 
            addScore()
        }else if (score === 3){
            youWin()
        }
        
        //     score += 1
        //     playerScore.innerText = score 
        // }
}))
}


startGame()





