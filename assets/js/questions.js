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

function displayQuestion(event) {
event.preventDefault();


//if wrong do this


//if right or first question do this
document.querySelector('#question').innerHTML = questList[questionNum].question;
document.querySelector('#answer1').innerHTML = questList[questionNum].answer1[0];
document.querySelector('#answer2').innerHTML = questList[questionNum].answer2[0];
document.querySelector('#answer3').innerHTML = questList[questionNum].answer3[0];
document.querySelector('#answer4').innerHTML = questList[questionNum].answer4[0];
questionNum++;

}

const subAns1 = document.querySelector('#answer1');
const subAns2 = document.querySelector('#answer2');
const subAns3 = document.querySelector('#answer3');
const subAns4 = document.querySelector('#answer4');
subAns1.addEventListener('click',displayQuestion);
subAns2.addEventListener('click',displayQuestion);
subAns3.addEventListener('click',displayQuestion);
subAns4.addEventListener('click',displayQuestion);

//reset all variables?

//timer starts immediately; counts down from 90

//user clicks on radio button, then submits answer
//submit answer needs to have preventDefault


//if wrong, will display wrong and user must try again
//5 seconds taken off the timer
//maybe disable radio button so they don't keep clicking on the wrong answer?
//maybe give a skip question button if they don't want to answer (nothing will be added to the score)

//if correct, will display correct for one second then move to next question

//if timer reaches 0, display enter-initials and game-over section

//if all questions are answered, display enter-initials and finished-quiz section

//enter-initials section must show total score


//Set object with initials and score total to localSession; add to it with values

//after entering initials, go to highscores page
//submit needs to have preventDefault