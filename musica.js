const progress = document.getElementById("progress");
const song = document.getElementById("song");
const controlIcon = document.getElementById("controlIcon");
const playPauseButton = document.querySelector(".play-pause-btn");
const forwardButton = document.querySelector(".controls button.forward");
const backwardButton = document.querySelector(".controls button.backward");
const songName = document.querySelector(".music-player h1");
const artistName = document.querySelector(".music-player p");

const songs = [
  {
    title: "Crystal",
    name: "Froid",
    source:
      "https://github.com/jayazin76/musica/raw/refs/heads/main/Music/musica/Froid%20-%20Cristal%20(Ac%C3%BAstico)%20-%20Froid%20(youtube).mp3",
  },
  {
    title: "Barcelona",
    name: "L7NNON, PK, Mun Ra",
    source:
      "https://github.com/jayazin76/musica/raw/refs/heads/main/Music/musica/L7NNON,%20PK,%20Mun%20Ra%20-%20Barcelona%20%5BPapasessions%20%232%5D%20-%20Papatunes%20(youtube).mp3",
  },
  {
    title: "Poesia Acústica #2 - Sobre Nós",
    name: "Delacruz I Maria I Ducon I Luiz Lins I Diomedes I Bk' I Kayuál",
    source:
      "https://github.com/jayazin76/musica/raw/refs/heads/main/Music/musica/Poesia%20Ac%C3%BAstica%20%232%20-%20Sobre%20N%C3%B3s%20-%20Delacruz%20I%20Maria%20I%20Ducon%20I%20Luiz%20Lins%20I%20Diomedes%20I%20Bk'%20I%20Kayu%C3%A1%20-%20PineappleStormTV%20(youtube).mp3",
  },
  {
    title: "Refém",
    name: "Xamã, L7NNON, Maia, John",
    source:
      "https://github.com/jayazin76/musica/raw/refs/heads/main/Music/musica/Xam%C3%A3,%20L7NNON,%20Maia,%20John%20-%20Ref%C3%A9m%20%5BPapasessions%20%233%5D%20-%20Papatunes%20(youtube).mp3",
  },
  {
    title: "As It Was",
    name: "Harry Styles",
    source:
      "https://github.com/ecemgo/mini-samples-great-tricks/raw/main/song-list/Harry-Styles-As-It-Was.mp3",
  },

  {
    title: "Physical",
    name: "Dua Lipa",
    source:
      "https://github.com/ecemgo/mini-samples-great-tricks/raw/main/song-list/Dua-Lipa-Physical.mp3",
  },
  {
    title: "Delicate",
    name: "Taylor Swift",
    source:
      "https://github.com/ecemgo/mini-samples-great-tricks/raw/main/song-list/Taylor-Swift-Delicate.mp3",
  },
];

let currentSongIndex = 3;

function updateSongInfo() {
  songName.textContent = songs[currentSongIndex].title;
  artistName.textContent = songs[currentSongIndex].name;
  song.src = songs[currentSongIndex].source;

  song.addEventListener("loadeddata", function () {});
}

song.addEventListener("timeupdate", function () {
  if (!song.paused) {
    progress.value = song.currentTime;
  }
});

song.addEventListener("loadedmetadata", function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
});

function pauseSong() {
  song.pause();
  controlIcon.classList.remove("fa-pause");
  controlIcon.classList.add("fa-play");
}

function playSong() {
  song.play();
  controlIcon.classList.add("fa-pause");
  controlIcon.classList.remove("fa-play");
}

function playPause() {
  if (song.paused) {
    playSong();
  } else {
    pauseSong();
  }
}

playPauseButton.addEventListener("click", playPause);

progress.addEventListener("input", function () {
  song.currentTime = progress.value;
});

progress.addEventListener("change", function () {
  playSong();
});

forwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  updateSongInfo();
  playPause();
});

backwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  updateSongInfo();
  playPause();
});

updateSongInfo();

var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  centeredSlides: true,
  initialSlide: 3,
  slidesPerView: "auto",
  allowTouchMove: false,
  spaceBetween: 40,
  coverflowEffect: {
    rotate: 25,
    stretch: 0,
    depth: 50,
    modifier: 1,
    slideShadows: false,
  },
  navigation: {
    nextEl: ".forward",
    prevEl: ".backward",
  },
});

// Inspiration: https://dribbble.com/shots/5455156-Car-HMI-assistant-Album-switching
