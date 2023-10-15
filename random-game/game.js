

let playerScore = document.querySelector('.player-score');
let pcScore = document.querySelector('.pc-score');
let playerChoice = document.querySelector('.player-choice');
let pcChoice = document.querySelector('.pc-choice');
let buttons = document.querySelectorAll('.choice');
let countPlayer = 0, countPc = 0;



function playPlayer(e) {
console.log('eee');
  let target = e.target;
  let player;
  player = target.dataset.choice;
  console.log(player);
  console.log(target);
}

function playPC() {

}

function win(){

}

playerChoice.addEventListener('click', playPlayer);

console.log(countPlayer);