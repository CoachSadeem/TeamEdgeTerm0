
// const question = () => {
//     for (let i = 0; i < 5; i++) {
//         for (let j = 0; j < 4; j++) {
//             if (i % 2 == 0 && j % 3 == 0) {
//                 console.log(`Hi`);
//             }
//         }
//     }
// };
// question();
const READLINE = require("readline-sync");
const question = (num) => {
    console.log(num + 5);
};
let num = READLINE.question("Number: ");
question(num)