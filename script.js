//This is a function that applies to arrays, and creates the 
//method [].sample(). When applied, it returns a 
//random element from the array


const roundWinner = document.getElementById('round-winner');
const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');
const gameWinnerDiv = document.getElementById('game-winner');
let score = [0,0];

Array.prototype.sample = function(){
    return this[Math.floor(Math.random()*this.length)];
  }

function getComputerSelection(){
    const computerSelection = ["rock", "paper", "scissors"].sample();
    return computerSelection;
}


function scoreCount(winner){
    if(winner==="Player") score[0] += 1;
    else if (winner ==="Computer") score [1] += 1;

    if(score[0] >= 5 || score[1] >= 5){
    let gameWinner;  
        if(score[0]>score[1]){
            gameWinner = "Player";
        }
        else if(score[1]>score[0]){
            gameWinner = "Computer";
        }
    alert(`Game over! The winner is ${gameWinner}`);
    gameWinnerDiv.textContent = `Game over! The winner is ${gameWinner}.`;
    buttons.forEach((button) => {
        button.removeEventListener('click', clickToPlay);
    });
    }
}


const buttons = document.querySelectorAll('button');

function clickToPlay(event){
    let button = event.target;
    if (button.tagName !== 'BUTTON') {
        button = button.parentElement;
    }
    let computerSelection = getComputerSelection();
    playRound(button.id, computerSelection);
}


buttons.forEach((button) => {
    button.addEventListener('click', clickToPlay);
});


function playRound(playerSelection, computerSelection){
    let winner;

    const rules = {
        rock: { winsTo: "scissors", losesTo: "paper"},
        paper:  { winsTo: "rock", losesTo: "scissors"},
        scissors:  { winsTo: "paper", losesTo: "rock"}
    }

    if (playerSelection===computerSelection){
        winner = "Tie";
    }
    else if (rules[playerSelection].winsTo === computerSelection){
        winner = "Player";
    }
    else {
        winner = "Computer";
    }

    scoreCount(winner);
    roundWinner.textContent = `${winner}`;
    playerScore.textContent = `${score[0]}`;
    computerScore.textContent = `${score[1]}`;
    
    return winner;
}




