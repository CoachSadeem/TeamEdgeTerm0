// "go Living Room"

// let pathArray = inputMsg.split(" ");
// ["go", "Living", "Room"]
// let pathRoom = pathArray[1]; // "Living"
const READLINE = require("readline-sync");


let prompt = READLINE.question("\n◓ ");
let promptArray = prompt.split(" "); // I separate the prompt so i can see the command and what the command is interacting with
let command = promptArray[0];
console.log(prompt)
console.log(promptArray)
let promptMsgSplice = promptArray.splice(1);
let promptMsgJoin = promptMsgSplice.join(" ");




console.log(command)
console.log(promptMsgSplice)
console.log(promptMsgJoin)