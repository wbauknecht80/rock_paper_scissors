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
    } else if (computerSelection == 'Paper' && playerSelection == 'Rock') {
        alert("The Computer played Paper. You lose!");
    } else if (computerSelection == 'Scissors' && playerSelection == 'Rock') {
        alert("The Computer played Scissors. You win!");

//player plays paper

    } else if (computerSelection == 'Rock' && playerSelection == 'Paper') {
        alert("The Computer played Rock. You Win!");
    } else if (computerSelection =='Paper' && playerSelection =='Paper') {
        alert("The Computer played Paper. It's a draw!");
    } else if (computerSelection =='Scissors' && playerSelection =='Paper') {
        alert('The Computer played Scissors. You lose!');

//player plays scissors

    } else if (computerSelection == "Rock" && playerSelection == "Scissors") {
        alert("The Computer played Rock. You lose!");
    } else if (computerSelection == 'Paper' && playerSelection == "Scissors") {
        alert("The Computer played Paper. You win!");
    } else if (computerSelection == 'Scissors' && playerSelection =='Scissors') {
        alert("The Computer played Scissors. It's a draw!")

//fail-safe
        
    } else {
        alert("Something went wrong.. try again!")
    }
}