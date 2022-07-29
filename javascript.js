
const buttons = document.querySelectorAll('button')
let playerScore = 0
let computerScore = 0




//RNG determines the choice of the CPU 
    
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*100);
    var cpuNum = randomNumber % 3
    if (cpuNum == 0){;
        var cpuChoice = "Rock";
    } else if (cpuNum == 1){
        var cpuChoice = "Paper"
    } else if (cpuNum == 2){;
        var cpuChoice = "Scissors"
    }
    return cpuChoice
    }


    
//player plays rock
function playRound (playerSelection, computerSelection = getComputerChoice()) {
    if (computerSelection == 'Rock' && playerSelection == 'Rock'){
        return 'Draw';
    } else if (computerSelection == 'Paper' && playerSelection == 'Rock') {
        return 'Loss';
    } else if (computerSelection == 'Scissors' && playerSelection == 'Rock') {
        return 'Win';

//player plays paper

    } else if (computerSelection == 'Rock' && playerSelection == 'Paper') {
        return 'Win';
    } else if (computerSelection =='Paper' && playerSelection =='Paper') {
        return 'Draw';
    } else if (computerSelection =='Scissors' && playerSelection =='Paper') {
        return 'Loss';

//player plays scissors

    } else if (computerSelection == "Rock" && playerSelection == "Scissors") {
        return 'Loss';
    } else if (computerSelection == 'Paper' && playerSelection == "Scissors") {
        return 'Win';
    } else if (computerSelection == 'Scissors' && playerSelection =='Scissors') {
        return 'Draw';

//fail-safe
        
    } else {
        return "Something went wrong.. try again!"
    }
}

function keepScore(roundResult) {
    if (roundResult === 'Win') {
        ++playerScore;
        return playerScore;
        return computerScore;
    } else if (roundResult === 'Loss') {
        ++computerScore;
        return playerScore;
        return computerScore;
    } else {
        return playerScore;
        return computerScore;
    }
}

function displaySelection(playerSelection, computerSelection) {
    computerChoice = computerSelection
    playerChoice = playerSelection
    const div = document.createElement('div');
    const para = document.createElement('p');
    para.textContent= `You chose ${playerChoice} and the computer chose ${computerChoice}.`;
    div.appendChild(para);
}

function displayScore(roundResult, playerScore, computerScore) {
    const div = document.querySelector('div');
    const para = document.createElement('p');
    para.textContent = `${roundResult}: Your score is ${playerScore}, the CPU's score is ${computerScore}`
    div.appendChild(para)
}

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        playerSelection = button.id;
        computerSelection = getComputerChoice();
        displaySelection(playerSelection, computerSelection);
        let roundResult = playRound(playerSelection, computerSelection)
        keepScore(roundResult);
        displayScore(roundResult, playerScore, computerScore);
        })
    })

