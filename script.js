let turn=`RED`
let counter=0
let gridClick=`some string`

const instructions = document.querySelector(`instructions`)
const newBoard = `Select a square to go first`
instructions.innerText = newBoard

const resetButton = document.querySelector(`#resetButton`)
resetButton.addEventListener (`click`, () => {
    turn=`RED`
    counter=0
    instructions.innerText = newBoard
    redMoves=[]
    blueMoves=[]
    won=false
    return gridBlocks.forEach (gridBlock => {
        gridBlock.setAttribute (`style` , `background: white`)
        gridBlock.addEventListener(`click`, addColor)
    })
})

const winningSequences = [
    [`11`,`12`,`13`],[`21`,`22`,`23`],[`31`,`32`,`33`], //across
    [`11`,`21`,`31`],[`12`,`22`,`32`],[`13`,`23`,`33`], //down
    [`11`,`22`,`33`],[`13`,`22`,`31`] //diagonal
]
let redMoves=[]
let redWins=0
const redScore = document.querySelector(`#redScore`)
let blueMoves=[]
let blueWins=0
const blueScore = document.querySelector(`#blueScore`)
let won = false
function checkWinner (moves) {
    winningSequences.forEach ( sequence => {
        if (sequence.every (winner => moves.includes(winner))){
            won = true;
            instructions.innerText = `${turn} won! Select the RESET to continue.`;
            if (turn === `RED`) {
                redWins++
                redScore.innerHTML = `Red Score:<br>${redWins}`
            } else {
                blueWins++
                blueScore.innerHTML = `Blue Score:<br>${blueWins}`
            }
        }
    })
}

function addColor (event) {
    //gridClick = document.querySelector(`#${event.target.id}`)
    if (!won) {
        gridClick = document.getElementById(`${event.target.id}`)
        gridClick.setAttribute(`style`, `background: ${turn}`)
        gridClick.removeEventListener(`click`,addColor)
        if (turn === `RED`) {
            redMoves.push(gridClick.id)
            checkWinner(redMoves)
        } else {
            blueMoves.push(gridClick.id)
            checkWinner(blueMoves)
        }
        if (counter === 8 && !won) {
            instructions.innerText = `It's a tie! Select the RESET to continue.`        
        } else if ( !won ){
            counter ++
            turn = counter %2 === 0 ? `RED` : `BLUE`
            instructions.innerText = `It is now ${turn}'s turn...`
        }
    }
}

const gridBlocks = document.querySelectorAll(`.gridBlock`)
gridBlocks.forEach (gridBlock => {
    gridBlock.addEventListener(`click`, addColor)    
})