const READLINE = require("readline-sync");

let question = READLINE.question("What is your question? ");
let ranNum = Math.floor(Math.random() * 20);

if (ranNum == 0) {
    console.log(`The answer to your question is:\nIt is certain.`);
}
else if (ranNum == 1) {
    console.log(`The answer to your question is:\nIt is decidedly so.`);
}
else if (ranNum == 2) {
    console.log(`The answer to your question is:\nWithout a doubt.`);
}
else if (ranNum == 3) {
    console.log(`The answer to your question is:\nYes definitely.`);
}
else if (ranNum == 4) {
    console.log(`The answer to your question is:\nYou may rely on it.`);
}
else if (ranNum == 5) {
    console.log(`The answer to your question is:\nAs I see it, yes.`);
}
else if (ranNum == 6) {
    console.log(`The answer to your question is:\nMost likely.`);
}
else if (ranNum == 7) {
    console.log(`The answer to your question is:\nOutlook good.`);
}
else if (ranNum == 8) {
    console.log(`The answer to your question is:\nYes.`);
}
else if (ranNum == 9) {
    console.log(`The answer to your question is:\nSigns point to yes.`);
}
else if (ranNum == 10) {
    console.log(`The answer to your question is:\nReply hazy, try again.`);
}
else if (ranNum == 11) {
    console.log(`The answer to your question is:\nAsk again later.`);
}
else if (ranNum == 12) {
    console.log(`The answer to your question is:\nBetter not tell you now.`);
}
else if (ranNum == 13) {
    console.log(`The answer to your question is:\nCannot predict now.`);
}
else if (ranNum == 14) {
    console.log(`The answer to your question is:\nConcentrate and ask again.`);
}
else if (ranNum == 15) {
    console.log(`The answer to your question is:\nDon't count on it.`);
}
else if (ranNum == 16) {
    console.log(`The answer to your question is:\nMy reply is no.`);
}
else if (ranNum == 17) {
    console.log(`The answer to your question is:\nMy sources say no.`);
}
else if (ranNum == 18) {
    console.log(`The answer to your question is:\nOutlook not so good.`);
} else if (ranNum == 19) {
    console.log(`The answer to your question is:\nVery doubtful.`);
}










// SHORT CUT
let answers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];
console.log(`The answer to your question is:\n${answers[ranNum]}`);
