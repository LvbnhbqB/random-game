const player = document.querySelector('.player-wrapper')
const cover = document.querySelector('.cover');
const audio = document.querySelector('.audio');
const preview = document.querySelector('.preview');
const title = document.querySelector('.player-title');
const playPause = document.getElementById('play-pause');
const playBtn = document.querySelector('.play');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const progressWrap = document.querySelector('.progress-wrapper');
const progress = document.querySelector('.progress');


const trackList = ['Alphaville - Big in Japan', 'Europe - The Final Countdown'];
let trackIndex = 1;

function loadTrack(track) {
  title.textContent = `${track}`
  audio.src = `assets/media/${track}.mp3`
  cover.src = `assets/cover/cover${trackIndex + 1}.jpg`
  preview.src = `assets/cover/cover${trackIndex + 1}.jpg`
}

loadTrack(trackList[trackIndex])

function playTrack() {
  player.classList.add('activePlay')
  audio.play()
  playPause.src = `assets/icon/icons8-pause-button-64.svg`
}

function pauseTrack() {
  player.classList.remove('activePlay')
  audio.pause()
  playPause.src = `assets/icon/icons8-circled-play-64.svg`
}

playBtn.addEventListener('click', () => {
  const isPlay = player.classList.contains('activePlay')
 console.log(isPlay)
  if (isPlay) {
    pauseTrack()
  } else {
   playTrack()
  }
})

function nextTrack() {
  trackIndex ++
  if (trackIndex > trackList.length - 1) {
    trackIndex = 0
  }

  loadTrack(trackList[trackIndex])
  playTrack()
}

function prevTrack() {
  trackIndex --
  if (trackIndex < 0) {
    trackIndex = trackList.length - 1
  }

  loadTrack(trackList[trackIndex])
  playTrack()
}

prevBtn.addEventListener('click', prevTrack)
nextBtn.addEventListener('click', nextTrack)

