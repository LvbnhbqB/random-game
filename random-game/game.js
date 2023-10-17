

let playerScore = document.querySelector('.player-score');
let pcScore = document.querySelector('.pc-score');
let playerChoice = document.querySelector('.player-choice');
let pcChoice = document.querySelector('.pc-choice');
let buttons = document.querySelectorAll('.choice');
let buttonsPcR = document.getElementById('pc-r');
let buttonsPcS = document.getElementById('pc-s');
let buttonsPcP = document.getElementById('pc-p');
let winnerImagePlayer = document.getElementById('avatar-player-win');
let winnerImagePc = document.getElementById('avatar-pc-win');
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
  const audio = new Audio();
  playPlayer(e);
  playPC();
  if (player === pc) {
    winnerText = document.getElementsByClassName('winner-text')[0].textContent = 'GAME DRAW :(';
    winnerImagePlayer.classList.remove('win-active')
    winnerImagePc.classList.remove('win-active')
    audio.src = './assets/media/oops.mp3'
    audio.currentTime = 0;
    audio.play();
  } else if (((player === 'rock') && (pc === 'scissors')) || ((player === 'scissors') && (pc === 'papper')) || ((player === 'papper') && (pc === 'rock'))) {
    winnerText = document.getElementsByClassName('winner-text')[0].textContent = 'PLAYER WIN!!!';
    winnerImagePlayer.classList.add('win-active')
    winnerImagePc.classList.remove('win-active')
    countPlayer++;
    document.getElementsByClassName('player-score')[0].textContent = countPlayer;
    audio.src = './assets/media/win.mp3'
    audio.currentTime = 0;
    audio.play();
    setTimeout(() => {
      winnerImagePlayer.classList.remove('win-active')
    }, 1000);
  } else {
    winnerText = document.getElementsByClassName('winner-text')[0].textContent = 'COMPUTER WIN!!!';
    winnerImagePlayer.classList.remove('win-active')
    winnerImagePc.classList.add('win-active')
    countPc++;
    document.getElementsByClassName('pc-score')[0].textContent = countPc;
    audio.src = './assets/media/loser.mp3'
    audio.currentTime = 0;
    audio.play();
    setTimeout(() => {
      winnerImagePc.classList.remove('win-active')
    }, 1000);
  }
}

playerChoice.addEventListener('click', win);