//message text
const message = document.querySelector('#message');

//score span elements
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');

//button elements
const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');
const resetBtn = document.getElementById('resetBtn');

//array for choices
const choices = [
    "Rock",
    "Paper",
    "Scissors"
];

let running = false;

//random computer choice
function computerPlay() {
   return choices[Math.floor(Math.random() * choices.length)];
} 

//score text
let playerScoreNum = playerScore.innerText;
let computerScoreNum = computerScore.innerText;

function playGame(player, computer) {

    if (player == computer) {
          message.innerText = `It's a tie! Both played ${player}.`
    }else if (player == 'Rock' && computer == 'Scissors' ||
      player == 'Paper' && computer == 'Rock' ||
      player == 'Scissors' && computer == 'Paper') {
        message.innerText = `You won! ${player} beats ${computer}`;

        playerScoreNum++;
        playerScore.innerText = playerScoreNum;
    }else {
        message.innerText = `Computer wins! ${computer} beats ${player}.`;

        computerScoreNum++;
        computerScore.innerText = computerScoreNum;
    }
    
    //when score reaches 10 stop game and run winGame function
    if (playerScoreNum == 10) {
        message.innerText = "You win!";
        winGame();
    }else if (computerScoreNum == 10) {
        message.innerText = "Computer wins!";
        winGame();
    }
} 

//when someone wins hide the choices and show reset button
function winGame() {
    rockBtn.classList.add("hide");
    paperBtn.classList.add("hide");
    scissorsBtn.classList.add("hide");
    resetBtn.classList.remove("hide");
}

function resetGame() {
    playerScoreNum = 0;
    computerScoreNum = 0;
    playerScore.innerText = playerScoreNum;
    computerScore.innerText = computerScoreNum;

    rockBtn.classList.remove("hide");
    paperBtn.classList.remove("hide");
    scissorsBtn.classList.remove("hide");
    resetBtn.classList.add("hide");
    message.innerText = "Choose your play. First to score 10 wins the game!";
}

//asign functions to each button
rockBtn.onclick = () => playGame("Rock", computerPlay());
paperBtn.onclick = () => playGame("Paper", computerPlay());
scissorsBtn.onclick = () => playGame("Scissors", computerPlay());
resetBtn.onclick = () => resetGame();