let score = JSON.parse(localStorage.getItem('score')) || {
    win: 0,
    lose: 0,
    draw: 0
};

// Immediately update the score display when the page loads
updatescore();

function updatescore(result = '') {
    const scoreText = document.getElementById('score-text');
    if (scoreText) {
        scoreText.innerHTML = `**${result}**<br>Wins: ${score.win}, Losses: ${score.lose}, Draws: ${score.draw}`;
    }
}

function resultscore(userChoice, computerChoice) {
    const resultText = document.getElementById('result-text');
    if (resultText) {
        resultText.innerHTML = `You chose **${userChoice}**, Computer chose **${computerChoice}**.`;
    }
}

function playGame(userChoice) {
    let randomNum = Math.random();
    let computerChoice;

    if (randomNum < 1 / 3) {
        computerChoice = 'Bat';
    } else if (randomNum < 2 / 3) {
        computerChoice = 'Ball';
    } else {
        computerChoice = 'Stump';
    }

    let result;
    if (userChoice === computerChoice) {
        result = 'Draw';
        score.draw += 1;
    } else if (
        (userChoice === 'Bat' && computerChoice === 'Ball') ||
        (userChoice === 'Ball' && computerChoice === 'Stump') ||
        (userChoice === 'Stump' && computerChoice === 'Bat')
    ) {
        result = 'You Win!';
        score.win += 1;
    } else {
        result = 'You Lose!';
        score.lose += 1;
    }

    // update local storage
    localStorage.setItem('score', JSON.stringify(score));

    updatescore(result);
    resultscore(userChoice, computerChoice);
}

// reset local storage
function resetScore() {
    localStorage.removeItem('score');
    score = {
        win: 0,
        lose: 0,
        draw: 0
    };
    updatescore('Score Reset!');
    document.getElementById('result-text').innerHTML = '';
}