// Select elements for the third player
const musicContainer3 = document.querySelector('.music-container3');
const audio3 = musicContainer3.querySelector('.audio');
const playBtn3 = musicContainer3.querySelector('.play');
const prevBtn3 = musicContainer3.querySelector('.prev');
const nextBtn3 = musicContainer3.querySelector('.next');
const progressContainer3 = musicContainer3.querySelector('.progress-container');
const progress3 = musicContainer3.querySelector('.progress');
const title3 = musicContainer3.querySelector('.title');
const cover3 = musicContainer3.querySelector('.cover');

// Song list for the third player
const songs3 = [
  {
    title: 'Un Flow Zaza',
    artist: 'Fa Melz',
    src: 'assets/music/UnFlowZaza.mp3',
    cover: 'assets/img/UnFlowZaza.gif',
  },
  {
    title: 'Ese Tatoo',
    artist: 'Fatmelz',
    src: 'assets/music/EseTatoo.mp3',
    cover: 'assets/img/goldo.gif',
  },
  {
    title: 'Que Fue',
    artist: 'Fa melz',
    src: 'assets/music/QueFue.mp3',
    cover: 'assets/img/quefue.png',
  },
  {
    title: 'Wow',
    artist: 'Fa Melz',
    src: 'assets/music/Nory&Famels-Wow.mp3',
    cover: 'assets/img/Nory&Famelz-Wow.gif',
  },
];

// Keep track of the current song for the third player
let songIndex3 = 0;

// Load song details into the third player
function loadSong3(song) {
  title3.innerText = song.title;
  audio3.src = song.src;
  cover3.src = song.cover;
}

// Play the current song in the third player
function playSong3() {
  musicContainer3.classList.add('play');
  playBtn3.querySelector('i').classList.remove('fa-play');
  playBtn3.querySelector('i').classList.add('fa-pause');
  audio3.play();
}

// Pause the current song in the third player
function pauseSong3() {
  musicContainer3.classList.remove('play');
  playBtn3.querySelector('i').classList.remove('fa-pause');
  playBtn3.querySelector('i').classList.add('fa-play');
  audio3.pause();
}

// Update progress bar for the third player
function updateProgress3(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress3.style.width = `${progressPercent}%`;
}

// Set progress on click for the third player
function setProgress3(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio3.duration;

  audio3.currentTime = (clickX / width) * duration;
}

// Play the next song in the third player
function nextSong3() {
  songIndex3++;

  if (songIndex3 > songs3.length - 1) {
    songIndex3 = 0; // Loop back to the first song
  }

  loadSong3(songs3[songIndex3]);
  playSong3();
}

// Play the previous song in the third player
function prevSong3() {
  songIndex3--;

  if (songIndex3 < 0) {
    songIndex3 = songs3.length - 1; // Loop to the last song
  }

  loadSong3(songs3[songIndex3]);
  playSong3();
}

// Event listeners for the third player
playBtn3.addEventListener('click', () => {
  const isPlaying = musicContainer3.classList.contains('play');

  if (isPlaying) {
    pauseSong3();
  } else {
    playSong3();
  }
});

prevBtn3.addEventListener('click', prevSong3);
nextBtn3.addEventListener('click', nextSong3);

audio3.addEventListener('timeupdate', updateProgress3);
progressContainer3.addEventListener('click', setProgress3);

// Load the first song when the page loads
loadSong3(songs3[songIndex3]);