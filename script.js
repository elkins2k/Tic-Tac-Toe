const gridBlocks = document.querySelectorAll(`.gridBlock`)
const redBlocks=0
const blueBlocks=0
let turn=`red`
let counter=redBlocks+blueBlocks
let gridClick=``
const instructions = document.querySelector(`instructions`)
const newBoard = `Select a square to go first`
instructions.innerText = newBoard

const resetButton = document.querySelector(`#resetButton`)
resetButton.addEventListener (`click`, () => {
    instructions.innerText = newBoard
    counter=0
    turn=`red`
    gridBlocks.forEach (gridBlock => {
        gridBlock.setAttribute (`style` , `background: white`)
    })
})

function addColor () {
    gridClick = document.querySelector(`#${event.target.id}`)
    gridClick.setAttribute(`style`, `background: ${turn}`)
    counter ++
    turn = counter %2 === 0 ? `red` : `blue`
    instructions.innerText = `It is now ${turn}'s turn...`
    gridClick.removeEventListener(`click`,addColor)
}

gridBlocks.forEach (gridBlock => {
    if (counter < 9) {
        gridBlock.addEventListener(`click`, addColor)
    } else {
    instructions.innerText = `Out of moves. Select the RESET to continue.`
    }
})