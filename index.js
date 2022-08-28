const rock = "rock"
const paper = "paper";
const scissors = "scissors";

const player = "Player"
const computer = "Computer"

const gameBegin = "Let's begin the game of rock, paper & scissors."
const gameEnd = "End of the battle! The results are in..."


const beginGame = document.querySelector("#beginGame");
beginGame.addEventListener('click', () => {game(round=0, playerScore=0, computerScore=0)})

let round=0
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
if ((playerSelection == rock && computerSelection == paper) || 
(playerSelection == scissors && computerSelection == rock) || 
(playerSelection == paper && computerSelection == scissors)) {
    computerScore++;
    return console.log(`You lose round ${round}! ${computerSelection} beats ${playerSelection}!`)
}
else if ((computerSelection == rock && playerSelection == paper) || 
(computerSelection == scissors && playerSelection == rock) || 
(computerSelection == paper && playerSelection == scissors)) {
    playerScore++;
    return console.log(`You win round ${round}! ${playerSelection} beats ${computerSelection}!`); 
}
}

function checkRound() {
    if ((playerScore == 5)|| (computerScore == 5)) {
        endGame()
    }
}

function endGame(){
    if ((playerScore > computerScore)){
        document.getElementById('prompt').innerHTML=`You win by ${playerScore} vs. ${computerScore}. Press Any Button to play again!`
        return round = 0, playerScore = 0, computerScore = 0   
    }
        else{
        document.getElementById('prompt').innerHTML=`You lost! Computers wins by ${computerScore} vs. ${playerScore}. 
        Press Any Button to play again!`
        return round = 0, playerScore = 0, computerScore = 0
}

}



function playRound(playerSelection, computerSelection) {
    
if ((playerSelection == rock && computerSelection == paper) 
|| (playerSelection == scissors && computerSelection == rock) 
|| (playerSelection == paper && computerSelection == scissors)) {
    computerScore++;
    document.getElementById('prompt').innerHTML =
    `You lose round ${round}! ${computerSelection} beats ${playerSelection}!`;
    document.getElementById('scoreboard').innerHTML = `${playerScore}X${computerScore}`
    round++;
}

else if ((computerSelection == rock && playerSelection == paper) 
|| (computerSelection == scissors && playerSelection == rock) 
|| (computerSelection == paper && playerSelection == scissors)) {
    playerScore++;
    document.getElementById('prompt').innerHTML =
    `You win round ${round}! ${playerSelection} beats ${computerSelection}!`; 
    document.getElementById('scoreboard').innerHTML = `${playerScore}X${computerScore}`
    round++;
}

else {
    document.getElementById('prompt').innerHTML =
    `Round ${round} is a tie! Both have selected ${playerSelection}`;
    document.getElementById('scoreboard').innerHTML = `${playerScore}X${computerScore}`
    round++;
}
return checkRound()
}


function game() {
document.getElementById('prompt').innerHTML = "Let's begin the game of rock, paper & scissors. Choose your Weapon!";
        const scissorsButton = document.querySelector("#scissorsButton");
        scissorsButton.addEventListener('click', () => {playRound(scissors, computerPlay())})

        const paperButton = document.querySelector("#paperButton");
        paperButton.addEventListener('click', () => {playRound(paper, computerPlay())})

        const rockButton = document.querySelector("#rockButton");
        rockButton.addEventListener('click', () => {playRound(rock, computerPlay())})
    
        document.getElementById('scoreboard').innerHTML = `${playerScore}X${computerScore}`
    }






