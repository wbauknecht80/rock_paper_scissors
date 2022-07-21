function playRound () {
    const playerInput = prompt("Rock, Paper, or Scissors?")
    var playerStringLower = playerInput.toLowerCase()
    const playerSelection = playerStringLower.charAt(0).toUpperCase() + playerStringLower.slice(1)

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
    const computerSelection = getComputerChoice()
    
//player plays rock

    if (computerSelection == 'Rock' && playerSelection == 'Rock'){
        alert("The Computer played Rock. It's a draw!");
        return 'D';
    } else if (computerSelection == 'Paper' && playerSelection == 'Rock') {
        alert("The Computer played Paper. You lose!");
        return 'L';
    } else if (computerSelection == 'Scissors' && playerSelection == 'Rock') {
        alert("The Computer played Scissors. You win!");
        return 'W';

//player plays paper

    } else if (computerSelection == 'Rock' && playerSelection == 'Paper') {
        alert("The Computer played Rock. You Win!");
        return 'W';
    } else if (computerSelection =='Paper' && playerSelection =='Paper') {
        alert("The Computer played Paper. It's a draw!");
        return 'D';
    } else if (computerSelection =='Scissors' && playerSelection =='Paper') {
        alert('The Computer played Scissors. You lose!');
        return 'L';

//player plays scissors

    } else if (computerSelection == "Rock" && playerSelection == "Scissors") {
        alert("The Computer played Rock. You lose!");
        return 'L';
    } else if (computerSelection == 'Paper' && playerSelection == "Scissors") {
        alert("The Computer played Paper. You win!");
        return 'W';
    } else if (computerSelection == 'Scissors' && playerSelection =='Scissors') {
        alert("The Computer played Scissors. It's a draw!")
        return 'D';

//fail-safe
        
    } else {
        alert("Something went wrong.. try again!")
    }
}

function game() {
    var playerScore = 0
    var computerScore = 0

    while (playerScore < 5 && computerScore < 5) {
        gameResult = playRound()
        if (gameResult == 'W') {
            playerScore += 1
        } else if (gameResult == 'L') {
            computerScore += 1
    }}
    if (playerScore == 5) {
        alert('You won five games, congratulations!')
    } else if (computerScore == 5) {
        alert('The computer won five games, too bad!')
    }
}