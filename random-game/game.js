

let playerScore = document.querySelector('.player-score');
let pcScore = document.querySelector('.pc-score');
let playerChoice = document.querySelector('.player-choice');
let pcChoice = document.querySelector('.pc-choice');
let buttons = document.querySelectorAll('.choice');
let countPlayer = 0, countPc = 0;
let player, pc;



function playPlayer(e) {
  let target = e.target;
  player = target.dataset.choice;
  console.log('player');
}

function playPC() {
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
  console.log('pc');
}

function win(e){
  playPlayer(e);
  playPC();
  console.log('win');
  if (player === pc) {
    console.log(':(');
  } else if (((player === 'rock') && (pc === 'scissors')) || ((player === 'scissors') && (pc === 'papper')) || ((player === 'papper') && (pc === 'scissors'))) {
    console.log('player winner!');
  } else {
    console.log('pc winner!')
  }

}

playerChoice.addEventListener('click', win);

console.log(countPlayer);