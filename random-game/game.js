

let playerScore = document.querySelector('.player-score');
let pcScore = document.querySelector('.pc-score');
let playerChoice = document.querySelector('.player-choice');
let pcChoice = document.querySelector('.pc-choice');
let buttons = document.querySelectorAll('.choice');
let buttonsPcR = document.getElementById('pc-r')
let buttonsPcS = document.getElementById('pc-s')
let buttonsPcP = document.getElementById('pc-p')
let winnerText;
let countPlayer = 0, countPc = 0;
let player, pc;



function playPlayer(e) {
  let target = e.target;
  player = target.dataset.choice;
}

function playPC() {
  let randomPC=Math.floor(Math.random() * 3);
  if (randomPC === 0) {
    pc = 'rock';
    buttonsPcR.classList.add('active-pc')
    buttonsPcP.classList.remove('active-pc')
    buttonsPcS.classList.remove('active-pc')
    setTimeout(() => {
      buttonsPcR.classList.remove('active-pc')
      winnerText = document.getElementsByClassName('winner-text')[0].textContent = "Who's the winner?";
    }, 1000);
  }
  if (randomPC === 1) {
    pc = 'papper';
    buttonsPcP.classList.add('active-pc')
    buttonsPcR.classList.remove('active-pc')
    buttonsPcS.classList.remove('active-pc')
    setTimeout(() => {
      buttonsPcP.classList.remove('active-pc')
      winnerText = document.getElementsByClassName('winner-text')[0].textContent = "Who's the winner?";
    }, 1000);
  }
  if (randomPC === 2) {
    pc = 'scissors';
    buttonsPcS.classList.add('active-pc')
    buttonsPcP.classList.remove('active-pc')
    buttonsPcR.classList.remove('active-pc')

    setTimeout(() => {
      buttonsPcS.classList.remove('active-pc')
      winnerText = document.getElementsByClassName('winner-text')[0].textContent = "Who's the winner?";
    }, 1000);
  }
}

function win(e){
  playPlayer(e);
  playPC();
  if (player === pc) {
    winnerText = document.getElementsByClassName('winner-text')[0].textContent = 'GAME DRAW :(';
  } else if (((player === 'rock') && (pc === 'scissors')) || ((player === 'scissors') && (pc === 'papper')) || ((player === 'papper') && (pc === 'rock'))) {
    winnerText = document.getElementsByClassName('winner-text')[0].textContent = 'PLAYER WIN!!!';
    countPlayer++;
    document.getElementsByClassName('player-score')[0].textContent = countPlayer;
  } else {
    winnerText = document.getElementsByClassName('winner-text')[0].textContent = 'COMPUTER WIN!!!';
    countPc++;
    document.getElementsByClassName('pc-score')[0].textContent = countPc;
  }
}

playerChoice.addEventListener('click', win);