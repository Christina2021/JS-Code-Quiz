//Linked to index.html

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
        answer1: ['getElem( )', 'wrong'],
        answer2: ['queryByClass( )', 'wrong'],
        answer3: ['querySelect( )', 'wrong'],
        answer4: ['getElementById( )', 'correct']
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

//Query Selector Variables
//Question header and Answer buttons
const currentQuestion = document.querySelector('#question');
const currentAnswer1 = document.querySelector('#answer1');
const currentAnswer2 = document.querySelector('#answer2');
const currentAnswer3 = document.querySelector('#answer3');
const currentAnswer4 = document.querySelector('#answer4');
//Correct and Wrong display messages
const wrongMessage = document.querySelector('#wrong');
const correctMessage = document.querySelector('#correct');
//Submit button after quiz
const submitButton = document.querySelector('#submit-score');

//Define variables
let questionNum = 0;    //For question number
let score = 0;          //For user's score
let seconds = 90;       //For timer's seconds
let myTimer;            //For timer as a whole
let userInit;           //For user's initials submission
let scoreBoard = [];    //Array for scoreboard of total users/scores
let scoreObj;           //Objects to add to scoreboard
let timerOut;           //For if seconds reach 0


//Initial question to display
currentQuestion.innerHTML = questList[questionNum].question;
currentAnswer1.innerHTML = questList[questionNum].answer1[0];
currentAnswer2.innerHTML = questList[questionNum].answer2[0];
currentAnswer3.innerHTML = questList[questionNum].answer3[0];
currentAnswer4.innerHTML = questList[questionNum].answer4[0];


//Defined function for when an answer button is clicked on
function displayQuestion(event) {
    event.preventDefault();
    //grabs id of button that was clicked on to target the specific button
    let userAnsId = event.target.getAttribute("id");
    //to store which button the user clicked on
    let userAns;

    //Determines the answer button the user clicked on based on the button id, and sets it to whether it was correct or wrong
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
            console.log('Issue with userAnsId') //default used for debugging purposes
    }


    //if the user answered wrong, display wrong message and take off 5 seconds from timer
    if (userAns[1] === 'wrong'){
        wrongMessage.classList.remove('display-none')
        seconds -= 5;
        return;
    }


    //if right do this
    else {
        correctMessage.classList.remove('display-none');
        wrongMessage.classList.add('display-none');
        score += 10;

        //If correct, prevents user from clicking on answer buttons until next answer appears
        currentAnswer1.setAttribute("disabled","true");
        currentAnswer2.setAttribute("disabled","true");
        currentAnswer3.setAttribute("disabled","true");
        currentAnswer4.setAttribute("disabled","true");


        if(questionNum < 9) {
            //let's correct display for half a second before moving to the next question            
            setTimeout(function() {
                //Goes to next question, removes "correct" message
                questionNum++;    
                currentQuestion.innerHTML = questList[questionNum].question;
                currentAnswer1.innerHTML = questList[questionNum].answer1[0];
                currentAnswer2.innerHTML = questList[questionNum].answer2[0];
                currentAnswer3.innerHTML = questList[questionNum].answer3[0];
                currentAnswer4.innerHTML = questList[questionNum].answer4[0];
                correctMessage.classList.add('display-none')
                //Removes disabled attribute from buttons so user can select answer on next question
                currentAnswer1.removeAttribute("disabled");
                currentAnswer2.removeAttribute("disabled");
                currentAnswer3.removeAttribute("disabled");
                currentAnswer4.removeAttribute("disabled");
                //Removes active class from button when clicked on
                currentAnswer1.classList.remove('btn', 'btn-dark');
                currentAnswer2.classList.remove('btn', 'btn-dark');
                currentAnswer3.classList.remove('btn', 'btn-dark');
                currentAnswer4.classList.remove('btn', 'btn-dark');
                currentAnswer1.classList.add('btn', 'btn-dark');
                currentAnswer2.classList.add('btn', 'btn-dark');
                currentAnswer3.classList.add('btn', 'btn-dark');
                currentAnswer4.classList.add('btn', 'btn-dark');
            },750);
        } else {  //questionNum === 9
            //displays correct message briefly before going to gameOver function
            setTimeout(function() {
            correctMessage.classList.add('display-none')
            gameOver();
            },750);
        };
    };
};

//When timer runs out or user answers all questions
function gameOver(){
    clearInterval(myTimer);
    document.querySelector('#timer').innerHTML = `Timer: --`
    document.querySelector('#score').innerHTML = `Your score is ${score} points!`;
    document.querySelector('#questions').classList.add('display-none')
    document.querySelector('#enter-initials').classList.remove('display-none')
    if (timerOut){
        document.querySelector('#time-ran-out').classList.remove('display-none')
    } else {
        document.querySelector('#finished-quiz').classList.remove('display-none')
    };
}

//Button Click Events
currentAnswer1.addEventListener('click',displayQuestion);
currentAnswer2.addEventListener('click',displayQuestion);
currentAnswer3.addEventListener('click',displayQuestion);
currentAnswer4.addEventListener('click',displayQuestion);


//timer starts immediately (from logic.js file); counts down from 90
function timerGo() {
    myTimer = setInterval(function() {
        seconds--;
        document.querySelector('#timer').innerHTML = `Timer: ${seconds}`;
        //When timer reaches 0
        if(seconds <= 0){
            timerOut = true;
            gameOver();
        }
    },1000);
};

//To add to localStorage so that all users/scores display on scoreboard
submitButton.addEventListener('click',function(e){
    e.preventDefault();
    userInit = document.querySelector('#initials').value;
    //If user does not enter anything
    if(!userInit) {
        const confirmNoScore = confirm("Are you sure you do not want to enter in your score to the scoreboard?");
        //Confirm if user is sure they do not want to record their score
        if(confirmNoScore){
            alert("Your score will not be added to the scoreboard.");
            location.href = "highscores.html";
            return;
        } else {
            return;
        };
    } else {
        //Put the user's information into an object
        scoreObj = {name: userInit, score: score};
        //Get previous user's initials/scores from localStorage and parse
        scoreBoard = JSON.parse(localStorage.getItem("currentScoreBoard"));
        //If nothing is currently in localStorage
        if(!scoreBoard){
            //have Scoreboard be an empty array
            scoreBoard = [];
            //Add the new object
            scoreBoard[0] = scoreObj;
        } else {
            //Add the new object into the existing array
            scoreBoard.push(scoreObj);
        };
        //Convert object into a string
        localStorage.setItem("currentScoreBoard",JSON.stringify(scoreBoard));
        location.href = "highscores.html";
    };
});
