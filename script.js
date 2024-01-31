//This is a function that applies to arrays, and creates the 
//method [].sample(). When applied, it returns a 
//random element from the array
Array.prototype.sample = function(){
    return this[Math.floor(Math.random()*this.length)];
  }

function getComputerChoice(){
    let computerChoice = ["Rock", "Paper", "Scissors"].sample();
    return computerChoice;
}