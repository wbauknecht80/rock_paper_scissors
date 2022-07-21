function getComputerChoice () {
    let randomNumber = Math.floor(Math.random()*100);
    var cpuNum = randomNumber % 3
    if (cpuNum == 0){
        var cpuChoice = "Rock"
    } else if (cpuNum == 1){
        var cpuChoice = "Paper"
    } else if (cpuNum == 2){
        var cpuChoice = "Scissors"
    }
    console.log(cpuChoice)
}