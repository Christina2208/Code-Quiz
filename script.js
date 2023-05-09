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
}
function questionTwo(){
    contStart.style.display="none";
    contOne.style.display="none";
    contTwo.style.display="block";
}
function questionThree(){
    contStart.style.display="none";
    contOne.style.display="none";
    contTwo.style.display="none";
    contThree.style.display="block";
}
function questionFour(){
    contStart.style.display="none";
    contOne.style.display="none";
    contTwo.style.display="none";
    contThree.style.display="none";
    contFour.style.display="block";
}
function questionFive(){
    contStart.style.display="none";
    contOne.style.display="none";
    contTwo.style.display="none";
    contThree.style.display="none";
    contFour.style.display="none";  
    contFive.style.display="block";
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