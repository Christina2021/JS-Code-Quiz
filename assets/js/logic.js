//Linked to index.html

// alert("We are linked");  confirmed link; remove once JS content entered

//This file will be used for the start page

//Once start quiz button is clicked on, the start-page section will display none and the questions section will display

function startQuiz() {
    document.querySelector('#start-page').classList.add('display-none')
    document.querySelector('#questions').classList.remove('display-none')
}


document.querySelector('#start').addEventListener('click',startQuiz);