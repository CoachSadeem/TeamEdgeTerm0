const READLINE = require("readline-sync");

// Global Variables
let gameLoop;
let end;
let validPrompts = ["help", "exit", "go", "use", "choose", "look", "current", "team", "backpack"];
/** Checklist
 * go -> move to a location
 * use -> interact with an item
 * choose -> pick an option
 * team -> shows your pokemon team
 * backpack -> lists your items
 */

//#region ASCII Art
// all my ASCII Art
let featherHat = `             (/;
            (/;
     .--..-(/;
     |    (/;
   __|====/=|__
  (____________)
`;
let cowboyHat = `      \.\~\~\~\~\`\\\~\~\\
      \;       \~\~ \\
      \|           \;
  \,--------\,______\|---\.
 \/          \\-----\`    \\
 \`\.__________\`\-_______\-\'
`;
let baseBallCap = `         _____
      \.-\'     \`-\.
     \/           \\
    |\-\.           |
    |  \\          |
    [__|__________|_______
`;
let BulbasaurASCII = `
                                           /
                        _,.------....___,.' ',.-.
                     ,-'          _,.--\"        |
                   ,'         _.-'              .
                  /   ,     ,'                   \`
                 .   /     /                     \`\`.
                 |  |     .                       \\.\\
       ____      |___._.  |       __               \\ \`.
     .'    \`---\"\"       \`\`\"-.--\"'\`  \\               .  \\
    .  ,            __               \`              |   .
    \`,'         ,-\"'  .               \\             |    L
   ,'          '    _.'                -._          /    |
  ,\`-.    ,\".   \`--'                      >.      ,'     |
 . .'\\'   \`-'       __    ,  ,-.         /  \`.__.-      ,'
 ||:, .           ,'  ;  /  / \\ \`        \`.    .      .'/
 j|:D  \\          \`--'  ' ,'_  . .         \`.__, \\   , /
/ L:_  |                 .  \"' :_;                \`.'.'
.    \"\"'                  \"\"\"\"\"'                    V
 \`.                                 .    \`.   _,..  \`
   \`,_   .    .                _,-'/    .. \`,'   __  \`
    ) \\\`._        ___....----\"'  ,'   .'  \\ |   '  \\  .
   /   \`. \"\`-.--\"'         _,' ,'     \`---' |    \`./  |
  .   _  \`\"\"'--.._____..--\"   ,             '         |
  | .\" \`. \`-.                /-.           /          ,
  | \`._.'    \`,_            ;  /         ,'          .
 .'          /| \`-.        . ,'         ,           ,
 '-.__ __ _,','    '\`-..___;-...__   ,.'\\ ____.___.'
 \`\"^--'..'   '-\`-^-'\"--    \`-^-'\`.''\"\"\"\"\"\`.,^.\`.--' 
`;
let CharmanderASCII = `
              _.--\"\"\`-..
            ,'          \`.
          ,'          __  \`.
         /|          \" __   \\
        , |           / |.   .
        |,'          !_.'|   |
      ,'             '   |   |
     /              |\`--'|   |
    |                \`---'   |
     .   ,                   |                       ,\".
      ._     '           _'  |                    , ' \\ \`
  \`.. \`.\`-...___,...---\"\"    |       __,.        ,\`\"   L,|
  |, \`- .\`._        _,-,.'   .  __.-'-. /        .   ,    \\
-:..     \`. \`-..--_.,.<       \`\"      / \`.        \`-/ |   .
  \`,         \"\"\"\"'     \`.              ,'         |   |  ',,
    \`.      '            '            /          '    |'. |/
      \`.   |              \\       _,-'           |       ''
        \`._'               \\   '\"\\                .      |
           |                '     \\                \`._  ,'
           |                 '     \\                 .'|
           |                 .      \\                | |
           |                 |       L              ,' |
           \`                 |       |             /   '
            \\                |       |           ,'   /
          ,' \\               |  _.._ ,-..___,..-'    ,'
         /     .             .      \`!             ,j'
        /       \`.          /        .           .'/
       .          \`.       /         |        _.'.'
        \`.          7\`'---'          |------\"'_.'
       _,.\`,_     _'                ,''-----\"'
   _,-_    '       \`.     .'      ,\\
   -\" /\`.         _,'     | _  _  _.|
    \"\"--'---\"\"\"\"\"'        \`' '! |! /
                            \`\" \" -' 
`;
let SquirtleASCII = `
               _,........__
            ,-'            \"\`-.
          ,'                   \`-.
        ,'                        \\
      ,'                           .
      .'\\               ,\"\".       \`
     ._.'|             / |  \`       \\
     |   |            \`-.'  ||       \`.
     |   |            '-._,'||       | \\
     .\`.,'             \`..,'.'       , |\`-.
     l                       .'\`.  _/  |   \`.
     \`-.._'-   ,          _ _'   -\" \\  .     \`
\`.\"\"\"\"\"'-.\`-...,---------','         \`. \`....__.
.'        \`\"-..___      __,'\\          \\  \\     \\
\\_ .          |   \`\"\"\"\"'    \`.           . \\     \\
  \`.          |              \`.          |  .     L
    \`.        |\`--...________.'.        j   |     |
      \`._    .'      |          \`.     .|   ,     |
         \`--,\\       .            \`7\"\"' |  ,      |
            \` \`      \`            /     |  |      |    _,-'\"\"\"\`-.
             \\ \`.     .          /      |  '      |  ,'          \`.
              \\  v.__  .        '       .   \\    /| /              \\
               \\/    \`\"\"\\\"\"\"\"\"\"\"\`.       \\   \\  /.''                |
                \`        .        \`._ ___,j.  \`/ .-       ,---.     |
                ,\`-.      \\         .\"     \`.  |/        j     \`    |
               /    \`.     \\       /         \\ /         |     /    j
              |       \`-.   7-.._ .          |\"          '         /
              |          \`./_    \`|          |            .     _,'
              \`.           / \`----|          |-............\`---'
                \\          \\      |          |
               ,'           )     \`.         |
                7____,,..--'      /          |
                                  \`---.__,--.'
`;
//#endregion

let currentRoom = null; //to keep track of where we are
let rooms = []; //push any new rooms you create to this array
let haveBackpack = false; // sees if the player has picked up their backpack yet

//#region Classes
// What every room will have
class Room {

    /**
     * 
     * @param {string} name 
     * @param {string} description 
     * @param {array<string>} objects things you can interact with in a room
     * @param {array<string>} paths rooms that you can access from this room
     * @param {array<Pokemon>} pokemon list of pokemon you can find in the room
     * first visit is if I have entered the room for the first time or not
     * enter checks if the room is locked or not
     */
    constructor(name, description, objects, paths, pokemon) {
        this.name = name;
        this.description = description;
        this.objects = objects;
        this.paths = paths;
        this.pokemon = pokemon;
        this.firstVisit = false;
        this.enter = false;
    }
}

class Player {
    /**
     * 
     * @param {string} name players name
     * @param {array<string>} items the items in the players backpack
     * @param {array<Pokemon>} pokemon the pokemon the player has
     * @param {string} hat the hat the player is wearing
     */
    constructor(name, items, pokemon, hat) {
        this.name = name;
        this.items = items;
        this.pokemon = pokemon;
        this.hat = hat;
    }
}

class Pokemon {
    /**
     * 
     * @param {string} nickname the name the player gives the pokemon
     * @param {string} species the species of pokemon
     * @param {Types} type1 its first type
     * @param {Types} type2 the second type, Type.none if it is a single type
     * @param {int} level the level of the pokemon
     * @param {} moves 
     * @param {string} pokedex the pokemon description
     * @param {string} art ASCII art of the pokemon
     */
    constructor(nickname, species, type1, type2, level, moves, pokedex, art) {
        this.nickname = nickname;
        this.species = species;
        this.type1 = type1;
        this.type2 = Types.None;
        this.level = level;
        this.moves = moves;
        this.pokedex = pokedex;
        this.art = art;
    }
}

// This is an enum type which is pretty common in C#
// I use this in place of a array of strings so I can define types for pokemon
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
let player = new Player(); // create a new player
player.name = null; // set name is null, will be defined later
player.items = []; // the player starts with an empty inventory
player.pokemon = []; // the player starts with no pokemon
player.hat = null; // the player doesn't start with a hat

//#region  POKEMON
// Here I create all my pokemon
// The player will set the pokemons nickname
let Bulbasaur = new Pokemon();
Bulbasaur.nickname = null;
Bulbasaur.species = "Bulbasaur";
Bulbasaur.type1 = Types.Grass;
Bulbasaur.type2 = Types.Poison;
Bulbasaur.level = 5;
Bulbasaur.moves = ["Vine Whip", "Tackle"];
Bulbasaur.pokedex = "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.";
Bulbasaur.art = BulbasaurASCII;

let Charmander = new Pokemon();
Charmander.nickname = null;
Charmander.species = "Charmander";
Charmander.type1 = Types.Fire;
Charmander.level = 5;
Charmander.moves = ["Ember", "Scratch"];
Charmander.pokedex = "The fire on the tip of its tail is a measure of its life. If the Pokémon is healthy, its tail burns intensely.";
Charmander.art = CharmanderASCII;

let Squirtle = new Pokemon();
Squirtle.nickname = null;
Squirtle.species = "Squirtle";
Squirtle.type1 = Types.Water;
Squirtle.level = 5;
Squirtle.moves = ["Bubble", "Tackle"];
Squirtle.pokedex = "It shelters itself in its shell, then strikes back with spouts of water at every opportunity.";
Squirtle.art = SquirtleASCII;

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
// Creating all the rooms
// if enter is true you can freely enter a room else you need to do a quest first
let Bedroom = new Room();
Bedroom.name = "Bedroom";
Bedroom.description = "Your childhood bedroom, there is a Nintendo Switch in the corner.";
Bedroom.objects = ["Hat", "Backpack"];
Bedroom.paths = ["Living Room"];
Bedroom.pokemon = [];
Bedroom.enter = true;

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
Coach_Sadeem_Lab.pokemon = [Bulbasaur, Charmander, Squirtle];
Coach_Sadeem_Lab.enter = true;

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
 */
function startGame() {
    gameLoop = true; // starts the game
    end = false;
    console.log(`\n◓ Hello there! Welcome to the world of POKEMON! My name is Sadeem!
People call me the POKEMON Coach!\n
This world is inhabited by creatures called POKEMON! For some
people, POKEMON are pets. Others use them for fights. Myself...
I study POKEMON as a profession.\n`);
    // UNCOMMENT LATER
    playerName = READLINE.question("First what is your name? ");
    player.name = playerName;
    // player.name = "Ash Kecthum";
    console.log(`\n◓ Right! So your name is ${player.name}!`);
    console.log(`\n◓ Use go to travel to new locations and use help to learn more commands!`);
    console.log(`\n◓ ${player.name}! Your very own POKEMON legend is about to unfold! A world of
dreams and adventures with POKEMON awaits! Let's go!`);

    console.log(`


◓ Mom - Good Morning dear! Come down to the Living Room, you'll be late for your big adventure!
        Make sure you grab your hat and backpack from your room before you go.`);
    currentRoom = Bedroom; // you start in the bedroom
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
        let promptArray = prompt.split(" "); // I separate the prompt so i can see the command and what the command is interacting with
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

/**
 * I check which command is sent and call the corresponding function
 * I am using a switch statement but you can also do this with an if statement
 * The bool end checks if end has been called if it has then the switch statement won't run
 * @param {string} command is actions like go or help 
 * @param {string} task is optional add ons to the command like a location for go
 */
function runCommand(command, task) {
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
            Run_Use(task);
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
            Run_Team();
            break;

        case "backpack":
            // backpack code
            Run_Backpack();
            break;

        default:
            // default code
            console.log(`Command: Default`);
    }
    if (!end) { // if end is still false then continue the game
        promptUser();
    }

}

//#region Command Function
/**
 * Lists all possible commands
 */
function Run_Help() {
    console.log(`\n◓ Here are all available commands:
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
    console.log(`\n◓ Thank you for playing ${player.name}
◓ I hope you continue on your quest to become a Pokemon Master!\n`);
}

/**
 * Lets the user travel to new locations
 * if the location is home take them to their bedroom no matter where they are
 * otherwise check if location is valid and you can go to it
 * updates the current location
 * @param {string} location where the player wants to go
 */
function Run_Go(location) {
    if (location.toLowerCase() == "home") {
        console.log(`\n◓ Welcome Home!!!`);
        currentRoom = rooms[0];
    }
    else if (currentRoom.paths.includes(location)) {

        // console.log("◓ Yes you can go there");

        for (Place of rooms) {
            if (Place.name.toLowerCase() == location.toLowerCase()) {
                if (Place.enter) {
                    //set the current room by grabbing its index
                    // console.log(Place.firstVisit)
                    let index = rooms.indexOf(Place);
                    currentRoom = rooms[index];

                    // entering a room for the first time
                    // skipped bedroom because you start there
                    if (!currentRoom.firstVisit) {
                        switch (currentRoom) {
                            case Living_Room:
                                console.log(`\n◓ Mom - Good Morning! Make sure you grab your hat and backpack from your room before you go.`);
                                break;
                            case Coach_Sadeem_Lab:
                                console.log(`\n◓ Welcome ${player.name}!\n  You must be here to choose your Partner Pokemon!\n  Go to the table when you are ready.`);
                                break;

                            case Route_1:
                                console.log(Route_1.name);
                                break;

                            case Route_2:
                                console.log(Route_2.name);
                                break;

                            case Pewter_City:
                                console.log(Pewter_City.name);
                                break;

                            case Asim_Gym:
                                console.log(Asim_Gym.name);
                                break;
                        }
                    }

                    currentRoom.firstVisit = true; // entered the location for the first time 
                    // console.log(currentRoom.firstVisit)
                    console.log(`\n◓◓◓◓◓◓◓◓◓◓◓◓◓◓◓◓◓◓◓◓◓◓◓◓◓◓◓◓◓◓◓◓◓◓◓◓◓◓◓◓◓◓◓◓◓◓◓◓◓◓
                   ${currentRoom.name}\n◓◓◓◓◓◓◓◓◓◓◓◓◓◓◓◓◓◓◓◓◓◓◓◓◓◓◓◓◓◓◓◓◓◓◓◓◓◓◓◓◓◓◓◓◓◓◓◓◓◓`);

                }
                else {
                    switch (Place.name) {
                        case Living_Room.name:
                            console.log("\n◓ You can't go downstairs yet you need to grab your hat and backpack.");
                            break;

                        case Pallet_Town.name:
                            console.log(`\n◓ Don't be rude! Hug your mom before you leave.`);
                            break;

                        case Route_1.name:
                            console.log(`\n◓ You can't go into the wild without a partner Pokemon.\n  Go to Coach Sadeem's Lab to get one!`);
                            break;

                        case Route_2.name:
                            console.log(Route_2.name + "Locked");
                            break;

                        case Pewter_City.name:
                            console.log(Pewter_City.name + "Locked");
                            break;

                        case Asim_Gym.name:
                            console.log(Asim_Gym.name + "Locked");
                            break;
                    }
                }


            }
        }
    }
    else {

        console.log("\n◓ You can't access that room from here");
    }
}

/**
 * Interacts with an item or object in the room
 * Checks for all valid items
 */
function Run_Use(item) {
    // checks if item is in your bag or in the room
    if (currentRoom.objects.includes(item) || player.items.includes(item)) {
        switch (item) {
            case "Backpack":
                player.haveBackpack = true;
                console.log("\n◓ This Backpack will hold all your items on your trip.");
                console.log("◓ Use backpack to see what is inside of it");
                // checks if you got all item in bedroom if yes then you can go to living room
                currentRoom.objects.splice(currentRoom.objects.indexOf(item), 1);
                if (rooms[0].objects.length == 0) {
                    rooms[1].enter = true;
                }
                break;
            case "Hat":
                if (player.hat == null) {// get hat

                    // shows hat options
                    console.log(`\n◓ Would you like to wear: \n\n◓ Hat 1:\n${featherHat}  \n\n◓ Hat 2:\n${cowboyHat}  \n\n◓ Hat 3:\n${baseBallCap}\n`);
                    // makes sure the player picks a hat
                    while (player.hat == null) {
                        let hatNum = READLINE.question('◓ Hat: ');
                        if (hatNum == 1) {
                            player.hat = featherHat;
                        }
                        else if (hatNum == 2) {
                            player.hat = cowboyHat;
                        }
                        else if (hatNum == 3) {
                            player.hat = baseBallCap;
                        }
                    }
                    console.log("\n◓ Good choice, very snazzy");
                    // removes the item from the room
                    currentRoom.objects.splice(currentRoom.objects.indexOf(item), 1);
                    player.items.push(item);

                }
                else {// shows off hat
                    console.log(`\n◓ Your Hat:
${player.hat}`);
                }
                // checks if you got all item in bedroom if yes then you can go to living room
                if (rooms[0].objects.length == 0) {
                    rooms[1].enter = true;
                }
                break;
            case "Hug":
                console.log("\n◓ You hug your Mom <3 ");
                // lets you leave your house
                rooms[2].enter = true;
                break;
            case "Snacks":
                if (player.items.includes(item)) {
                    console.log(`\n◓ You found a note in your snack bag.\n  It says I love you from mom`);
                    player.items.splice(currentRoom.objects.indexOf(item), 1);
                }
                else {
                    console.log("\n◓ You grabbed some snacks to eat later");
                    player.items.push(item);
                    currentRoom.objects.splice(currentRoom.objects.indexOf(item), 1);
                }
                break;
            case "Sign":// two of them
                if (currentRoom.name = "Pallet Town") {
                    console.log(`\n<- Living Room\n-> Coach Sadeem's Lab\n^ Route1`);
                }
                else if (currentRoom.name == "Pewter City") {
                    console.log(`\nv Route2\n-> Asim's Gym`);
                }
                break;
            case "Table":
                console.log(`\n◓ Which Pokemon would you like ${player.name}?`);
                console.log(`\n◓ Will it be The Grass Pokemon Bulbasaur:\n${Bulbasaur.art}`);
                console.log(`\n◓ Will it be The Fire Pokemon Charmander:\n${Charmander.art}`);
                console.log(`\n◓ Will it be The Water Pokemon Squirtle:\n${Squirtle.art}`);
                while (player.pokemon.length == 0) {
                    let part = READLINE.question('◓ Pokemon: ').toLowerCase();
                    if (part == "bulbasaur") {
                        player.pokemon.push(currentRoom.pokemon[0]);
                    }
                    else if (part == "charmander") {
                        player.pokemon.push(currentRoom.pokemon[1]);
                    }
                    else if (part == "squirtle") {
                        player.pokemon.push(currentRoom.pokemon[2]);
                    }
                }
                console.log(`\n◓ Great Choice! I can tell that you two will be partners for life!`);

                let askAgain = true;
                while (askAgain) {
                    let rename = READLINE.question(`\n◓ Would you like to rename your partner Pokemon? (Y/N) `).toUpperCase();
                    if (rename == "Y") {
                        askAgain = false;
                        let nick = READLINE.question(`\n◓ Would you like to call your partner Pokemon ${player.pokemon[0].species}? (Y/N) `);
                        player.pokemon[0].nickname = nick;
                    }
                    else if (rename == "N") {
                        player.pokemon[0].nickname = player.pokemon[0].species;
                        askAgain = false;
                    }
                }
                console.log(`\n◓ It's time for ${player.name} and ${player.pokemon[0].nickname} to go on a grand adventure!`);
                console.log(`\n◓ Head to Route 1 to continue your journey!`);
                currentRoom.objects.splice(currentRoom.objects.indexOf(item), 1);
                break;
            case "Wild Grass":
                console.log("Wild Grass");
                break;
            case "Bush":
                console.log("Bush");
                break;
            case "Tree":
                console.log("Tree");
                break;
            case "Fallen Log":
                console.log("Fallen Log");
                break;
            case "Doorman":
                console.log("Doorman");
                break;
            case "Boulder Badge":
                console.log("Boulder Badge");
                break;
        }
    }
    else {
        console.log(`\n◓ ${item} is not valid, use look or backpack to see items you can interact with`);
    }

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
    console.log(`\n◓ From ${currentRoom.name} you can get to:\n${printArray(currentRoom.paths)}`);
    console.log(`\n◓ You found:\n${printArray(currentRoom.objects)}`);
    if (currentRoom.pokemon.length > 0) {
        console.log(`\n◓ Wild Pokemon:\n${printArray(currentRoom.pokemon, true)}`);
    }
}

/**
 * says where you are and describes the room
 */
function Run_Current() {
    console.log(`\n◓ You are in ${currentRoom.name} and its description is: ${currentRoom.description}`);
}

function Run_Team() {
    if (player.pokemon.length > 0) {
        console.log(`\n◓ Heres all the Pokemon in your Party:\n${printArray(player.pokemon, true)}`);
    }
    else {
        console.log(`\n◓ You don't have any Pokemon yet, you should head to Coach Sadeem's Lab!`);
    }
}

function Run_Backpack() {
    if (player.haveBackpack) {
        console.log(`\n◓ Heres all the items in your backpack:\n${printArray(player.items)}`);
    }
    else {
        console.log("\n◓ Make sure to grab your backpack!");
    }
}
//#endregion

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