const READLINE = require("readline-sync");

// Global Variables
let gameLoop;
let validPrompts = ["help", "exit", "go", "use", "choose", "look", "current", "team", "backpack"];
/** Checklist
 * go -> move to a location
 * use -> interact with an item
 * choose -> pick an option
 * team -> shows your pokemon team
 * backpack -> lists your items
 */

let currentRoom = null; //to keep track of where we are
let rooms = []; //push any new rooms you create to this array

//#region Classes
class Room {

    constructor(name, description, objects, paths, pokemon, firstVisit) {
        this.name = name;
        this.description = description;
        this.objects = objects;
        this.paths = paths;
        this.pokemon = pokemon;
        this.firstVisit = false;
        this.enter
    }
}

class Player {
    constructor(name, items, pokemon) {
        this.name = name;
        this.items = items;
        this.pokemon = pokemon;
    }
}

class Pokemon {
    constructor(nickname, species, type1, type2, level, moves, pokedex) {
        this.nickname = nickname;
        this.species = species;
        this.type1 = type1;
        this.type2 = Types.None;
        this.level = level;
        this.moves = moves;
        this.pokedex = pokedex;
    }
}

const Types = {
    None: 0,
    Normal: 1,
    Fire: 2,
    Water: 3,
    Grass: 4,
    Electric: 5,
    Ice: 6,
    Fighting: 7,
    Poison: 8,
    Ground: 9,
    Flying: 10,
    Psychic: 11,
    Bug: 12,
    Rock: 13,
    Ghost: 14,
    Dark: 15,
    Dragon: 16,
    Steel: 17,
    Fairy: 18
};
//#endregion
//#region INSTANTIATE OBJECTS
let player = new Player();
player.name = null;
player.items = [];
player.pokemon = [];

//#region  POKEMON
let Bulbasaur = new Pokemon();
Bulbasaur.nickname = null;
Bulbasaur.species = "Bulbasaur";
Bulbasaur.type1 = Types.Grass;
Bulbasaur.type2 = Types.Poison;
Bulbasaur.level = 5;
Bulbasaur.moves = ["Vine Whip", "Tackle"];
Bulbasaur.pokedex = "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.";

let Charmander = new Pokemon();
Charmander.nickname = null;
Charmander.species = "Charmander";
Charmander.type1 = Types.Fire;
Charmander.level = 5;
Charmander.moves = ["Ember", "Scratch"];
Charmander.pokedex = "The fire on the tip of its tail is a measure of its life. If the Pokémon is healthy, its tail burns intensely.";

let Squirtle = new Pokemon();
Squirtle.nickname = null;
Squirtle.species = "Squirtle";
Squirtle.type1 = Types.Water;
Squirtle.level = 5;
Squirtle.moves = ["Bubble", "Tackle"];
Squirtle.pokedex = "It shelters itself in its shell, then strikes back with spouts of water at every opportunity.";

let Pidgey = new Pokemon();
Pidgey.nickname = null;
Pidgey.species = "Pidgey";
Pidgey.type1 = Types.Normal;
Pidgey.type2 = Types.Flying;
Pidgey.level = 5;
Pidgey.moves = ["Gust"];
Pidgey.pokedex = "It is docile and prefers to avoid conflict. If disturbed, however, it can ferociously strike back.";

let Metapod = new Pokemon();
Metapod.nickname = null;
Metapod.species = "Metapod";
Metapod.type1 = Types.Bug;
Metapod.level = 5;
Metapod.moves = ["Harden"];
Metapod.pokedex = "It is docile and prefers to avoid conflict. If disturbed, however, it can ferociously strike back.";

let Weedle = new Pokemon();
Weedle.nickname = null;
Weedle.species = "Weedle";
Weedle.type1 = Types.Bug;
Weedle.type2 = Types.Poison;
Weedle.level = 5;
Weedle.moves = ["Poison Sting"];
Weedle.pokedex = "It eats its weight in leaves every day. It fends off attackers with the needle on its head.";

let Rattata = new Pokemon();
Rattata.nickname = null;
Rattata.species = "Rattata";
Rattata.type1 = Types.Normal;
Rattata.level = 5;
Rattata.moves = ["Quick Attack", "Tackle"];
Rattata.pokedex = "Bites anything when it attacks. Small and very quick, it is a common sight in many places.";

let Onix = new Pokemon();
Onix.nickname = null;
Onix.species = "Onix";
Onix.type1 = Types.Rock;
Onix.type2 = Types.Ground;
Onix.level = 5;
Onix.moves = ["Rock Throw"];
Onix.pokedex = "It burrows through the ground at a speed of 50 mph while feeding on large boulders.";

let Geodude = new Pokemon();
Geodude.nickname = null;
Geodude.species = "Geodude";
Geodude.type1 = Types.Rock;
Geodude.type2 = Types.Ground;
Geodude.level = 5;
Geodude.moves = ["Tackle"];
Geodude.pokedex = "It is impossible to distinguish from rocks. It slams against others in contests of hardness.";
//#endregion
//#region Rooms
let Bedroom = new Room();
Bedroom.name = "Bedroom";
Bedroom.description = "Your childhood bedroom, there is a Nintendo Switch in the corner.";
Bedroom.objects = ["Hat", "Backpack"];
Bedroom.paths = ["Living Room"];
Bedroom.pokemon = [];

let Living_Room = new Room();
Living_Room.name = "Living Room";
Living_Room.description = "Make sure to say bye to your mom before you set off on your adventure!";
Living_Room.objects = ["Hug", "Snacks"];
Living_Room.paths = ["Bedroom", "Pallet Town"];
Living_Room.pokemon = [];

let Pallet_Town = new Room();
Pallet_Town.name = "Pallet Town";
Pallet_Town.description = "You just moved here a few weeks ago! Feel free to explore";
Pallet_Town.objects = ["Sign"];
Pallet_Town.paths = ["Living Room", "Route 1", "Coach Sadeem's Lab"];
Pallet_Town.pokemon = [];

let Coach_Sadeem_Lab = new Room();
Coach_Sadeem_Lab.name = "Coach Sadeem's Lab";
Coach_Sadeem_Lab.description = "This is where Sadeem does all his latest research on Pokemon.\nI hear that if you ask nicely he will give you a partner Pokemon.";
Coach_Sadeem_Lab.objects = ["Table"];
Coach_Sadeem_Lab.paths = ["Pallet Town"];
Coach_Sadeem_Lab.pokemon = [Bulbasaur, Squirtle, Charmander];

let Route_1 = new Room();
Route_1.name = "Route 1";
Route_1.description = "The start of your journey, be carful, Pokemon tend to jump out of the wild grass.";
Route_1.objects = ["Wild Grass", "Bush"];
Route_1.paths = ["Pallet Town", "Route 2"];
Route_1.pokemon = [Rattata, Metapod];

let Route_2 = new Room();
Route_2.name = "Route 2";
Route_2.description = "The second route is filled of trees, make sure you look up";
Route_2.objects = ["Tree", "Fallen Log"];
Route_2.paths = ["Route 1", "Pewter City"];
Route_2.pokemon = [Pidgey, Weedle];

let Pewter_City = new Room();
Pewter_City.name = "Pewter City";
Pewter_City.description = "Home of the rock type gym led by Asim. Are you ready for a challenge?";
Pewter_City.objects = ["Sign", "Doorman"];
Pewter_City.paths = ["Route 2", "Asim's Gym"];
Pewter_City.pokemon = [];

let Asim_Gym = new Room();
Asim_Gym.name = "Asim's Gym";
Asim_Gym.description = "Are you ready to ROCK and roll? You can't possibly defeat my hard ROCK team!";
Asim_Gym.objects = ["Boulder Badge"];
Asim_Gym.paths = ["Pewter City"];
Asim_Gym.pokemon = [Geodude, Onix];

rooms.push(Bedroom, Living_Room, Pallet_Town, Coach_Sadeem_Lab, Route_1, Route_2, Pewter_City, Asim_Gym); //add the rooms to the rooms array
//#endregion
//#endregion
//************* START GAME *************************

/**
 * This function introduces the game to the player and starts the game
 * Then it calls prompt user to start playing
 * TODO: Add HOW TO PLAY TIPS
 */
function startGame() {
    gameLoop = true;

    console.log(`\nHello there! Welcome to the world of POKEMON! My name is Sadeem!
People call me the POKEMON Coach!\n
This world is inhabited by creatures called POKEMON! For some
people, POKEMON are pets. Others use them for fights. Myself...
I study POKEMON as a profession.\n`);
    // UNCOMMENT LATER
    // playerName = READLINE.question("First what is your name? ");
    // player.name = playerName;
    player.name = "Ash Kecthum";
    console.log(`\nRight! So your name is ${player.name}!`);
    console.log(`\nUse go to travel to new locations and use help to learn more commands!`);
    console.log(`\n${player.name}! Your very own POKEMON legend is about to unfold! A world of
dreams and adventures with POKEMON awaits! Let's go!`);

    currentRoom = Bedroom;
    currentRoom.firstVisit = true;
    promptUser();
}

/**
 * Asks the user to see what they want to do
 * then make sure what they input is valid
 * example prompt = "go Pallet Town"
 * I split it into an array ["go", "Pallet", "Town"]
 * my command is "go" and I check if it is a valid command
 * my prompt msg is ["Pallet", "Town"] then I join it together to get "Pallet Town"
 */
function promptUser() {
    let valid = false; // Lets me ask them until I get a valid prompt
    while (!valid) {
        let prompt = READLINE.question("\n◓ ");
        let promptArray = prompt.split(" "); // i separate the prompt so i can see the command and what the command is interacting with
        let command = promptArray[0];

        let promptMsg = promptArray.splice(1).join(" ");
        // console.log(`msg: ${promptMsg}`);


        if (validPrompts.includes(command)) {
            valid = true;
            // console.log(`Valid: ${command} and msg: ${promptMsg}`);
            runCommand(command, promptMsg);
        }
        else {
            console.log(`\n${prompt} is invalid. use help to learn about valid prompts.`);
        }
    }
}

// promptUser();

/**
 * I check which command is sent and call the corresponding function
 * I am using a switch statement but you can also do this with an if statement
 * The bool end checks if end has been called if it has then the switch statement won't run
 * @param {string} command is actions like go or help 
 * @param {string} task is optional add ons to the command like a location for go
 */
function runCommand(command, task) {
    let end = false;
    switch (command) {
        case "help":
            Run_Help();
            break;

        case "exit":
            Run_Exit();
            end = true;
            break;

        case "go":
            Run_Go(task);
            break;

        case "use":
            // use code
            console.log(`Command: Use`);
            break;

        case "choose":
            // choose code
            console.log(`Command: Choose`);
            break;

        case "look":
            Run_Look();
            break;

        case "current":
            Run_Current();
            break;

        case "team":
            // team code
            console.log(`Command: Team`);
            break;

        case "backpack":
            // backpack code
            console.log(`Command: Backpack`);
            break;

        default:
            // default code
            console.log(`Command: Default`);
    }
    if (!end) {
        promptUser();
    }

}
//#region Command Function
/**
 * Lists all possible commands
 */
function Run_Help() {
    console.log(`\nHere are all available commands:
help -> list the commands 
exit -> end the game
go -> move to a location
use -> interact with an item
choose -> pick an option
look -> see where you can go and what you can interact with
current -> says where you are at
team -> shows your pokemon team
backpack -> lists your items
go home -> takes you back to your bedroom`);
}

/**
 * Says Goodbye and ends the game
 */
function Run_Exit() {
    console.log(`\nThank you for playing ${player.name}
I hope you continue on your quest to become a Pokemon Master!\n`);
}

/**
 * Lets the user travel to new locations
 * if the location is home take them to their bedroom no matter where they are
 * otherwise check if location is valid and you can go to it
 * updates the current location
 * @param {string} location where the player wants to go
 */
function Run_Go(location) {
    if (location == "home") {
        console.log(`\nWelcome Home!!!`);
        currentRoom = rooms[0];
    }
    else if (currentRoom.paths.includes(location)) {

        console.log("Yes you can go there");

        for (room of rooms) {  //Make challenge!!!!

            if (room.name.toLowerCase() == location.toLowerCase()) {

                //set the current room by grabbing its index
                let index = rooms.indexOf(room);

                currentRoom = rooms[index];
                currentRoom.firstVisit = true; // entered the location for the first time 

                console.log("You are now at the : " + currentRoom.name);

            }
        }
    }
    else {

        console.log("No you can't go there");
    }
}

function Run_Use() {
}

function Run_Choose() {
}

/**
 * Look around the current location
 * show paths you can go to
 * shows item or objects you can interact with
 * shows pokemon in the area
 */
function Run_Look() {
    console.log(`\nFrom ${currentRoom.name} you can get to:\n${printArray(currentRoom.paths)}`);
    console.log(`\nYou found:\n${printArray(currentRoom.objects)}`);
    if (currentRoom.pokemon.length > 0) {
        console.log(`\nWild Pokemon:\n${printArray(currentRoom.pokemon, true)}`);
    }
}

/**
 * says where you are and describes the room
 */
function Run_Current() {
    console.log(`\nYou are in ${currentRoom.name} and its description is: ${currentRoom.description}`);
}

function Run_Team() {
}

function Run_Backpack() {
}

/**
 * Helper function to print out arrays
 * pkmn is a bool to say the name of the pokemon and not the type
 * from ["a", "b", "c"] to:
 * a
 * b
 * c
 * @param {*} array the array i want to print
 * @param {*} pkmn if im printing pokemon
 * @returns 
 */
function printArray(array, pkmn = false) {
    let print = ""; // building the string
    for (i = 0; i < array.length; i++) {
        if (pkmn) {
            print += array[i].species; // adds the species of pokemon to my string
        }
        else {
            print += array[i];
        }
        if (i != array.length - 1) {
            print += "\n"; // adds a new line expect for the last entry in the array
        }
    }
    return print;
}

startGame();