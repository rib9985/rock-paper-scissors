const rock = "rock"
const paper = "paper";
const scissors = "scissors";

const player = "Player"
const computer = "Computer"
let round = 0

const gameBegin = "Let's begin the game, rock, paper & scissors."
const gameEnd = "End of the battle! The results are in..."


let playerScore = 0;
let computerScore = 0;

 function computerPlay() {
    let computerChoice = [rock, paper, scissors]
    return computerChoice[Math.floor(Math.random() * computerChoice.length)]
}

function playerPlay(){
    let playerChoice = prompt("Choose your weapon!") 
    while (playerChoice === ""){
        playerChoice = prompt("No weapon chosen, pick again")
    }
    return playerChoice
}

function playRound() {
    let playerSelection = playerPlay().toLowerCase()
    let computerSelection = computerPlay()
if ((playerSelection == rock && computerSelection == paper) || (playerSelection == scissors && computerSelection == rock) || (playerSelection == paper && computerSelection == scissors)) {
    computerScore++;
    return console.log(`You lose round ${round}! ${computerSelection} beats ${playerSelection}!`)
}
else if ((computerSelection == rock && playerSelection == paper) || (computerSelection == scissors && playerSelection == rock) || (computerSelection == paper && playerSelection == scissors)) {
    playerScore++;
    return console.log(`You win round ${round}! ${playerSelection} beats ${computerSelection}!`); 
    
}
else {
    return console.log(`It's a tie! Both have selected ${playerSelection}`)
}
round++;
}


function game() {
    console.log(gameBegin)
    for (let i = 0; i < 5; i++){
        console.log(`Round ${round} start!`)
        playRound()
        round++;
    }
    console.log(gameEnd)
    if (playerScore >computerScore) {
        return `You win by ${playerScore} vs. ${computerScore}`
    }
    else if (playerScore < computerScore) {
        return `You lost! Computers wins by ${computerScore} vs. ${playerScore}`
    }
}






