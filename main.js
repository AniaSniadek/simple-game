const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0
}

const game = {
    playerHand: '',
    aiHand: ''
}

const hands = [...document.querySelectorAll('.select img')]

function handSelection() {
    game.playerHand = this.dataset.option
    hands.forEach(hand => hand.style.boxShadow = '')
    this.style.boxShadow = '0 0 0 4px goldenRod'
}

function aiChoice() {
    const aiChoice = hands[Math.floor(Math.random() * 3)].dataset.option

    return aiChoice
}

function startGame() {
    if(game.playerHand === '')
        return alert('Please, choose an option')
    
    game.aiHand = aiChoice()
}


hands.forEach(hand => hand.addEventListener('click', handSelection))

document.querySelector('.start').addEventListener('click', startGame)