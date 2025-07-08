const result = document.querySelector('#result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')

const yourChoice = document.querySelector('#human-choice')
const machineChoice = document.querySelector('#machine-choice')

let humanScoreNumber = 0
let machineScoreNumber = 0

const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())
    console.log(yourChoice)
    console.log(machineChoice)
}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

const playTheGame = (human, machine) => {
    console.log('Humano: ' + human)
    console.log('Alexa: ' + machine)

    if (human === machine) {
        result.innerHTML = 'Deu empate!'
    } else if (
        (human === 'paper' && machine === 'rock') ||
        (human === 'rock' && machine === 'scissors') ||
        (human === 'scissors' && machine === 'paper')
    ) {
        result.innerHTML = 'Você ganhou!'
        humanScore.innerHTML = ++humanScoreNumber
    } else {
        result.innerHTML = 'Você perdeu para a Alexa!'
        machineScore.innerHTML = ++machineScoreNumber
    }

    if (human === 'rock') {
        yourChoice.innerHTML = '&#x1F44A;'
    }
    if (human === 'paper') {
        yourChoice.innerHTML = '&#x1F590;'
    }
    if (human === 'scissors') {
        yourChoice.innerHTML = '&#x270C;'
    }
    if (machine === 'rock') {
        machineChoice.innerHTML = '&#x1F44A;'
    }
    if (machine === 'paper') {
        machineChoice.innerHTML = '&#x1F590;'
    }
    if (machine === 'scissors') {
        machineChoice.innerHTML = '&#x270C;'
    }
}