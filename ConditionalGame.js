const READLINE = require("readline-sync");
/* -------------------------------------------- 

	You've just learned about variables, conditionals.
	Just from knowing those two topics, you can do so much!
	
	Let's try to make a simple program that responds to the user.
	We're going to recreate the Magic 8 Ball!!!
			
			Never heard of it? That's ok!

					You got this!

  -------------------------------------------- 

	How a Magic 8 Ball Works:

	The user asks a question and vigoriously shakes the ball. 
	Then the ball will respond with one of twenty responses, chosen at random. 

	That's pretty simple right?

  -------------------------------------------- 

	Part 1: 
	Print instructions on the screen and 
	prompt the user to ask a question

	Tip: Don't forget to import the readline-sync module!

  -------------------------------------------- */

// let question = READLINE.question("Please ask a question: ");
















/* -------------------------------------------- 

	Part 2: Next, we need to randomly select a response from 20 options.

	Randomly select a number from 0 - 19 
	Use that to select from the following responses:
		0 - It is certain.
		1 - It is decidedly so.
		2 - Without a doubt.
		3 - Yes - definitely.
		4 - You may rely on it.
		5 - As I see it, yes.
		6 - Most likely.
		7 - Outlook good.
		8 - Yes.
		9 - Signs point to yes.
		10 - Reply hazy, try again.
		11 - Ask again later.
		12 - Better not tell you now.
		13 - Cannot predict now.
		14 - Concentrate and ask again.
		15 - Don't count on it.
		16 - My reply is no.
		17 - My sources say no.
		18 - Outlook not so good.
		19 - Very doubtful.

	Look up Math.random to see how you can use it to select a random number.

  -------------------------------------------- */

for (let i = 0; i < 50; i++) {
	let randomNum = Math.floor(Math.random() * 20);
}


// console.log(`The answer to your question: ${question} is $)

















/* -------------------------------------------- 

	Part 3: Customize it!

	Select your own theme and use case and modify your code!
	
  -------------------------------------------- */



console.log("\nWelcome to the Superhero Fortune Teller");
console.log("Using the first letter of your first and last name, and your birth month");
console.log("I will be able to get your super hero Name and Power!");

let Firstname = READLINE.question("\nWhat is the first letter of your first name? ");
let Lastname = READLINE.question("What is the first letter of your last name? ");
let Month = READLINE.question("What is the number of the month you were born in? (October = 10) ");
console.log();

let Superhero_Name_1 = "";
let Superhero_Name_2 = "";
let Power = "";

Firstname = Firstname.toUpperCase();
Lastname = Lastname.toUpperCase();

if (Firstname.length > 1 || Lastname.length > 1 || (Month < 0 || Month > 12)) {
	console.log("please enter the correct values");
}

if (Firstname == "A") {
	Superhero_Name_1 = "Iron";
}
else if (Firstname == "B") {
	Superhero_Name_1 = "Bat";
}
else if (Firstname == "C") {
	Superhero_Name_1 = "Spider";
}
else if (Firstname == "D") {
	Superhero_Name_1 = "Elephant";
}
else if (Firstname == "E") {
	Superhero_Name_1 = "Dino";
}
else if (Firstname == "F") {
	Superhero_Name_1 = "Fire";
}
else if (Firstname == "G") {
	Superhero_Name_1 = "Giant";
}
else if (Firstname == "H") {
	Superhero_Name_1 = "Amazing";
}
else if (Firstname == "I") {
	Superhero_Name_1 = "Invisible";
}
else if (Firstname == "J") {
	Superhero_Name_1 = "Aqua";
}
else if (Firstname == "K") {
	Superhero_Name_1 = "Wolf";
}
else if (Firstname == "L") {
	Superhero_Name_1 = "Ant";
}
else if (Firstname == "M") {
	Superhero_Name_1 = "Mighty";
}
else if (Firstname == "N") {
	Superhero_Name_1 = "Bobcat";
}
else if (Firstname == "O") {
	Superhero_Name_1 = "Wild";
}
else if (Firstname == "P") {
	Superhero_Name_1 = "Snake";
}
else if (Firstname == "Q") {
	Superhero_Name_1 = "Silver";
}
else if (Firstname == "R") {
	Superhero_Name_1 = "Gold";
}
else if (Firstname == "S") {
	Superhero_Name_1 = "Star";
}
else if (Firstname == "T") {
	Superhero_Name_1 = "The";
}
else if (Firstname == "U") {
	Superhero_Name_1 = "Ultra";
}
else if (Firstname == "V") {
	Superhero_Name_1 = "Incredible";
}
else if (Firstname == "W") {
	Superhero_Name_1 = "Wonder";
}
else if (Firstname == "X") {
	Superhero_Name_1 = "Great";
}
else if (Firstname == "Y") {
	Superhero_Name_1 = "Doctor";
}
else if (Firstname == "Z") {
	Superhero_Name_1 = "Magical";
}
else {
	Superhero_Name_1 = "SUPER";
}

// LASTNAME

if (Lastname == "A") {
	Superhero_Name_2 = "Witch";
}
else if (Lastname == "B") {
	Superhero_Name_2 = "Wizard";
}
else if (Lastname == "C") {
	Superhero_Name_2 = "Vampire";
}
else if (Lastname == "D") {
	Superhero_Name_2 = "Zombie";
}
else if (Lastname == "E") {
	Superhero_Name_2 = "Phoenix";
}
else if (Lastname == "F") {
	Superhero_Name_2 = "Defender";
}
else if (Lastname == "G") {
	Superhero_Name_2 = "Hero";
}
else if (Lastname == "H") {
	Superhero_Name_2 = "Tiger";
}
else if (Lastname == "I") {
	Superhero_Name_2 = "Cat";
}
else if (Lastname == "J") {
	Superhero_Name_2 = "Fire";
}
else if (Lastname == "K") {
	Superhero_Name_2 = "Fist";
}
else if (Lastname == "L") {
	Superhero_Name_2 = "Leg";
}
else if (Lastname == "M") {
	Superhero_Name_2 = "Water";
}
else if (Lastname == "N") {
	Superhero_Name_2 = "Earth";
}
else if (Lastname == "O") {
	Superhero_Name_2 = "Stone";
}
else if (Lastname == "P") {
	Superhero_Name_2 = "Air";
}
else if (Lastname == "Q") {
	Superhero_Name_2 = "Lighting";
}
else if (Lastname == "R") {
	Superhero_Name_2 = "Titan";
}
else if (Lastname == "S") {
	Superhero_Name_2 = "Sword";
}
else if (Lastname == "T") {
	Superhero_Name_2 = "Arrow";
}
else if (Lastname == "U") {
	Superhero_Name_2 = "Bow";
}
else if (Lastname == "V") {
	Superhero_Name_2 = "Protector";
}
else if (Lastname == "W") {
	Superhero_Name_2 = "Owl";
}
else if (Lastname == "X") {
	Superhero_Name_2 = "Shield";
}
else if (Lastname == "Y") {
	Superhero_Name_2 = "Axe";
}
else if (Lastname == "Z") {
	Superhero_Name_2 = "Blade";
}
else {
	Superhero_Name_2 = "SUPER";
}

if (Month == "1") {
	Power = "infinte money to make a fancy super suit like Ironman or Batman";
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
	Power = "Super Strength";
}


console.log(`Congrats!!! Your superhero name is: ${Superhero_Name_1} ${Superhero_Name_2} and your power is: ${Power}!`)





