let turn=`red`
let counter=0
let gridClick=`some string`

const instructions = document.querySelector(`instructions`)
const newBoard = `Select a square to go first`
instructions.innerText = newBoard

const resetButton = document.querySelector(`#resetButton`)
resetButton.addEventListener (`click`, () => {
    turn=`red`
    counter=0
    instructions.innerText = newBoard
    return gridBlocks.forEach (gridBlock => {
        gridBlock.setAttribute (`style` , `background: white`)
        gridBlock.addEventListener(`click`, addColor)
    })
})

function addColor () {
    gridClick = document.querySelector(`#${event.target.id}`)
    gridClick.setAttribute(`style`, `background: ${turn}`)
    gridClick.removeEventListener(`click`,addColor)
    if (counter === 8) {
        instructions.innerText = `Out of moves. Select the RESET to continue.`        
    } else {
        counter ++
        turn = counter %2 === 0 ? `red` : `blue`
        instructions.innerText = `It is now ${turn}'s turn...`
    }
}

const gridBlocks = document.querySelectorAll(`.gridBlock`)
gridBlocks.forEach (gridBlock => {
    gridBlock.addEventListener(`click`, addColor)    
})