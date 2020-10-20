//Linked to index.html

// alert("We are linked");  confirmed link; remove once JS content entered

//This file will be used for the questions

//Create an array with objects; must include JS questions and answers; put answers in an array with the answer and if it's wrong or correct
const questList = [
    {
        question: 'Which of the following are JavaScript data types? Choose the best answer:',
        answer1: ['Null', 'wrong'],
        answer2: ['String', 'wrong'],
        answer3: ['Number', 'wrong'],
        answer4: ['All of the above', 'correct']
    },
    {
        question: 'Which keyword CANNOT be used to define a new variable?',
        answer1: ['var', 'wrong'],
        answer2: ['key', 'correct'],
        answer3: ['let', 'wrong'],
        answer4: ['const', 'wrong']
    },
    {
        question: 'What object does the "this" keyword refer to?',
        answer1: ['Window', 'wrong'],
        answer2: ['Nothing', 'wrong'],
        answer3: ['It depends on where it is being used.', 'correct'],
        answer4: ['An object you had created', 'wrong']
    },
    {
        question: 'Which option below can be used to access an HTML element?',
        answer1: ['getElem()', 'wrong'],
        answer2: ['getElementByClass', 'wrong'],
        answer3: ['querySelect()', 'wrong'],
        answer4: ['getElementById()', 'correct']
    },
    {
        question: 'When will data in Local Storage no longer show?',
        answer1: ['When it is manually cleared (such as through settings).', 'correct'],
        answer2: ['When you refresh the page.', 'wrong'],
        answer3: ['When you close out of the browser.', 'wrong'],
        answer4: ['It never clears.', 'wrong']
    },
    {
        question: 'What does NaN mean?',
        answer1: ['Not all Numbers', 'wrong'],
        answer2: ['Null a Number', 'wrong'],
        answer3: ['Not a Number', 'correct'],
        answer4: ['Now a Number', 'wrong']
    },
    {
        question: 'If we do console.log("hello") in JS, where will we be able to see this?',
        answer1: ['We will never see this.', 'wrong'],
        answer2: ['On the webpage when we open it.', 'wrong'],
        answer3: ['On the webpage, but the visibility will be hidden.', 'wrong'],
        answer4: ['In the console.', 'correct']
    },
    {
        question: 'If we write const pets = ["cats", "dogs"] in JavaScript, can we add in "hamster" to the array?',
        answer1: ['Yes; by using the .push() method.', 'correct'],
        answer2: ['No, because the array is defined as a const.', 'wrong'],
        answer3: ['No, because we can never add to arrays.', 'wrong'],
        answer4: ['Yes; by using the .pop() method. .', 'wrong']
    },
    {
        question: 'To assign a value to a variable, which of the following would we use?',
        answer1: ['==', 'wrong'],
        answer2: ['=', 'correct'],
        answer3: ['===', 'wrong'],
        answer4: ['!', 'wrong']
    },
    {
        question: 'What is a callback function?',
        answer1: ['A function that is specifically named callBack.', 'wrong'],
        answer2: ['A function that is passed as an argument to another function.', 'correct'],
        answer3: ['There is no such thing.', 'wrong'],
        answer4: ['All of the above.', 'wrong']
    }
];

//display question (function)
let questionNum = 0;
let score = 0;
let seconds = 90;
let myTimer;
let userInit;
let scoreBoard = [];
let scoreObj;


document.querySelector('#question').innerHTML = questList[questionNum].question;
document.querySelector('#answer1').innerHTML = questList[questionNum].answer1[0];
document.querySelector('#answer2').innerHTML = questList[questionNum].answer2[0];
document.querySelector('#answer3').innerHTML = questList[questionNum].answer3[0];
document.querySelector('#answer4').innerHTML = questList[questionNum].answer4[0];


function displayQuestion(event) {
event.preventDefault();
//grabs id of button that was clicked on
var userAnsId = event.target.getAttribute("id");
console.log(userAnsId);

var userAns;

switch (userAnsId) {
    case 'answer1': 
        userAns = questList[questionNum].answer1;
        break;
    case 'answer2':
        userAns = questList[questionNum].answer2;
        break;
    case 'answer3':
        userAns = questList[questionNum].answer3;
        break;
    case 'answer4':
        userAns = questList[questionNum].answer4;
        break;
    default:
        console.log('Issue with userAnsId')
}

console.log(userAns);
console.log(userAns[1]);

//if wrong do this
//5 seconds taken off the timer
if (userAns[1] === 'wrong'){
    console.log("this is working")
    document.querySelector('#wrong').classList.remove('display-none')
    seconds -= 5;
    return;
}



//if right do this
else {
    document.querySelector('#correct').classList.remove('display-none')
    document.querySelector('#wrong').classList.add('display-none')
    score += 10;

    if(questionNum < 9) {
        //let's correct display for half a second before moving to the next question
        setTimeout(function() {
            questionNum++;    
            document.querySelector('#question').innerHTML = questList[questionNum].question;
            document.querySelector('#answer1').innerHTML = questList[questionNum].answer1[0];
            document.querySelector('#answer2').innerHTML = questList[questionNum].answer2[0];
            document.querySelector('#answer3').innerHTML = questList[questionNum].answer3[0];
            document.querySelector('#answer4').innerHTML = questList[questionNum].answer4[0];
            document.querySelector('#correct').classList.add('display-none')
        },750)
    } else {  //questionNum === 9
        document.querySelector('#correct').classList.add('display-none')
        gameOver();
    } 
}
}

function gameOver(){
    clearInterval(myTimer);
    document.querySelector('#timer').innerHTML = `Timer: --`
    console.log("game over");
    document.querySelector('#score').innerHTML = `Your score is ${score} points!`;
    console.log(score);
    document.querySelector('#questions').classList.add('display-none')
    document.querySelector('#enter-initials').classList.remove('display-none')
    document.querySelector('#finished-quiz').classList.remove('display-none')
}

const subAns1 = document.querySelector('#answer1');
const subAns2 = document.querySelector('#answer2');
const subAns3 = document.querySelector('#answer3');
const subAns4 = document.querySelector('#answer4');
subAns1.addEventListener('click',displayQuestion);
subAns2.addEventListener('click',displayQuestion);
subAns3.addEventListener('click',displayQuestion);
subAns4.addEventListener('click',displayQuestion);



// document.querySelector('#submit-score')addEventListener('click',)


//timer starts immediately; counts down from 90
function timerGo() {
    console.log('test worked! write timer code in.');
    myTimer = setInterval(function() {
        seconds--;
        console.log(seconds);
        document.querySelector('#timer').innerHTML = `Timer: ${seconds}`;
        if(seconds <= 0){
            gameOver();
        }
    },1000);
};


document.querySelector('#submit-score').addEventListener('click',function(e){
    e.preventDefault();
    console.log("does this work");
    userInit = document.querySelector('#initials').value;
    console.log(userInit);
    scoreObj = {name: userInit, score: score};
    scoreBoard = JSON.parse(localStorage.getItem("currentScoreBoard"));
    if(!scoreBoard){
        scoreBoard = [];
        scoreBoard[0] = scoreObj;
    } else {
        scoreBoard.push(scoreObj);
    };
    localStorage.setItem("currentScoreBoard",JSON.stringify(scoreBoard));
    location.href = "highscores.html";
});

//maybe disable radio button so they don't keep clicking on the wrong answer?

//if correct, will display correct for one second then move to next question

//if timer reaches 0, display enter-initials and game-over section

//if all questions are answered, display enter-initials and finished-quiz section

//enter-initials section must show total score


//Set object with initials and score total to localSession; add to it with values

//after entering initials, go to highscores page
//submit needs to have preventDefault

