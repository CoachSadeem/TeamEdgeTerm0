
//#region Jeopardy Questions
// The class for my questions made up of an answer, a question and the points
class JeopardyQuestion {
    constructor(question, answer, points) {
        this.question = question;
        this.answer = answer;
        this.points = points;
    }
}
// each question is made the same way
// the lables are done so it is a 2D grid starting at 00 and ending at 44
J00 = new JeopardyQuestion();
J00.question = `<br>
const question5 = () => {<br>
&emsp;let dog = {<br>
&emsp;&emsp;name: "Rico",<br>
&emsp;&emsp;age: 3,<br>
&emsp;&emsp;breed: "Golden Poodle",<br>
&emsp;};<br>
&emsp;dog.breed = "Golden Doodle";<br>
&emsp;console.log(\`\${dog.name} is Sadeem\'s \${dog.breed}!\`);<br>
};<br><br>
question5();<br>
`;

J00.answer = `Rico is Sadeem's Golden Doodle!`;
J00.points = 100;

J10 = new JeopardyQuestion();
J10.question = "Question 1,0";
J10.answer = "Answer 1,0";
J10.points = 200;

J20 = new JeopardyQuestion();
J20.question = "Question 2,0";
J20.answer = "Answer 2,0";
J20.points = 300;

J30 = new JeopardyQuestion();
J30.question = "Question 3,0";
J30.answer = "Answer 3,0";
J30.points = 400;

J40 = new JeopardyQuestion();
J40.question = "Question 4,0";
J40.answer = "Answer 4,0";
J40.points = 500;

J01 = new JeopardyQuestion();
J01.question = "Question 0,1";
J01.answer = "Answer 0,1";
J01.points = 100;

J11 = new JeopardyQuestion();
J11.question = "Question 1,1";
J11.answer = "Answer 1,1";
J11.points = 200;

J21 = new JeopardyQuestion();
J21.question = "Question 2,1";
J21.answer = "Answer 2,1";
J21.points = 300;

J31 = new JeopardyQuestion();
J31.question = "Question 3,1";
J31.answer = "Answer 3,1";
J31.points = 400;

J41 = new JeopardyQuestion();
J41.question = "Question 4,1";
J41.answer = "Answer 4,1";
J41.points = 500;

J02 = new JeopardyQuestion();
J02.question = "Question 0,2";
J02.answer = "Answer 0,2";
J02.points = 100;

J12 = new JeopardyQuestion();
J12.question = "Question 1,2";
J12.answer = "Answer 1,2";
J12.points = 200;

J22 = new JeopardyQuestion();
J22.question = "Question 2,2";
J22.answer = "Answer 2,2";
J22.points = 300;

J32 = new JeopardyQuestion();
J32.question = "Question 3,2";
J32.answer = "Answer 3,2";
J32.points = 400;

J42 = new JeopardyQuestion();
J42.question = "Question 4,2";
J42.answer = "Answer 4,2";
J42.points = 500;

J03 = new JeopardyQuestion();
J03.question = "Question 0,3";
J03.answer = "Answer 0,3";
J03.points = 100;

J13 = new JeopardyQuestion();
J13.question = "Question 1,3";
J13.answer = "Answer 1,3";
J13.points = 200;

J23 = new JeopardyQuestion();
J23.question = "Question 2,3";
J23.answer = "Answer 2,3";
J23.points = 300;

J33 = new JeopardyQuestion();
J33.question = "Question 3,3";
J33.answer = "Answer 3,3";
J33.points = 400;

J43 = new JeopardyQuestion();
J43.question = "Question 4,3";
J43.answer = "Answer 4,3";
J43.points = 500;

J04 = new JeopardyQuestion();
J04.question = "Question 0,4";
J04.answer = "Answer 0,4";
J04.points = 100;

J14 = new JeopardyQuestion();
J14.question = "Question 1,4";
J14.answer = "Answer 1,4";
J14.points = 200;

J24 = new JeopardyQuestion();
J24.question = "Question 2,4";
J24.answer = "Answer 2,4";
J24.points = 300;

J34 = new JeopardyQuestion();
J34.question = "Question 3,4";
J34.answer = "Answer 3,4";
J34.points = 400;

J44 = new JeopardyQuestion();
J44.question = "Question 4,4";
J44.answer = "Answer 4,4";
J44.points = 500;

// 2d array of all the questions
let JeopardyQuestions = [[J00, J01, J02, J03, J04], [J10, J11, J12, J13, J14], [J20, J21, J22, J23, J24], [J30, J31, J32, J33, J34], [J40, J41, J42, J43, J44]];
//#endregion

// Current row and column track what ever question we are currently on
let currentRow = -1;
let currentColumn = -1;
// Formatting the questions and the answers
const QuestionStart = "Q: ";
const AnswerStart = "A: ";

// the reset button
const reset = () => {
    // resetting the color of the questions
    // Check if we already have an array in local storage.
    let questionsAsked = localStorage.getItem("QA");
    // If not, create the array.
    questionsAsked = [];
    // Encode the array.
    questionsAsked = JSON.stringify(questionsAsked);
    // Add back to LocalStorage. 
    localStorage.setItem("QA", questionsAsked);
    location.reload();

    // resetting the scores to 0
    document.querySelector(`#t1score`).innerHTML = 0;
    localStorage.setItem(`dataStorage-t1score`,document.querySelector(`#t1score`).innerHTML);
    document.querySelector(`#t2score`).innerHTML = 0;
    localStorage.setItem(`dataStorage-t2score`,document.querySelector(`#t2score`).innerHTML);
    document.querySelector(`#t3score`).innerHTML = 0;
    localStorage.setItem(`dataStorage-t3score`,document.querySelector(`#t3score`).innerHTML);

    // resetting the team names
    document.querySelector(`#team1`).innerHTML = "Team 1";
    localStorage.setItem(`dataStorage-team1`,document.querySelector(`#team1`).innerHTML);
    document.querySelector(`#team2`).innerHTML = "Team 2";
    localStorage.setItem(`dataStorage-team2`,document.querySelector(`#team2`).innerHTML);
    document.querySelector(`#team3`).innerHTML = "Team 3";
    localStorage.setItem(`dataStorage-team3`,document.querySelector(`#team3`).innerHTML);
    
};

// show a question
const showQuestion = (row, column) => {
    currentRow = row;
    currentColumn = column;
    // updates Q: to be the question
    // changes the color of the button
    // clears the previous answer
    document.querySelector("#question").innerHTML = QuestionStart + JeopardyQuestions[row][column].question;
    document.querySelector(`#cell${row}${column}`).style.color = "#545353";
    document.querySelector("#answer").innerHTML = AnswerStart;

    // saves the id in a local storage array so I can save which questions have been asked
    // Check if we already have an array in local storage.
    let questionsAsked = localStorage.getItem("QA");
    // If not, create the array.
    if (questionsAsked === null) questionsAsked = [];
    // If so, decode the array. 
    else questionsAsked = JSON.parse(questionsAsked);
    // Add our new item. 
    questionsAsked.push(`#cell${row}${column}`);
    // Encode the array.
    questionsAsked = JSON.stringify(questionsAsked);
    // Add back to LocalStorage. 
    localStorage.setItem("QA", questionsAsked);

};

// shows the answer
const showAnswer = () => {
    document.querySelector("#answer").innerHTML = AnswerStart + JeopardyQuestions[currentRow][currentColumn].answer;
};

// add points to what ever team
// if no question is selected add zero points
// save the score to local storage
const addPoints = (team) => {
    let points = 0;
    if (currentRow != -1 && currentColumn != -1) {
        points = JeopardyQuestions[currentRow][currentColumn].points;
    }
    document.querySelector(`#t${team}score`).innerHTML = parseInt(document.querySelector(`#t${team}score`).innerHTML) + points;
    saveScore(team);

};

// sub points to what ever team
// if no question is selected sub zero points
// save the score to local storage
const subPoints = (team) => {
    let points = 0;
    if (currentRow != -1 && currentColumn != -1) {
        points = JeopardyQuestions[currentRow][currentColumn].points;
    }
    document.querySelector(`#t${team}score`).innerHTML = parseInt(document.querySelector(`#t${team}score`).innerHTML) - points;
    saveScore(team);
};

// on refresh fill in any values from local storage
window.onload = () => {
    // Check if we already have an array in local storage.
    let questionsAsked = localStorage.getItem("QA");

    if (questionsAsked !== null) {
        // Decode the array. 
        questionsAsked = JSON.parse(questionsAsked);
        // Add our new item. 
        questionsAsked.forEach(cell => {
            document.querySelector(cell).style.color = "#545353";
        });

        // Encode the array.
        questionsAsked = JSON.stringify(questionsAsked);
        // Add back to LocalStorage. 
        localStorage.setItem("QA", questionsAsked);
    }

    saveTeam();
};


const saveScore = (team) => {
    localStorage.setItem(`dataStorage-t${team}score`,document.querySelector(`#t${team}score`).innerHTML);

}

// saves all the team names and scores if manually changed
const saveTeam = () => {
    let editables = document.querySelectorAll(`[contenteditable=true]`);
    // save edits
    editables.forEach(el => {
        el.addEventListener("blur", () => {
            localStorage.setItem("dataStorage-" + el.id, el.innerHTML);
        });
    });

    // once on load
    for (var key in localStorage) {
        if (key.includes("dataStorage-")) {
            const id = key.replace("dataStorage-", "");
            document.querySelector("#" + id).innerHTML = localStorage.getItem(key);
        }
    }
}
