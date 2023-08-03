
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
// the labels are done so it is a 2D grid starting at 00 and ending at 44
J00 = new JeopardyQuestion();
J00.question = `When trying to search for the right tag in HTML I use this three word combo`;
J00.answer = `What is <b>BLANK Tag HTML</b>?`;
J00.points = 100;

J10 = new JeopardyQuestion();
J10.question = `Use these tags to create an unordered list and a list item`;
J10.answer = `What is <b>&lt;ul&gt; and &lt;li&gt;</b>?`;
J10.points = 200;

J20 = new JeopardyQuestion();
J20.question = `This attribute is used to specify the url of a link in an anchor tag`;
J20.answer = `What is <b>href</b>?`;
J20.points = 300;

J30 = new JeopardyQuestion();
J30.question = `The syntax name for what goes in between the opening and closing tab for a p element`;
J30.answer = `What is <b>content or innerHTML</b>?`;
J30.points = 400;

J40 = new JeopardyQuestion();
J40.question = `This is how you reference a stylesheet named style.css<br>
(You have to write out the code)`;
J40.answer = `What is <b>&lt;link rel="stylesheet" type="text/css" href="style.css" /&gt;</b>?`;
J40.points = 500;

J01 = new JeopardyQuestion();
J01.question = `Using this css code I changed the font of Pizza into <p style="font-family:cursive;">Pizza</p>`;
J01.answer = `What is <b>font-family: cursive</b>?`;
J01.points = 100;

J11 = new JeopardyQuestion();
J11.question = `If my tag has the id of food I can use this selector`;
J11.answer = `What is <b>#food</b>?
`;
J11.points = 200;

J21 = new JeopardyQuestion();
J21.question = `When modifying things using CSS we edit BLANK, (Not HTML elements)`;
J21.answer = `What are <b>properties</b>?`;
J21.points = 300;

J31 = new JeopardyQuestion();
J31.question = `I can use this tool in the browser to debug my website`;
J31.answer = `What is <b>inspect/inspector</b>?`;
J31.points = 400;

J41 = new JeopardyQuestion();
J41.question = `<div class="Jeopardy" onmouseover="Yellow()" onmouseleave="White()"
style="border-style: dotted; border-color: green; border-width: 5px;">
    <p style="text-align: center; color: black">Jeopardy</p>
</div>
<script>
    const Yellow = () =>{
        document.querySelector('.Jeopardy').style.background = "yellow";
    };

    const White = () =>{
        document.querySelector('.Jeopardy').style.background = "white";
    };
</script>

<ul>
    <li>Make a div</li>
    <ul>
        <li>Give it the class Jeopardy</li>
        <li>Give it a p tag with the word Jeopardy</li>
        <li>Don't forget to align center the text</li>
       </ul>
    <li>Give it a Border </li>
       <ul>
        <li>Color: Green</li>
        <li>Style: Dotted</li>
        <li>Width: 5px</li>
       </ul>
    <li>Add Functionality</li>
        <ul>
        <li>Mouse Over: make the background yellow</li>
        <li>Mouse Leave: make the background white</li>
       </ul>
</ul>`;
J41.answer = `
<span>
<h2>HTML</h2>
    &lt;div class="Jeopardy" onmouseover="Yellow()" onmouseleave="White()"&gt;<br>
    &emsp;&lt;p&gt;Jeopardy&lt;/p&gt;<br>
    &lt;/div&gt;
<h2>CSS</h2>
    .Jeopardy{<br>
        &emsp;border-style: dotted;<br>
        &emsp;border-color: green;<br>
        &emsp;border-width: 5px;<br>
        &emsp;text-align: center;<br>
    }
<h2>JavaScript</h2>
    const Yellow = () =>{<br>
        &emsp;document.querySelector('.Jeopardy').style.background = "yellow";<br>
    };<br>
    <br>
    const White = () =>{<br>
        &emsp;document.querySelector('.Jeopardy').style.background = "white";<br>
    };
</span>`;
J41.points = 500;

J02 = new JeopardyQuestion();
J02.question = `The acronym DOM stands for`;
J02.answer = `What is <b>Document Object Model</b>?`;
J02.points = 100;

J12 = new JeopardyQuestion();
J12.question = `To change the color of the area of a div I use this property`;
J12.answer = `What is <b>background</b>?`;
J12.points = 200;

J22 = new JeopardyQuestion();
J22.question = `I use this function to access html elements in javascript`;
J22.answer = `What is <b>querySelector</b>?`;
J22.points = 300;

J32 = new JeopardyQuestion();
J32.question = `I use this function to save data for your website`;
J32.answer = `What is <b>localStorage</b>?`;
J32.points = 400;

J42 = new JeopardyQuestion();
J42.question = `The name of the html elements that go inside the form element`;
J42.answer = `What is <b>input</b>?`;
J42.points = 500;

J03 = new JeopardyQuestion();
J03.question = `BLANK is the text and images on a website`;
J03.answer = `What is <b>content</b>?`;
J03.points = 100;

J13 = new JeopardyQuestion();
J13.question = `Website that changes size based on different screens`;
J13.answer = `What is <b>responsive</b>?`;
J13.points = 200;

J23 = new JeopardyQuestion();
J23.question = `The group of colors you selected for your project `;
J23.answer = `What is <b>color pallet</b>?`;
J23.points = 300;

J33 = new JeopardyQuestion();
J33.question = `The name for the artform regarding the design and style of text`;
J33.answer = `What is <b>typography</b>?`;
J33.points = 400;

J43 = new JeopardyQuestion();
J43.question = `BLANK is organizing content into sections with an intuitive pattern, that helps people identify content quickly`;
J43.answer = `What is <b>information hierarchy</b>?`;
J43.points = 500;

J04 = new JeopardyQuestion();
J04.question = `Use this function to add to an array`;
J04.answer = `What is <b>array.push(element)</b>`;
J04.points = 100;

J14 = new JeopardyQuestion();
J14.question = `Instead of repeating code multiple times I can create one of these`;
J14.answer = `What is a <b>function</b>?`;
J14.points = 200;

J24 = new JeopardyQuestion();
J24.question = `A way to use data outside of a function when it finishes`;
J24.answer = `What is <b>returns</b>?`;
J24.points = 300;

J34 = new JeopardyQuestion();
J34.question = `Fix this bug<br>
const READLINE = require("readline-sync");<br>
const question = (num) => {<br>
&emsp;console.log(num + 5);<br>
};<br>
let num = READLINE.question("Number: ");<br>
question(num);<br>
(Will accept multiple answers)`;
J34.answer = `What is <b>turn num into an int</b>?`;
J34.points = 400;

J44 = new JeopardyQuestion();
J44.question = `How many times will Hi print<br>
const question = () => {<br>
&emsp;for (let i = 0; i < 5; i++) {<br>
&emsp;&emsp;for (let j = 0; j < 4; j++) {<br>
&emsp;&emsp;&emsp;if (i % 2 == 0 && j % 3 == 0) {<br>
&emsp;&emsp;&emsp;&emsp;console.log(\`Hi\`);<br>
&emsp;&emsp;&emsp;}<br>
&emsp;&emsp;}<br>
&emsp;}<br>
};<br>
question();`;
J44.answer = `What is <b>6 times</b>?`;
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
