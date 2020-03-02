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

function checkResult(player, ai) {
    if (player == ai)
        return 'draw';
    else if ((player === 'paper' && ai === 'rock') || (player === 'rock' && ai === 'scissors') || (player === 'scissors' && ai === 'paper'))
        return 'win';
    else
        return 'loss';
} 

function publishResult(player, ai, result) {
    document.querySelector('[data-summary="your-choice"]').textContent = player;

    document.querySelector('[data-summary="ai-choice"]').textContent = ai;

    gameSummary.numbers++;
    document.querySelector('p.numbers span').textContent = gameSummary.numbers;

    if (result === 'win') {
        gameSummary.wins++;
        document.querySelector('p.wins span').textContent = gameSummary.wins;

        document.querySelector('[data-summary="who-win"]').textContent = 'YOU WON!!!';
        document.querySelector('[data-summary="who-win"]').style.color = 'green';
    } else if (result === 'loss') {
        gameSummary.losses++;
        document.querySelector('p.losses span').textContent = gameSummary.losses;

        document.querySelector('[data-summary="who-win"]').textContent = 'Computer won :(';
        document.querySelector('[data-summary="who-win"]').style.color = 'red';
    } else {
        gameSummary.draws++;
        document.querySelector('p.draws span').textContent = gameSummary.draws;

        document.querySelector('[data-summary="who-win"]').textContent = 'DRAW';
        document.querySelector('[data-summary="who-win"]').style.color = 'gray';
    }
}

function startGame() {
    if(game.playerHand === '')
        return alert('Please, choose an option')
    
    game.aiHand = aiChoice()
    const gameResult = checkResult(game.playerHand, game.aiHand)

    publishResult(game.playerHand, game.aiHand, gameResult)


}


hands.forEach(hand => hand.addEventListener('click', handSelection))

document.querySelector('.start').addEventListener('click', startGame)