const audio = document.getElementById("audio");
const playBtn = document.getElementById("play-btn");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const trackTitle = document.getElementById("track-title");
const artistName = document.getElementById("artist-name");
const progress = document.getElementById("progress");
const volumeSlider = document.getElementById("volume");

const tracks = [
  {
    title: "Let Me Down Slowly",
    artist: "Alec Benjamin",
    src: "Audio/Let Me Down Slowly X Jiske Aane Se Mukammal.mp3"
  },
  {
    title: "Calm Down (Instrumental)",
    artist: "Rema & Selena Gomez",
    src: "Audio/Calm Down Ringtone Instrumental Download.mp3"
  },
  {
    title: "You and I",
    artist: "One Direction",
    src: "Audio/You And I.mp3"
  }
];

let currentTrackIndex = 0;
let isPlaying = false;

function loadTrack(index) {
  const track = tracks[index];
  trackTitle.textContent = track.title;
  artistName.textContent = track.artist;
  audio.src = track.src;
}

function playPauseTrack() {
  if (isPlaying) {
    audio.pause();
    playBtn.textContent = "▶️";
  } else {
    audio.play();
    playBtn.textContent = "⏸️";
  }
  isPlaying = !isPlaying;
}

function nextTrack() {
  currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
  loadTrack(currentTrackIndex);
  audio.play();
  isPlaying = true;
  playBtn.textContent = "⏸️";
}

function prevTrack() {
  currentTrackIndex =
    (currentTrackIndex - 1 + tracks.length) % tracks.length;
  loadTrack(currentTrackIndex);
  audio.play();
  isPlaying = true;
  playBtn.textContent = "⏸️";
}

function updateProgress() {
  if (audio.duration) {
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    progress.value = progressPercent;
  }
}

function setProgress() {
  audio.currentTime = (progress.value / 100) * audio.duration;
}

audio.volume = volumeSlider.value;
volumeSlider.addEventListener("input", () => {
  audio.volume = volumeSlider.value;
});

playBtn.addEventListener("click", playPauseTrack);
prevBtn.addEventListener("click", prevTrack);
nextBtn.addEventListener("click", nextTrack);
audio.addEventListener("timeupdate", updateProgress);
progress.addEventListener("input", setProgress);
loadTrack(currentTrackIndex);
