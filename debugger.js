const READLINE = require("readline-sync");
const options = ["rock", "paper", "scissors"];

console.log(`Let's play Rock Paper Scissors!`);

// Challenge
// Find the bugs below:

while(true){
	let userInput = READLINE.question(`Do you want to play rock, paper, or scissors? `).toLowerCase();
	let randomSelection = Math.floor(Math.random()*3); // missing a let
  let computerSelection = options[randomSelection];
  
	console.log(`You played: ${userInput} and the computer played: ${computerSelection}`);// needs to be `
  if(userInput === computerSelection){
    console.log("It's a tie!");
  }
  else if((userInput === "rock" && computerSelection === "paper") ||
          (userInput === "paper" && computerSelection === "scissors") ||
          (userInput === "scissors" && computerSelection === "rock"))
          { // needed === for compairing 
    console.log("You Lose!");
  }
  else{// should just be else
    console.log("You Win!");
  }
} // need ending } for while

