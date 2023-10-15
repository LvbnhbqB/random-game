

let playerScore = document.querySelector('.player-score');
let pcScore = document.querySelector('.pc-score');
let playerChoice = document.querySelector('.player-choice');
let pcChoice = document.querySelector('.pc-choice');
let buttons = document.querySelectorAll('.choice');
let countPlayer = 0, countPc = 0;



function playPlayer(e) {
  playPC();
  let target = e.target;
  let player;
  player = target.dataset.choice;
}

function playPC() {
  let pc;
  let randomPC=Math.floor(Math.random() * 3);
  if (randomPC === 0) {
    pc = 'rock';
  }
  if (randomPC === 1) {
    pc = 'papper';
  }
  if (randomPC === 2) {
    pc = 'scissors';
  }
}

function win(){

}

playerChoice.addEventListener('click', playPlayer);

console.log(countPlayer);