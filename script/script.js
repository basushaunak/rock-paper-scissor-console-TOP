/* javascript file for Rock-Paper-Scissors game for The Odin Project */

const choices =["Rock","Paper","Scissors"];
let playerChoice = -1;
let computerChoice = -1;
let playerScore = 0;
let computerScore = 0;
let roundCount = 0;
let totalRounds=0;
// let roundScore = [];
let gameOver = false;

const buttons = document.querySelector(".button-container");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const btnNextRound = document.querySelector("#next-round");
const btnComputer = document.querySelector("#computer");
const btnPlayAgain = document.querySelector("#play-again");
const divRoundResults = document.querySelector("#round-result");
const divFinalResult = document.querySelector("#final-result");

function getRandomInteger(x, y) {
     return Math.floor(Math.random() * (y - x + 1)) + x;
}

function initGame(){
    playerChoice = -1;
    computerChoice = -1;
    playerScore = 0;
    computerScore = 0;
    roundCount = 0;
    totalRounds=0;
    // let roundScore = [];
    gameOver = false;
    divFinalResult.innerHTML ="";
    divRoundResults.innerHTML = "";
}
function initRound(){
    playerChoice = -1;
    computerChoice = -1;
    rock.src="./images/rock-white-player.png";
    paper.src="./images/paper-white-player.png";
    scissors.src="./images/scissors-white-player.png";
    document.querySelector("#img-rock").src="./images/rock-white-computer.jpg";
    document.querySelector("#img-paper").src="./images/paper-white-computer.jpg";
    document.querySelector("#img-scissors").src="./images/scissors-white-computer.jpg";
    roundCount++;
    btnPlayAgain.style.opacity = "0";
    btnNextRound.style.opacity = "0";
    btnComputer.style.opacity = "0"
}

function showResult(winnerId){
    let htmlResult = divRoundResults.innerHTML;
    switch (winnerId){
        case 0:
            htmlResult += `<p>Its a Tie!</p>`;
            break;
        case 1:
            htmlResult += `<p style="color:green">😎 won, `+ choices[playerChoice] + ` beat ` + choices[computerChoice] + `</p>`;
            break;
        case 2:
            htmlResult += `<p style="color:red">🖳 won, `+ choices[computerChoice] + ` beat ` + choices[playerChoice] + `</p>`;
            break;
        default:
            break;
    }
    divRoundResults.innerHTML = htmlResult;
    if(computerScore === 5 || playerScore === 5){
        divFinalResult.innerText = "Game Over!Computer: " + computerScore + ", Player: " + playerScore;
        gameOver = true;
    } else {
        divFinalResult.innerText = "Round #" + roundCount + " (Computer: " + computerScore + ", Player: " + playerScore + ")";
    }

}

function getResult(){
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

window.onload = ()=>{
    initGame();
    initRound();
    divFinalResult.innerText = "Round #"+roundCount;
};

buttons.addEventListener("mouseover",(e)=>{
    if(playerChoice === -1){
        let element = e.target.id;
        switch (element){
            case "rock":
                rock.src="./images/rock-color-player.png";
                break;
            case "paper":
                paper.src="./images/paper-color-player.png";
                break;
            case "scissors":
                scissors.src="./images/scissors-color-player.png";
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
                rock.src="./images/rock-white-player.png";
                break;
            case "paper":
                paper.src="./images/paper-white-player.png";
                break;
            case "scissors":
                scissors.src="./images/scissors-white-player.png";
                break;
            default:
                break;
        }
    }
})

buttons.addEventListener("click",(e)=>{
    if (playerChoice === -2){
        return;
    }
    let element = e.target.id;
    switch (element){
        case "rock":
            if(playerChoice === 0){
                playerChoice = -1;
                rock.src="./images/rock-white-player.png";
                btnComputer.style.opacity = "0";
            }else {
                rock.src="./images/rock-color-player.png";
                paper.src="./images/paper-white-player.png";
                scissors.src="./images/scissors-white-player.png";
                playerChoice = 0;
                btnComputer.style.opacity = "100";
            }
            break;
        case "paper":
            if(playerChoice === 1){
                playerChoice = -1;
                paper.src="./images/paper-white-player.png";
                btnComputer.style.opacity = "0";
            }else {
                paper.src="./images/paper-color-player.png";
                rock.src="./images/rock-white-player.png";
                scissors.src="./images/scissors-white-player.png";
                playerChoice = 1;
                btnComputer.style.opacity = "100";
            }
            break;
        case "scissors":
            if(playerChoice === 2){
                playerChoice = -1;
                scissors.src="./images/scissors-white-player.png";
                btnComputer.style.opacity = "0";
            }else {
                scissors.src="./images/scissors-color-player.png";            
                rock.src="./images/rock-white-player.png";
                paper.src="./images/paper-white-player.png";
                playerChoice = 2;
                btnComputer.style.opacity = "100";
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
            document.querySelector("#img-rock").src="./images/rock-color-computer.jpg";
            break;
        case 1:
            document.querySelector("#img-paper").src="./images/paper-color-computer.jpg";
            break;
        case 2:
            document.querySelector("#img-scissors").src="./images/scissors-color-computer.jpg";
            break;
        default:
            break;
    }
    let winner = getResult();
    if (winner === 1){
        playerScore++;
    } else if (winner ===2){
        computerScore++;
    }
    showResult(winner);
    if (!gameOver){
        btnNextRound.style.opacity = "100";
        btnComputer.style.opacity = "0";
        playerChoice = -2;
        computerChoice = -1;
    } else{
        playerChoice = -2;
        computerChoice = -2;
        btnPlayAgain.style.opacity="100";
        btnNextRound.style.opacity = "0";
        btnComputer.style.opacity = "0";
    }
})

btnNextRound.addEventListener("click",()=>{
    initRound();
})

btnPlayAgain.addEventListener("click",()=>{
    initGame();
    initRound();
})
