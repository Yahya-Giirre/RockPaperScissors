const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const btnChoice = document.querySelectorAll(".btnChoice");
const compScoreText = document.querySelector("#compScoreText")
const playScoreText = document.querySelector("#playScoreText")

let player;
let computer;
let result;
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {

    const randomNum = Math.floor(Math.random() * 3) + 1;

    switch(randomNum){
        case 1:
            computer = "ROCK";
            break;
        case 2:
            computer = "PAPER";
            break;
        case 3:
            computer = "SCISSORS";
            break;
        
    }
}

function CheckWinner(){
    if (player == computer){
        return "Draw!";
    }
    else if (computer == "ROCK" && player == "PAPER"){
        console.log(playerScore++);
        return "You Win";
    }
    else if (computer == "PAPER" && player == "SCISSORS"){
        playerScore++;
        return "You Win";
    }
    else if (computer == "SCISSORS" && player == "ROCK"){
        playerScore++;
        return "You Win";
    }
    else
        computerScore++;
        return "You Lose";
}

btnChoice.forEach(button => button.addEventListener("click", () => {

    player = button.textContent;
    getComputerChoice();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = "Result: " + CheckWinner();
    playScoreText.textContent = "Player Score: " + playerScore;
    compScoreText.textContent = "Computer Score: " + computerScore;
}));