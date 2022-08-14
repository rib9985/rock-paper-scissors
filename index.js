const rock = "rock"
const paper = "paper";
const scissors = "scissors";

const player = "Player"
const computer = "Computer"
const round = 0
const finalRound = 4

const gameBegin = "Let's begin the game of rock, paper & scissors."
const gameEnd = "End of the battle! The results are in..."


let playerScore = 0;
let computerScore = 0;

const beginGame = document.querySelector("#beginGame");
beginGame.addEventListener('click', () => {game()})

// const scissorsButton = document.querySelector("#scissorsButton");
// scissorsButton.addEventListener('click', () => {playRound(scissors)})

// const paperButton = document.querySelector("#paperButton");
// paperButton.addEventListener('click', () => {playRound(paper)})

// const rockButton = document.querySelector("#rockButton");
// rockButton.addEventListener('click', () => {playRound(rock)})

function promptChooseWeapon(){
    return document.getElementById('prompt').innerHTML = "Choose your Weapon!"
}

// const beginRound = document.querySelector("#beginRound");
// beginRound.addEventListener('click', () => {playRound()});


 function computerPlay() {
    let computerChoice = [rock, paper, scissors]
    return computerChoice[Math.floor(Math.random() * computerChoice.length)]
    
}

function playerPlay(){
    promptChooseWeapon() 
}

function playRound(playerSelection) {
    promptChooseWeapon();
    let computerSelection = computerPlay()
if ((playerSelection == rock && computerSelection == paper) 
|| (playerSelection == scissors && computerSelection == rock) 
|| (playerSelection == paper && computerSelection == scissors)) {
    computerScore++;
    return document.getElementById('prompt').innerHTML =
    `You lose round ${round}! ${computerSelection} beats ${playerSelection}!`;
    round++;
}
else if ((computerSelection == rock && playerSelection == paper) 
|| (computerSelection == scissors && playerSelection == rock) 
|| (computerSelection == paper && playerSelection == scissors)) {
    playerScore++;
    return document.getElementById('prompt').innerHTML =
    `You win round ${round}! ${playerSelection} beats ${computerSelection}!`; 
    round++;
}
else {
    return document.getElementById('prompt').innerHTML =
    `It's a tie! Both have selected ${playerSelection}`;
    round++;
}
}


function game() {
    let round = 0;
    document.getElementById('prompt').innerHTML = "Let's begin the game of rock, paper & scissors. Choose your Weapon!";
     
        if (round>=finalRound){
            if ((playerScore >computerScore)){
            return document.getElementById('prompt').innerHTML=`You win by ${playerScore} vs. ${computerScore}`
            }
            else{
            return document.getElementById('prompt').innerHTML=`You lost! Computers wins by ${computerScore} vs. ${playerScore}`
        }
            return round = 0;
        }
        
        else {
        document.getElementById('prompt').innerHTML = `Round ${round} start!`
        
        const scissorsButton = document.querySelector("#scissorsButton");
        scissorsButton.addEventListener('click', () => {playRound(scissors)})

        const paperButton = document.querySelector("#paperButton");
        paperButton.addEventListener('click', () => {playRound(paper)})

        const rockButton = document.querySelector("#rockButton");
        rockButton.addEventListener('click', () => {playRound(rock)})
        }

        document.getElementById('scoreboard').innerHTML = `${playerScore}X${computerScore}`
    }
    
    // if ((playerScore >computerScore) && (round==finalRound)) {
    //     return document.getElementById('prompt').innerHTML=`You win by ${playerScore} vs. ${computerScore}`
        
    // }
    // else if (playerScore < computerScore) {
    //     return document.getElementById('prompt').innerHTML=`You lost! Computers wins by ${computerScore} vs. ${playerScore}`
    







