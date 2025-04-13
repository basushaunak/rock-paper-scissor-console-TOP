/* javascript file for Rock-Paper-Scissors game, console based */

// const choices =["rock","paper","scissors"];
let playerChoice = -1;
let computerChoice = -1;
let playerScore = 0;
let computerScore = 0;
let roundCount = 0;
let totalRounds=0;
let roundScore = [];

const buttons = document.querySelector(".button-container");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const btnNextRound = document.querySelector("#next-round");
const btnComputer = document.querySelector("#computer");
const btnPlayAgain = document.querySelector("#play-again");
const divFinalResult = document.querySelector("#final-result");


function getRandomInteger(x, y) {
     return Math.floor(Math.random() * (y - x + 1)) + x;
}

function init(){
    playerChoice = -1;
    computerChoice = -1;
    rock.src="../images/rock-white-player.png";
    paper.src="../images/paper-white-player.png";
    scissors.src="../images/scissors-white-player.png";
    document.querySelector("#img-rock").src="../images/rock-white-computer.jpg";
    document.querySelector("#img-paper").src="../images/paper-white-computer.jpg";
    document.querySelector("#img-scissors").src="../images/scissors-white-computer.jpg";
    roundCount++;
    divFinalResult.innerText = "Round #"+roundCount;
    btnPlayAgain.disabled = "true";
    btnNextRound.disabled = "true";
}

function updateScore(){
    divFinalResult.innerText = "Round #" + roundCount + " (Computer: " + computerScore + ", Player: " + playerScore + ")";
}

function checkResult(){
    let winner = 0; /* 0 = Tie, 1= Player, 2 = Computer */
    if(playerChoice === computerChoice){
        return 0;
    }
    switch (playerChoice){
        /* Player chose rock */
        case 0:
            if(computerChoice===1){
                return 2;
            } else {
                return 1;
            }
            break;
        case 1:
            /* Player chose paper */
            if (computerChoice === 0){
                return 1;
            }else{
                return 2;
            }
            break;
        case 2:
            /* Player chose scissors */
            if (computerChoice === 0){
                return 2;
            }else{
                return 1;
            }
            break;
        default:
            return - 1;
    }
}

// function playRound(roundCount){
//     if((roundCount+1) < totalRounds){
//     console.log("playing round " + (roundCount+1)+" of " + totalRounds);
//     } else {
//         console.log("FINAL ROUND!!!!!");
//     }
//     let exitInputLoop = false;
//     let userInput = "";
//     while (!exitInputLoop){
//         userInput = prompt("Please enter rock, paper or scissors").toLowerCase();
//         if (choices.includes(userInput)){
//             exitInputLoop=true;
//         }else {
//             alert("Please enter rock, paper or scissors only!");
//         }
//     }
//     computerChoice=getRandomInteger(0,2);
//     playerChoice = choices.indexOf(userInput);
//     console.log("Computer Choice: " + computerChoice);
//     console.log("Player Choice: " + playerChoice);
// }

// function playRockPaperScissors(){
//     let userInput="";
//     let exitRoundsLoop = false;
//     while(!exitRoundsLoop){
//         userInput = prompt("How many rounds do you want to play?");
//         totalRounds = Number(userInput);
//         if(isNaN(totalRounds) || totalRounds<1){
//             alert("Please enter a valid positive number");
//             exitRoundsLoop = false;
//         } else{
//             exitRoundsLoop = true;
//         }
//     }
//     for (let i=0;i<totalRounds;i++){
//         playRound(i);
//     }
// }
// playRockPaperScissors();


// rock.addEventListener("mouseover",()=>{
//     rock.src="../images/rock-color-player.png";
// })
// rock.addEventListener("mouseout",()=>{
//     rock.src="../images/rock-white-player.png";
// })

window.onload = init();

buttons.addEventListener("mouseover",(e)=>{
    if(playerChoice === -1){
        let element = e.target.id;
        switch (element){
            case "rock":
                rock.src="../images/rock-color-player.png";
                break;
            case "paper":
                paper.src="../images/paper-color-player.png";
                break;
            case "scissors":
                scissors.src="../images/scissors-color-player.png";
                break;
            default:
                break;
        }
    }
})

buttons.addEventListener("mouseout",(e)=>{
    if(playerChoice === -1){
        let element = e.target.id;
        switch (element){
            case "rock":
                rock.src="../images/rock-white-player.png";
                break;
            case "paper":
                paper.src="../images/paper-white-player.png";
                break;
            case "scissors":
                scissors.src="../images/scissors-white-player.png";
                break;
            default:
                break;
        }
    }
})

buttons.addEventListener("click",(e)=>{
    let element = e.target.id;
    switch (element){
        case "rock":
            if(playerChoice === 0){
                playerChoice = -1;
                rock.src="../images/rock-white-player.png";
            }else {
                rock.src="../images/rock-color-player.png";
                paper.src="../images/paper-white-player.png";
                scissors.src="../images/scissors-white-player.png";
                playerChoice = 0;
            }
            break;
        case "paper":
            if(playerChoice === 1){
                playerChoice = -1;
                paper.src="../images/paper-white-player.png";
            }else {
                paper.src="../images/paper-color-player.png";
                rock.src="../images/rock-white-player.png";
                scissors.src="../images/scissors-white-player.png";
                playerChoice = 1;
            }
            break;
        case "scissors":
            if(playerChoice === 2){
                playerChoice = -1;
                scissors.src="../images/scissors-white-player.png";
            }else {
                scissors.src="../images/scissors-color-player.png";            
                rock.src="../images/rock-white-player.png";
                paper.src="../images/paper-white-player.png";
                playerChoice = 2;
            }
            break;
        default:
            break;
    }
})

btnComputer.addEventListener("click",()=>{
    if(computerChoice !== -1){
        alert("Computer has already chosen");
        return;
    } else if(playerChoice === -1){
        alert("Please make your choice first!");
        return;
    }
    computerChoice=getRandomInteger(0,2);
    switch(computerChoice){
        case 0:
            document.querySelector("#img-rock").src="../images/rock-color-computer.jpg";
            break;
        case 1:
            document.querySelector("#img-paper").src="../images/paper-color-computer.jpg";
            break;
        case 2:
            document.querySelector("#img-scissors").src="../images/scissors-color-computer.jpg";
            break;
        default:
            break;
    }

})

btnNextRound.addEventListener("click",()=>{
    init();

})
