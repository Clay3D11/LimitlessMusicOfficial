// Select elements for the fourth player
const musicContainer4 = document.querySelector('.music-container4');
const audio4 = musicContainer4.querySelector('.audio');
const playBtn4 = musicContainer4.querySelector('.play');
const prevBtn4 = musicContainer4.querySelector('.prev');
const nextBtn4 = musicContainer4.querySelector('.next');
const progressContainer4 = musicContainer4.querySelector('.progress-container');
const progress4 = musicContainer4.querySelector('.progress');
const title4 = musicContainer4.querySelector('.title');
const cover4 = musicContainer4.querySelector('.cover');

// Song list for the fourth player
const songs4 = [
  {
    title: '1stP.Shooter',
    artist: 'Drake & Cole',
    src: 'assets/music/drake&cole-firstpersonshooter.mp3',
    cover: 'assets/img/drake.png',
  },
  {
    title: 'Like.That',
    artist: 'Kendrick.L',
    src: 'assets/music/likethat-kendrick.mp3',
    cover: 'assets/img/k.d.png',
  },
  {
    title: 'Push.Up',
    artist: 'Drake',
    src: 'assets/music/PushUp.mp3',
    cover: 'assets/img/pushup.png',
  },
  {
    title: 'euphoria',
    artist: 'Kendrick',
    src: 'assets/music/Euforia.mp3',
    cover: 'assets/img/euforia.png',
  },
  {
    title: '6:16.in.LA',
    artist: 'Kendrick',
    src: 'assets/music/616inla.mp3',
    cover: 'assets/img/kendrick.png',
  },
  {
    title: 'Family.Matters',
    artist: 'Drake',
    src: 'assets/music/Drake-familymatter.mp3',
    cover: 'assets/img/familymatters.png',
  },
  {
    title: 'Meet.The.Graham',
    artist: 'Kendrick.L',
    src: 'assets/music/meetthegraham.mp3',
    cover: 'assets/img/meetthegranhams.png',
  },
  {
    title: 'Not.Like.Us',
    artist: 'Kendrick.L',
    src: 'assets/music/NotLikeUs.mp3',
    cover: 'assets/img/NotLikeUs.png',
  },
  {
    title: 'The.Heart.Part.6',
    artist: 'Drake',
    src: 'assets/music/theheartpart6.mp3',
    cover: 'assets/img/theheartpart6.png',
  },
];

// Keep track of the current song for the fourth player
let songIndex4 = 0;

// Load song details into the fourth player
function loadSong4(song) {
  title4.innerText = song.title;
  audio4.src = song.src;
  cover4.src = song.cover;
}

// Play the current song in the fourth player
function playSong4() {
  musicContainer4.classList.add('play');
  playBtn4.querySelector('i').classList.remove('fa-play');
  playBtn4.querySelector('i').classList.add('fa-pause');
  audio4.play();
}

// Pause the current song in the fourth player
function pauseSong4() {
  musicContainer4.classList.remove('play');
  playBtn4.querySelector('i').classList.remove('fa-pause');
  playBtn4.querySelector('i').classList.add('fa-play');
  audio4.pause();
}

// Update progress bar for the fourth player
function updateProgress4(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress4.style.width = `${progressPercent}%`;
}

// Set progress on click for the fourth player
function setProgress4(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio4.duration;

  audio4.currentTime = (clickX / width) * duration;
}

// Play the next song in the fourth player
function nextSong4() {
  songIndex4++;

  if (songIndex4 > songs4.length - 1) {
    songIndex4 = 0; // Loop back to the first song
  }

  loadSong4(songs4[songIndex4]);
  playSong4();
}

// Play the previous song in the fourth player
function prevSong4() {
  songIndex4--;

  if (songIndex4 < 0) {
    songIndex4 = songs4.length - 1; // Loop to the last song
  }

  loadSong4(songs4[songIndex4]);
  playSong4();
}

// Event listeners for the fourth player
playBtn4.addEventListener('click', () => {
  const isPlaying = musicContainer4.classList.contains('play');

  if (isPlaying) {
    pauseSong4();
  } else {
    playSong4();
  }
});

prevBtn4.addEventListener('click', prevSong4);
nextBtn4.addEventListener('click', nextSong4);

audio4.addEventListener('timeupdate', updateProgress4);
progressContainer4.addEventListener('click', setProgress4);

// Load the first song when the page loads
loadSong4(songs4[songIndex4]);