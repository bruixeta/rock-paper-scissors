//This is a function that applies to arrays, and creates the 
//method [].sample(). When applied, it returns a 
//random element from the array
Array.prototype.sample = function(){
    return this[Math.floor(Math.random()*this.length)];
  }

function getComputerChoice(){
    const computerChoice = ["rock", "paper", "scissors"].sample();
    return computerChoice;
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    let winner = "Error";

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
    else winner = "Computer";

    return winner;
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();

