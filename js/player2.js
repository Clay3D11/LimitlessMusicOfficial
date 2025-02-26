// Select elements for the second player
const musicContainer2 = document.querySelector('.music-container2');
const audio2 = musicContainer2.querySelector('.audio');
const playBtn2 = musicContainer2.querySelector('.play');
const prevBtn2 = musicContainer2.querySelector('.prev');
const nextBtn2 = musicContainer2.querySelector('.next');
const progressContainer2 = musicContainer2.querySelector('.progress-container');
const progress2 = musicContainer2.querySelector('.progress');
const title2 = musicContainer2.querySelector('.title');
const cover2 = musicContainer2.querySelector('.cover');

// Song list for the second player
const songs2 = [
  {
    title: 'El Remix de los Remix',
    artist: 'Artist 1',
    src: 'assets/music/Lapiz1.mp3',
    cover: 'assets/images/Lapiz1.png',
  },
  {
    title: 'Forrao de To',
    artist: 'Artist 2',
    src: 'assets/music/Lapiz-forraodeto.mp3',
    cover: 'assets/images/Lapiz2.png',
  },
  {
    title: '4 Minutos',
    artist: 'Artist 3',
    src: 'assets/music/Lapiz-4minutos.mp3',
    cover: 'assets/images/Lapiz3.png',
  },
  {
    title: 'No me hables de eso',
    artist: 'Artist 4',
    src: 'assets/music/Lapiz-nomehabledeeso.mp3',
    cover: 'assets/images/Lapiz3.png',
  },
];

// Keep track of the current song for the second player
let songIndex2 = 0;

// Load song details into the second player
function loadSong2(song) {
  title2.innerText = song.title;
  audio2.src = song.src;
  cover2.src = song.cover;
}

// Play the current song in the second player
function playSong2() {
  musicContainer2.classList.add('play');
  playBtn2.querySelector('i').classList.remove('fa-play');
  playBtn2.querySelector('i').classList.add('fa-pause');
  audio2.play();
}

// Pause the current song in the second player
function pauseSong2() {
  musicContainer2.classList.remove('play');
  playBtn2.querySelector('i').classList.remove('fa-pause');
  playBtn2.querySelector('i').classList.add('fa-play');
  audio2.pause();
}

// Update progress bar for the second player
function updateProgress2(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress2.style.width = `${progressPercent}%`;
}

// Set progress on click for the second player
function setProgress2(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio2.duration;

  audio2.currentTime = (clickX / width) * duration;
}

// Play the next song in the second player
function nextSong2() {
  songIndex2++;

  if (songIndex2 > songs2.length - 1) {
    songIndex2 = 0; // Loop back to the first song
  }

  loadSong2(songs2[songIndex2]);
  playSong2();
}

// Play the previous song in the second player
function prevSong2() {
  songIndex2--;

  if (songIndex2 < 0) {
    songIndex2 = songs2.length - 1; // Loop to the last song
  }

  loadSong2(songs2[songIndex2]);
  playSong2();
}

// Event listeners for the second player
playBtn2.addEventListener('click', () => {
  const isPlaying = musicContainer2.classList.contains('play');

  if (isPlaying) {
    pauseSong2();
  } else {
    playSong2();
  }
});

prevBtn2.addEventListener('click', prevSong2);
nextBtn2.addEventListener('click', nextSong2);

audio2.addEventListener('timeupdate', updateProgress2);
progressContainer2.addEventListener('click', setProgress2);

// Load the first song when the page loads
loadSong2(songs2[songIndex2]);