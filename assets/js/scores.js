//Linked to highscores.html

//This file will be used for the scores

//Define variables
let user;
let scoreBoardScores = [];
let scoreLi;
let remLis;
let remAllLi;
let confirmRem;

//Displays the scores saved in localStorage
function displayScores() {
    //get objects (initials and scores) from localSession and parse 
    user = JSON.parse(localStorage.getItem("currentScoreBoard"));
    if(!user){
        return;
    };
    //Sort based on user's score
    user.sort((a,b) => b.score - a.score);
    //create li elements for each object to show on scoreboard
    for(i = 0; i < user.length; i++){
        scoreLi = document.createElement('li');
        //Top score added to number 1 spot
        if(i === 0) {
            scoreLi.innerText = `${user[i].name} ------ ${user[i].score} *!TOP SCORE!*`;
        } else {
            scoreLi.innerText = `${user[i].name} ------ ${user[i].score}`;
        };
        //add to ordered list
        document.querySelector('#all-scores').appendChild(scoreLi);
    };
};

//Runs when page opens
displayScores();


//button to clear highscores and localSession
document.querySelector('#clear-scores').addEventListener('click',function(e){
    e.preventDefault();
    //removes list items (if applicable)
    remLis = document.querySelector('#all-scores');
    if(remLis.firstElementChild) {
        //makes sure to confirm before deleting the score board
        confirmRem = confirm("Are you sure that you want to clear the scoreboard?");
        if(confirmRem){
                while (remLis.firstElementChild){
                    remLis.removeChild(remLis.firstElementChild);
                }
            localStorage.clear();
            alert("The scoreboard has been cleared.")
        } else {
            //Let's them know the scoreboard will not be cleared
            alert("The scoreboard will not be cleared.");
        }
    } else {
        alert("There currently aren't any scores on the scoreboard.");
    };
});

