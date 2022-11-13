const body = document.querySelector('body')
const title = document.createElement('h1')
let valueDivs = ['','','','','','','','','']
let numberClick = 0
let turn = true
let blocking = false

title.innerText = 'Tic Tac Toe Game'
title.classList.add('title')
body.appendChild(title)

const container = document.createElement('div')
container.classList.add('container')
body.appendChild(container)

updateContainer()
function updateContainer() {
    for(let i = 0; i < 9; i++) {
        const divWithValue = document.createElement('div')
        divWithValue.classList.add('block-value')
        divWithValue.id = `${i}`
        container.appendChild(divWithValue)
    }

    const listDiv = document.querySelectorAll('.block-value')
    addEventDiv(listDiv)
}


function eventDiv(element) {
    if(!blocking) {
        if(element.innerText === '' && turn) {
        
            element.innerText = `X`
            valueDivs[element.id] = 'X'
    
            numberClick++
            if(numberClick === 9 || conditionVictory() === 'X' || conditionVictory() === 'O') endGame()
            turn = !turn
        } else if(element.innerText === '') {
            element.innerText = `O`
            valueDivs[element.id] = 'O'

            element.classList.add('second-color')
    
            numberClick++
            if(numberClick === 9 || conditionVictory() === 'X' || conditionVictory() === 'O') endGame()
            turn = !turn
        }   
    } 
}

function addEventDiv(listDiv) {
    listDiv.forEach(element => {
        element.addEventListener('click', () => {
            eventDiv(element)
        })
    }) 
}

function endGame() {
    blocking = true

    const winMessage = document.createElement('h2')
    const buttonReset = document.createElement('button')

    buttonReset.innerText = 'reset'
    buttonReset.classList.add('button-reset')
    winMessage.classList.add('message')

    if(conditionVictory() === 'X') {
        console.log(123)
        winMessage.innerText = 'Victory first player'
    } if(conditionVictory() === 'O') {
        winMessage.innerText = 'Victory second player'
    } if(!conditionVictory()) {
        winMessage.innerText = 'Draw'
    }

    buttonReset.addEventListener('click', () => {
        clear(winMessage, buttonReset)

        updateContainer()
    })
    body.appendChild(winMessage)
    body.appendChild(buttonReset)
}



function clear(message, button) {
    valueDivs = ['','','','','','','','','']
    body.removeChild(message)
    body.removeChild(button)
    while(container.firstChild) {
        container.removeChild(container.firstChild)
    }
    numberClick = 0
    turn = true
    blocking = false
}


function conditionVictory() {
    // Условия победы X
    if(valueDivs[0] === 'X' && valueDivs[1] === 'X' && valueDivs[2] === 'X'){
        return 'X'
    }
    if(valueDivs[3] === 'X' && valueDivs[4] === 'X' && valueDivs[5] === 'X'){
        return 'X'
    }
    if(valueDivs[6] === 'X' && valueDivs[7] === 'X' && valueDivs[8] === 'X'){
        return 'X'
    }
    if(valueDivs[0] === 'X' && valueDivs[3] === 'X' && valueDivs[6] === 'X'){
        return 'X'
    }
    if(valueDivs[1] === 'X' && valueDivs[4] === 'X' && valueDivs[7] === 'X'){
        return 'X'
    }
    if(valueDivs[2] === 'X' && valueDivs[5] === 'X' && valueDivs[8] === 'X'){
        return 'X'
    }
    if(valueDivs[0] === 'X' && valueDivs[4] === 'X' && valueDivs[8] === 'X'){
        return 'X'
    }
    if(valueDivs[2] === 'X' && valueDivs[4] === 'X' && valueDivs[6] === 'X'){
        return 'X'
    }
   

    // Условия победы O
    if(valueDivs[0] === 'O' && valueDivs[1] === 'O' && valueDivs[2] === 'O'){
        return 'O'
    }
    if(valueDivs[3] === 'O' && valueDivs[4] === 'O' && valueDivs[5] === 'O'){
        return 'O'
    }
    if(valueDivs[6] === 'O' && valueDivs[7] === 'O' && valueDivs[8] === 'O'){
        return 'O'
    }
    if(valueDivs[0] === 'O' && valueDivs[3] === 'O' && valueDivs[6] === 'O'){
        return 'O'
    }
    if(valueDivs[1] === 'O' && valueDivs[4] === 'O' && valueDivs[7] === 'O'){
        return 'O'
    }
    if(valueDivs[2] === 'O' && valueDivs[5] === 'O' && valueDivs[8] === 'O'){
        return 'O'
    }
    if(valueDivs[0] === 'O' && valueDivs[4] === 'O' && valueDivs[8] === 'O'){
        return 'O'
    }
    if(valueDivs[2] === 'O' && valueDivs[4] === 'O' && valueDivs[6] === 'O'){
        return 'O'
    }
}
