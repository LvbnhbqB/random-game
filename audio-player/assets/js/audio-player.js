const playBtn = document.querySelector('.play-btn');
const pauseBtn = document.querySelector('.pause-btn');
const audio = new Audio();

function playAudio() {
  audio.src = '../audio-player/assets/media/Alphaville-Big _in_Japan.mp3';
  audio.currentTime = 0;
  audio.play();
}

function pauseAudio() {
  audio.pause();
}

playBtn.addEventListener('click', playAudio);
pauseBtn.addEventListener('click', pauseAudio);