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
    gameWinnerDiv.textContent = `The winner is ${gameWinner}`;
    }
}


const buttons = document.querySelectorAll('button');


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let computerSelection = getComputerSelection();
        playRound(button.id, computerSelection);
    });
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
    roundWinner.textContent = `Winner: ${winner}`;
    playerScore.textContent = `Player score: ${score[0]}`;
    computerScore.textContent = `Computer score: ${score[1]}`;
    
    return winner;
}


/*

function playGame(){
    score = [0,0];
    let gameWinner;
    let playerSelection;
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            playerSelection = button.id;
        });
    });
    
    //for (let i = 1; i < 6; i++) {
        //let playerSelection = prompt("choose rock paper or scissors");
        let computerSelection = getComputerChoice();
        winner = playRound(playerSelection, computerSelection);
                
        if(winner==="Player") score[0] += 1;
        else if (winner ==="Computer") score [1] += 1;

        console.log("Player chose " + playerSelection + " and Computer chose " + computerSelection + ".")
        console.log("The winner of Round " + i + " is " + winner + ".")
        console.log("The current score is: Player(" + score[0] + ") vs. Computer(" + score[1] + ").")
    //}
    //if(score[0]>score[1]){
       // gameWinner = "Player";
    //}
    //else if(score[1]>score[0]){
     //   gameWinner = "Computer";
    //}

    console.log(gameWinner + " won the game! The final score was: Player(" + score[0] + ") vs. Computer(" + score[1] + ").")
}


*/



