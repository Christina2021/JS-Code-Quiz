//Linked to highscores.html

//alert("We are also linked");  confirmed link; remove once JS content entered

//This file will be used for the scores

let user;
let scoreBoardScores = [];
var scoreLi;
var remLis;
var remAllLi;
var confirmRem;

function displayScores() {
    //get objects (initials and scores) from localSession
    user = JSON.parse(localStorage.getItem("currentScoreBoard"));
    if(!user){
        return;
    };
    user.sort((a,b) => b.score - a.score);
    console.log(user);
    //create li elements for each object
    for(i = 0; i < user.length; i++){
        scoreLi = document.createElement('li');
        if(i === 0) {
            scoreLi.innerText = `${user[i].name} ------ ${user[i].score} *!TOP SCORE!*`;
        } else {
            scoreLi.innerText = `${user[i].name} ------ ${user[i].score}`;
        }
        //show as list
        document.querySelector('#all-scores').appendChild(scoreLi);
    }
}

//Needs to run once page opens

displayScores();




//button to clear highscores and localSession
document.querySelector('#clear-scores').addEventListener('click',function(e){
    e.preventDefault();
    remLis = document.querySelector('#all-scores');
    if(remLis.firstElementChild) {
        confirmRem = confirm("Are you sure that you want to clear the scoreboard?");
        if(confirmRem){
            console.log("does this work");
                while (remLis.firstElementChild){
                    remLis.removeChild(remLis.firstElementChild);
                }
            localStorage.clear();
        } else {
            alert("The scoreboard will not be cleared.")
        }
    } else {
        alert("There currently aren't any scores on the scoreboard.")
    };
});



//
