//This is the starter file for CYOA
//Use it to develop your skills as needed
const READLINE = require("readline-sync");

let inputMsg = ""; //an empty string to hold our user inputs
let gameIsOn = true; //the game loop will depend on this being true
let currentRoom = null; //to keep track of where we are
let rooms = []; //push any new rooms you create to this array

//******** DEFINE CLASSES *******************
// Create a class for Room and for Player
class Player {
    constructor(name, items) {
        this.name = name;
        this.items = items;
    }
}

class Room {
    constructor(name, description, objects, paths) {
        this.name = name;
        this.description = description;
        this.objects = objects;
        this.paths = paths;
    }
}

//**********INSTANTIATE OBJECTS ***************
// Create your player
let player = new Player();
player.name = null;
player.items = [];

// Create some rooms
let bedroom = new Room();
bedroom.name = "Bedroom";
bedroom.description = "Your bedroom";
bedroom.objects = ["phone"];
bedroom.paths = ["Bathroom"];

let bathroom = new Room();
bathroom.name = "Bathroom";
bathroom.description = "The bathroom";
bathroom.objects = ["Toilet paper", "Toothbrush"];
bathroom.paths = ["Bedroom"];

//add the rooms to the rooms array
rooms.push(bedroom, bathroom);
console.log(rooms);
//************* START GAME *************************
function start() {

    // saves the player name
    console.log("Welcome to The Demo!!");
    let playerinput = READLINE.question("Name? ");
    player.name = playerinput;
    console.log(`Welcome ${player.name}!`);
    console.log("Welcome " + player.name);
    //begin at the bedroom

    currentRoom = bedroom;



    // try to theme your game to your setting


    // your game loop
    while (gameIsOn) {
        checkAnswer(promptUser());
    }
    console.log("Thanks for playing");

}

function promptUser() {
    let question = READLINE.question("What do you wanna do?: ");
    return question;
}

function checkAnswer(input) {

    inputMsg = input;

    //GO
    if (inputMsg.includes("go")) {
        let pathArray = inputMsg.split(" ");
        let pathRoom = pathArray[1];

        if (currentRoom.paths.includes(pathRoom)) {

            for (let i = 0; i < rooms.length; i++) {
                console.log(rooms[i].name.toLowerCase());
                console.log(pathRoom.toLowerCase());
                if (rooms[i].name.toLowerCase() == pathRoom.toLowerCase()) {
                    currentRoom = rooms[i];
                    console.log("You are in a new room");
                }
            }

        }
        else {
            console.log("you can't go there");
        }

        //LOOK          
    } else if (inputMsg.includes("look")) {

        for (let i = 0; i < currentRoom.objects.length; i++) {
            console.log(currentRoom.objects[i]);
        }

        for (let i = 0; i < currentRoom.paths.length; i++) {
            console.log(currentRoom.paths[i]);
        }



        //TAKE
    } else if (inputMsg.includes("take")) {

        let itemsArray = inputMsg.split(" ");
        let item = itemsArray[1];

        if (currentRoom.objects.includes(item)) {
            console.log(`Before`);
            console.log(`Current Room: ${currentRoom.objects}`);
            console.log(`Player: ${player.items}`);
            player.items.push(item);

            let indexToRemove = currentRoom.objects.indexOf(item);
            currentRoom.objects.splice(indexToRemove, 1);
            console.log(`After`);
            console.log(`Current Room: ${currentRoom.objects}`);
            console.log(`Player: ${player.items}`);

        }
        else {
            console.log("item not found");
        }


        //Name
    } else if (inputMsg.includes("name")) {
        console.log(`${currentRoom.name} ${currentRoom.description}`);
    } else if (inputMsg.includes("help")) {
        console.log("help me");

    } else if (inputMsg == "exit") {
        gameIsOn = false;

    } else {
        console.log(`${inputMsg} is invalid`);
    }

}

start();