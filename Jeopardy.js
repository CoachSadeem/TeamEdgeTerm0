const READLINE = require("readline-sync");


// concatenation 
const question1 = (num) => {

    console.log(num + 5);

};
question1("3");
question1(3);
question1("Hello ");











// scope
const question2 = () => {
    let num = 321;

    function innerFunction() {

        let num = 123;

    }
    innerFunction();
    console.log(num);
};

question2();















// nested loops
const question3 = () => {
    for (let i = 1; i < 4; i++) {
        for (let j = 0; j < 3; j++) {
            console.log(`Hi`);
        }
    }

};
question3();



















// arrays
const question4 = () => {
    let food = ["Sushi", "Burger", "Pizza"];
    console.log(food.push("Shawarma", "Tacos"));
    console.log(food.pop());

};
question4();















// objects
const question5 = () => {
    let dog = {
        name: "Rico",
        age: 3,
        breed: "Poodle",
    };
    console.log(`${dog.name} is Sadeem's ${dog.breed}!`);
    dog.breed = "Golden Doodle";
    console.log(`${dog.name} is Sadeem's ${dog.breed}!`);

};
question5();










for(let i = 1; i <= 15; i++){
    if(i%2==0){
        console.log(i);
    }
}

let i =1;
while(i <=15){
    if(i%2==0){
        console.log(i);
    }
    i++;
}

let r = true
while (r) {
    let prompt = READLINE.question("Y/N")
    if (prompt == "N") {
        break;
        //r = false
    }
    for (let x = 1; x <= 10; x++) {
        console.log(x)
    }

}

let luckyNum = null;
console.log("Guess my lucky number?")
while (luckyNum == null) {
    let guess = READLINE.question('Guess: ');
    if (guess == 28) {
        luckyNum = guess;
    }
}
console.log("Correct my lucky number is 28!")

// let numbers = [1,2,3,4,5,6,7];
// for (let i = 0; i < numbers.length; i++){
//     console.log(i);
// }

// let runAgain = "Y";
// let anyArray = []
// while(runAgain == "Y"){
//     let element = READLINE.question("What do you wanna add to the array? ");
//     anyArray.push(element);
//     runAgain = READLINE.question("Would you add more? (Y/N) ");
// }
// console.log(anyArray)

let goAgain = "Y";
while(goAgain == "Y"){
    for(let i = 1; i <= 10; i++){
        console.log(i)
    } 
    goAgain = READLINE.question("Would you count to 10 again? (Y/N) ");
}