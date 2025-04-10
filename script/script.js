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
    if (playerChoice === computerChoice){
        console.log("Its a tie! Both player and computer chose " + choices[playerChoice]);
        return;
    }
    let winner = 0; /* 0 = Tie, 1= Player, 2 = Computer */
    let msg = "";
    switch (playerChoice){
        /* Player chose rock */
        case 0:
            if(computerChoice===1){
                winner = 2;
                msg = choices[computerChoice]+" covers " + choices[playerChoice];
            } else {
                winner = 1;
                msg = choices[playerChoice] + " breaks " + choices[computerChoice];
            }
            break;
        case 1:
            /* Player chose paper */
            if (computerChoice === 0){
                winner = 1;
                msg = choices[playerChoice]+" covers " + choices[computerChoice];
            }else{
                winner = 2;
                msg = choices[computerChoice]+" cuts " + choices[playerChoice];
            }
            break;
        case 2:
            /* Player chose scissors */
            if (computerChoice === 0){
                winner = 2;
                msg = choices[computerChoice] + " breaks " + choices[playerChoice];
            }else{
                winner = 1;
                msg = choices[playerChoice]+" cuts " + choices[computerChoice];
            }
            break;
        default:
            alert("Logical error!!!");
            return;
    }
    if (winner === 1){
        console.log("Player Won!!\nBecause "+msg);
        playerScore++;
    }else{
        console.log("Computer Won!!\nBecause "+msg);
        computerScore++;
    }

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
    console.log("-------------------------------------------\nTOTAL ROUNDS: " + totalRounds)
    console.log("Final Score\n------------");
    console.log("User Score: " + playerScore +"\nComputer Score: " + computerScore);
    if(playerScore > computerScore){
        console.log("You Won!!!!");
    }else if(playerScore < computerScore){
        console.log("Sorry! The computer Won.");
    } else {
        console.log("It's a Tie!!!!");
    }
}
playRockPaperScissors();