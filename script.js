let startButton = document.querySelector(".startBtn");
let contStart = document.querySelector(".containerStart");
let contOne = document.querySelector(".containerOne");
let contTwo = document.querySelector(".containerTwo");
let contThree = document.querySelector(".containerThree");
let contFour = document.querySelector(".containerFour");
let contFive = document.querySelector(".containerFive");
let contScore = document.querySelector(".containerScore");
let contLast = document.querySelector(".containerLast");
let correct = document.querySelectorAll(".correct");
let incorrect = document.querySelectorAll(".incorrect");
let problemOne = document.querySelectorAll(".questionOne");
let problemTwo = document.querySelectorAll(".questionTwo");
let problemThree = document.querySelectorAll(".questionThree");
let problemFour = document.querySelectorAll(".questionFour");
let problemFive = document.querySelectorAll(".questionFive");
let scoreboard = document.querySelector(".scoreboard");

startButton.addEventListener("click", startQuiz);

function startQuiz() {
    contOne.style.display="block"; 
    contStart.style.display="none";

    correctAnswer()
}

function correctAnswer() {
incorrect.forEach(incorrect=> {
    incorrect.addEventListener("click", ()=>
        incorrect.style.backgroundColor="red");
    })
correct.forEach(correct=> {
    correct.addEventListener("click", ()=>
        correct.style.backgroundColor="green");
})
    //move to next question
problemOne.forEach(problemOne=>{
    problemOne.addEventListener("click", function(){setTimeout(questionTwo, 1000);})
})
}

function questionTwo(){
    contStart.style.display="none";
    contOne.style.display="none";
    contTwo.style.display="block";
//move to next question
problemTwo.forEach(problemTwo=>{
    problemTwo.addEventListener("click", function(){setTimeout(questionThree, 1000);})
})
}

function questionThree(){
    contStart.style.display="none";
    contOne.style.display="none";
    contTwo.style.display="none";
    contThree.style.display="block";
//move to next question
problemThree.forEach(problemThree=>{
    problemThree.addEventListener("click", function(){setTimeout(questionFour, 1000);})
})
}

function questionFour(){
    contStart.style.display="none";
    contOne.style.display="none";
    contTwo.style.display="none";
    contThree.style.display="none";
    contFour.style.display="block";
//move to next question
problemFour.forEach(problemFour=>{
    problemFour.addEventListener("click", function(){setTimeout(questionFive, 1000);})
})
}

function questionFive(){
    contStart.style.display="none";
    contOne.style.display="none";
    contTwo.style.display="none";
    contThree.style.display="none";
    contFour.style.display="none";  
    contFive.style.display="block";
//move to scoreboard
problemFive.forEach(problemFive=>{
    problemFive.addEventListener("click", function(){setTimeout(score, 1000)})
})
}

function score(){
    contStart.style.display="none";
    contOne.style.display="none";
    contTwo.style.display="none";
    contThree.style.display="none";
    contFour.style.display="none";
    contFive.style.display="none";  
    contScore.style.display="block";
}

function last(){
    contStart.style.display="none";
    contOne.style.display="none";
    contTwo.style.display="none";
    contThree.style.display="none";
    contFour.style.display="none";
    contFive.style.display="none";  
    contScore.style.display="none";
    contLast.style.display="block";
}