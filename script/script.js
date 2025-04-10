/* javascript file for Rock-Paper-Scissors game, console based */

const choices =["rock","paper","scissors"];
let playerChoice = -1;
let computerChoice = -1;
let playerScore = 0;
let computerScore = 0;
let totalRounds=0;

function getRandomInteger(x, y) {
    return Math.floor(Math.random() * (y - x + 1)) + x;
}

function playRound(roundCount){
    if((roundCount+1) < totalRounds){
    console.log("playing round " + (roundCount+1)+" of " + totalRounds);
    } else {
        console.log("FINAL ROUND!!!!!");
    }
    let exitInputLoop = false;
    let userInput = "";
    while (!exitInputLoop){
        userInput = prompt("Please enter rock, paper or scissors").toLowerCase();
        if (choices.includes(userInput)){
            exitInputLoop=true;
        }else {
            alert("Please enter rock, paper or scissors only!");
        }
    }
    computerChoice=getRandomInteger(0,2);
    playerChoice = choices.indexOf(userInput);
    console.log("Computer Choice: " + computerChoice);
    console.log("Player Choice: " + playerChoice);
}

function playRockPaperScissors(){
    let userInput="";
    let exitRoundsLoop = false;
    while(!exitRoundsLoop){
        userInput = prompt("How many rounds do you want to play?");
        totalRounds = Number(userInput);
        if(isNaN(totalRounds) || totalRounds<1){
            alert("Please enter a valid positive number");
            exitRoundsLoop = false;
        } else{
            exitRoundsLoop = true;
        }
    }
    for (let i=0;i<totalRounds;i++){
        playRound(i);
    }
}
playRockPaperScissors();