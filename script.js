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
let clearTime = document.querySelectorAll(".questionFive");
let scoreboard = document.querySelector(".scoreboard");
let sec = 75;
let timer;
let submitBtn = document.querySelector("#submitBtn");
let init = document.querySelector("#initials");
let showOutput = document.querySelector("#showOutput");
let clearScore = document.querySelector("#clearScore");
let highScore = document.querySelector("#highScore");


startButton.addEventListener("click", startQuiz);
startButton.addEventListener("click", scoreTimer);

function startGame(){
    contStart.style.display="block";
    contLast.style.display="none";
    highScore.innerHTML=init.value+" "+sec;
    if (sec < 75){
        sec = 75
    };
}
function startGame1(){
    contStart.style.display="block";
    contLast.style.display="none";
    highScore.innerHTML="";
    if (sec < 75){
        sec = 75
    };
}

function startQuiz() {
    contOne.style.display="block"; 
    contStart.style.display="none";

    correctAnswer()
}

// timer function
function scoreTimer(){

    function startTimer(){
    timer=setInterval(function(){
        document.querySelector("#timer").innerHTML=sec;
        sec--;
        if (sec === 0){
            clearInterval(timer);
            document.querySelector("#timer").innerHTML=sec+" out of time"
        }
    },1000)
    }
    //incorrect answer decreases time by 10 seconds
    incorrect.forEach(incorrect=>{
    incorrect.addEventListener("click", ()=>{
        sec-=10;
        document.querySelector("#timer").innerHTML=sec;
    })
    })
    //stops timer after questions are done
    clearTime.forEach(clearTime=>{
    clearTime.addEventListener("click", ()=>{clearInterval(timer)})
    })
    startTimer();
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
    submitBtn.addEventListener("click", last);

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
    showOutput.innerHTML=init.value+" "+sec;
    document.querySelector("#goBack").addEventListener("click", startGame)
    clearScore.addEventListener("click", ()=>{
        showOutput.innerHTML=""
    });
    clearScore.addEventListener("click", startGame1);
}