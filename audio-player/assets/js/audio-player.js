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
const durationTitle = document.querySelector('.duration')
const currentTimeTitle = document.querySelector('.currentTime')

const trackList = ['Alphaville - Big in Japan', 'Europe - The Final Countdown'];
const trackTime = ['3:52', '3:59'];
let trackIndex = 0;

function loadTrack(track) {
  title.textContent = `${track}`
  audio.src = `assets/media/${track}.mp3`
  cover.src = `assets/cover/cover${trackIndex + 1}.jpg`
  preview.src = `assets/cover/cover${trackIndex + 1}.jpg`
  durationTitle.classList.remove('play_on');
  currentTimeTitle.classList.remove('play_on');
  durationTitle.classList.add('play_off');
  currentTimeTitle.classList.add('play_off');
}

loadTrack(trackList[trackIndex])

function playTrack() {
  player.classList.add('activePlay')
  audio.play()
  playPause.src = `./assets/icon/icons8-pause-50.svg`
  durationTitle.classList.add('play_on');
  currentTimeTitle.classList.add('play_on');
  durationTitle.classList.remove('play_off');
  currentTimeTitle.classList.remove('play_off');
}

function pauseTrack() {
  player.classList.remove('activePlay')
  audio.pause()
  playPause.src = `./assets/icon/icons8-play-50.svg`
  durationTitle.classList.add('play_on');
  currentTimeTitle.classList.add('play_on');
}

playBtn.addEventListener('click', () => {
  const isPlay = player.classList.contains('activePlay')
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
  durationTitle.classList.add('play_off');
  currentTimeTitle.classList.add('play_off');
  loadTrack(trackList[trackIndex])
  playTrack()
}

function prevTrack() {
  trackIndex --
  if (trackIndex < 0) {
    trackIndex = trackList.length - 1
  }
  durationTitle.classList.add('play_off');
  currentTimeTitle.classList.add('play_off');
  loadTrack(trackList[trackIndex])
  playTrack()
}

function audioTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time - (minutes * 60));
  if (seconds < 10) {
    return `${minutes}:0${seconds}`
  } else {
    return `${minutes}:${seconds}`
  }
}

prevBtn.addEventListener('click', prevTrack)
nextBtn.addEventListener('click', nextTrack)

function progressTrack(e){
  const duration = audio.duration
  const currentTime = audio.currentTime
  const progressPercent = (currentTime / duration) * 100
  progress.style.width = `${progressPercent}%`
  currentTimeTitle.textContent = audioTime(audio.currentTime)
  durationTitle.textContent = audioTime(audio.duration)
}

function rewindTrack(e) {
  const width = this.clientWidth
  const clickX = e.offsetX
  const duration = audio.duration
  audio.currentTime = (clickX / width) * duration
  playTrack()
}

audio.addEventListener('timeupdate', progressTrack)
progressWrap.addEventListener('click', rewindTrack)
audio.addEventListener('ended', nextTrack)

