const changeText = () => {
    document.querySelector("#text").innerHTML = "Bye!";
    document.querySelector("#text").style.color = "#6495ED";
};

//#region Jeopardy Questions
class JeopardyQuestion {
    constructor(question, answer, points) {
        this.question = question;
        this.answer = answer;
        this.points = points;
    }
}

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

let JeopardyQuestions = [[J00,J01,J02,J03,J04],[J10,J11,J12,J13,J14],[J20,J21,J22,J23,J24],[J30,J31,J32,J33,J34],[J40,J41,J42,J43,J44]];
//#endregion

const showGrid = () => {
    JeopardyQuestions.forEach(questions => {
        questions.forEach(question => {
            console.log(question)
        });
    });

    for(let i = 0; i < JeopardyQuestions.length; i++){
        for(let j = 0; j < JeopardyQuestions[i].length; j++){
            console.log(`index: (${i},${j}) | ${JeopardyQuestions[i][j].question}`)
        }
    }
};

let previousRow = -1;
let previousColumn = -1;
let QuestionStart = "Q: ";
let AnswerStart = "A: ";

const showQuestion = (row, column) => {
    previousRow = row;
    previousColumn = column;
    document.querySelector("#question").innerHTML = QuestionStart + JeopardyQuestions[row][column].question;
    document.querySelector(`#cell${row}${column}`).style.color = "#545353";
    document.querySelector("#answer").innerHTML = AnswerStart;

}

const showAnswer = () => {
    document.querySelector("#answer").innerHTML = AnswerStart + JeopardyQuestions[previousRow][previousColumn].answer;
}

const addPoints = (team) => {
    document.querySelector(`#t${team}score`).innerHTML = parseInt(document.querySelector(`#t${team}score`).innerHTML) + JeopardyQuestions[previousRow][previousColumn].points;
    // console.log(typeof(document.querySelector(`#t${team}score`).innerHTML))
    // console.log(typeof(JeopardyQuestions[previousRow][previousColumn].points))
}

const subPoints = (team) => {
    document.querySelector(`#t${team}score`).innerHTML = parseInt(document.querySelector(`#t${team}score`).innerHTML) - JeopardyQuestions[previousRow][previousColumn].points;

}
