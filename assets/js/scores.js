//Linked to highscores.html

//alert("We are also linked");  confirmed link; remove once JS content entered

//This file will be used for the scores

let user;
let scoreBoardScores = [];
var scoreLi;

function displayScores() {

    user = JSON.parse(localStorage.getItem("currentScoreBoard"));
    user.sort((a,b) => b.score - a.score);
    console.log(user);
        for(i = 0; i < user.length; i++){
            scoreLi = document.createElement('li');
            if(i === 0) {
                scoreLi.innerText = `${user[i].name} ------ ${user[i].score} *!TOP SCORE!*`;
            } else {
                scoreLi.innerText = `${user[i].name} ------ ${user[i].score}`;
            }
            document.querySelector('#all-scores').appendChild(scoreLi);
        }


}

//Needs to run once page opens
displayScores();



//get objects (initials and scores) from localSession

//create li elements for each object

//show as list

//button to clear highscores and localSession
document.querySelector('#clear-scores').addEventListener('click',function(e){
    e.preventDefault();
    console.log("does this work");
    //localStorage.clear()
});



//
