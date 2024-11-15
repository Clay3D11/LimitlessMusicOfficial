var audio = document.getElementById("audio");
var playlist = document.getElementById("playlist");
var tracks = playlist.getElementsByTagName("a");
var current = -1;

function playTrack(index) {
  if (index > -1 && index < tracks.length) {
    current = index; // update current track index
    audio.src = tracks[current].href; // update audio source
    audio.play(); // play audio
    for (var i = 0; i < tracks.length; i++) {
      // remove active class from all links
      tracks[i].classList.remove("active");
    }
    tracks[current].classList.add("active"); // add active class to current link
  }
}

function playNext() {
  // play next track if exists, otherwise loop to first track
  playTrack((current + 1) % tracks.length);
}

function playPrev() {
  // play previous track if exists, otherwise loop to last track
  playTrack((current - 1 + tracks.length) % tracks.length);
}

// add event listeners to buttons and links

document.getElementById("play").addEventListener("click", function () {
  if (audio.paused) {
    // if audio is paused, resume playing
    audio.play();
    document.getElementById("play").innerHTML = "Pause";
  } else {
    // if audio is playing, pause it
    audio.pause();
    document.getElementById("play").innerHTML = "Play";
  }
});

document.getElementById("next").addEventListener("click", function () {
  playNext();
});

document.getElementById("prev").addEventListener("click", function () {
  playPrev();
});

for (var i = 0; i < tracks.length; i++) {
  // add click event to each link in playlist
  tracks[i].addEventListener("click", function (e) {
    e.preventDefault(); // prevent default action of link
    var index = Array.prototype.indexOf.call(tracks, this); // get index of clicked link
    playTrack(index); // play track at that index
  });
}

// start playing first track when page loads

playNext();

// get the progress bar element

var progress = document.getElementById("progress");

// update the progress bar value when time updates

audio.addEventListener("timeupdate", function () {
  var value = (audio.currentTime / audio.duration) * 100; // calculate the percentage of played time
  progress.value = value; // update the progress bar value
});

// seek through the track when progress bar changes

progress.addEventListener("change", function () {
  var value = progress.value; // get the new value of the progress bar
  var time = (value / 100) * audio.duration; // calculate the corresponding time in seconds
  audio.currentTime = time; // set the audio current time to that time
});
// a function to convert seconds to hh:mm:ss format

function formatTime(seconds) {
  var hours = Math.floor(seconds / 3600); // get hours
  var minutes = Math.floor((seconds % 3600) / 60); // get minutes
  var seconds = Math.floor(seconds % 60); // get seconds
  return (
    hours.toString().padStart(2, "0") +
    ":" +
    minutes.toString().padStart(2, "0") +
    ":" +
    seconds.toString().padStart(2, "0")
  ); // return formatted string
}

// get the span elements for displaying time

var currentTime = document.getElementById("current-time");
var duration = document.getElementById("duration");

// update the time display when metadata is loaded

audio.addEventListener("loadedmetadata", function () {
  duration.textContent = formatTime(audio.duration); // display the duration of audio
});

// update the time display when time updates

audio.addEventListener("timeupdate", function () {
  currentTime.textContent = formatTime(audio.currentTime); // display the current time of audio
});
