const READLINE = require("readline-sync"); // needed to get input

console.log("\nWelcome to the Superhero Fortune Teller");
console.log("Using the first letter of your first and last name, and your birth month");
console.log("I will be able to get your super hero Name and Power!");

// Getting my values for the quiz
let firstName = READLINE.question("\nWhat is the first letter of your first name? ");
let lastName = READLINE.question("What is the first letter of your last name? ");
let Month = READLINE.question("What is the number of the month you were born in? (October = 10) ");
console.log();

// Creating empty strings for the name and power
let Superhero_Name_1 = "";
let Superhero_Name_2 = "";
let Power = "";

// making the first letter capital so I can compare it in my if statement
// a -> A
firstName = firstName.toUpperCase();
lastName = lastName.toUpperCase();

// getting the first half of the super hero name
if (firstName == "A") {
	Superhero_Name_1 = "Iron";
}
else if (firstName == "B") {
	Superhero_Name_1 = "Bat";
}
else if (firstName == "C") {
	Superhero_Name_1 = "Spider";
}
else if (firstName == "D") {
	Superhero_Name_1 = "Elephant";
}
else if (firstName == "E") {
	Superhero_Name_1 = "Dino";
}
else if (firstName == "F") {
	Superhero_Name_1 = "Fire";
}
else if (firstName == "G") {
	Superhero_Name_1 = "Giant";
}
else if (firstName == "H") {
	Superhero_Name_1 = "Amazing";
}
else if (firstName == "I") {
	Superhero_Name_1 = "Invisible";
}
else if (firstName == "J") {
	Superhero_Name_1 = "Aqua";
}
else if (firstName == "K") {
	Superhero_Name_1 = "Wolf";
}
else if (firstName == "L") {
	Superhero_Name_1 = "Ant";
}
else if (firstName == "M") {
	Superhero_Name_1 = "Mighty";
}
else if (firstName == "N") {
	Superhero_Name_1 = "Bobcat";
}
else if (firstName == "O") {
	Superhero_Name_1 = "Wild";
}
else if (firstName == "P") {
	Superhero_Name_1 = "Snake";
}
else if (firstName == "Q") {
	Superhero_Name_1 = "Silver";
}
else if (firstName == "R") {
	Superhero_Name_1 = "Gold";
}
else if (firstName == "S") {
	Superhero_Name_1 = "Star";
}
else if (firstName == "T") {
	Superhero_Name_1 = "The";
}
else if (firstName == "U") {
	Superhero_Name_1 = "Ultra";
}
else if (firstName == "V") {
	Superhero_Name_1 = "Incredible";
}
else if (firstName == "W") {
	Superhero_Name_1 = "Wonder";
}
else if (firstName == "X") {
	Superhero_Name_1 = "Great";
}
else if (firstName == "Y") {
	Superhero_Name_1 = "Doctor";
}
else if (firstName == "Z") {
	Superhero_Name_1 = "Magical";
}
else {
	// the default first half of the super hero name
	Superhero_Name_1 = "SUPER";
}

// getting the second half of the super hero name
if (lastName == "A") {
	Superhero_Name_2 = "Witch";
}
else if (lastName == "B") {
	Superhero_Name_2 = "Wizard";
}
else if (lastName == "C") {
	Superhero_Name_2 = "Vampire";
}
else if (lastName == "D") {
	Superhero_Name_2 = "Zombie";
}
else if (lastName == "E") {
	Superhero_Name_2 = "Phoenix";
}
else if (lastName == "F") {
	Superhero_Name_2 = "Defender";
}
else if (lastName == "G") {
	Superhero_Name_2 = "Hero";
}
else if (lastName == "H") {
	Superhero_Name_2 = "Tiger";
}
else if (lastName == "I") {
	Superhero_Name_2 = "Cat";
}
else if (lastName == "J") {
	Superhero_Name_2 = "Fire";
}
else if (lastName == "K") {
	Superhero_Name_2 = "Fist";
}
else if (lastName == "L") {
	Superhero_Name_2 = "Leg";
}
else if (lastName == "M") {
	Superhero_Name_2 = "Water";
}
else if (lastName == "N") {
	Superhero_Name_2 = "Earth";
}
else if (lastName == "O") {
	Superhero_Name_2 = "Stone";
}
else if (lastName == "P") {
	Superhero_Name_2 = "Air";
}
else if (lastName == "Q") {
	Superhero_Name_2 = "Lighting";
}
else if (lastName == "R") {
	Superhero_Name_2 = "Titan";
}
else if (lastName == "S") {
	Superhero_Name_2 = "Sword";
}
else if (lastName == "T") {
	Superhero_Name_2 = "Arrow";
}
else if (lastName == "U") {
	Superhero_Name_2 = "Bow";
}
else if (lastName == "V") {
	Superhero_Name_2 = "Protector";
}
else if (lastName == "W") {
	Superhero_Name_2 = "Owl";
}
else if (lastName == "X") {
	Superhero_Name_2 = "Shield";
}
else if (lastName == "Y") {
	Superhero_Name_2 = "Axe";
}
else if (lastName == "Z") {
	Superhero_Name_2 = "Blade";
}
else {
	// the default second half of the super hero name
	Superhero_Name_2 = "SUPER";
}

// getting the super power
if (Month == "1") {
	Power = "infinite money to make a fancy super suit like Ironman or Batman";
}
else if (Month == "2") {
	Power = "the ability to talk to fish and breath underwater";
}
else if (Month == "3") {
	Power = "control over the 4 elements like the Avatar";
}
else if (Month == "4") {
	Power = "great flight";
}
else if (Month == "5") {
	Power = "pyrokinesis, the ability to control fire with your mind";
}
else if (Month == "6") {
	Power = "telekinesis, the ability to read minds and move things with your mind";
}
else if (Month == "7") {
	Power = "the ability to teleport anywhere";
}
else if (Month == "8") {
	Power = "control over magic";
}
else if (Month == "9") {
	Power = "the ability to turn invisible ";
}
else if (Month == "10") {
	Power = "super stretching limbs";
}
else if (Month == "11") {
	Power = "the ability to transform into any animal";
}
else if (Month == "12") {
	Power = "the ability to phase thru walls";
}
else {
	// the default power
	Power = "Super Strength";
}

// Output out the results
console.log(`Congrats!!! Your superhero name is: ${Superhero_Name_1} ${Superhero_Name_2} and your power is: ${Power}!`)





