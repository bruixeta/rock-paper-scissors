//This is a function that applies to arrays, and creates the 
//method [].sample(). When applied, it returns a 
//random element from the array



Array.prototype.sample = function(){
    return this[Math.floor(Math.random()*this.length)];
  }

function getComputerSelection(){
    const computerSelection = ["rock", "paper", "scissors"].sample();
    return computerSelection;
}


const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playGame(button.id);
    });
});


function playGame(playerSelection){
    let computerSelection = getComputerSelection();
    const winner = playRound(playerSelection, computerSelection);
    console.log(winner);
    return winner;
}

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



