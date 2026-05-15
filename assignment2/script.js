const myMusic = document.querySelector("#myMusic");

//--------------------------------------------------------------------------------------------------------------
//playlist functionality

const playlist = [
  {
    id: 1,
    src: "https://file.garden/aGJwdAK8lRt7Ht-6/Assignment2/y%20u%20so%20fake.wav",
    name: "y u so fake",
  },
  {
    id: 2,
    src: "https://file.garden/aGJwdAK8lRt7Ht-6/Assignment2/tense.wav",
    name: "tense",
  },
  {
    id: 3,
    src: "https://file.garden/aGJwdAK8lRt7Ht-6/Assignment2/selamat%20pagi.wav",
    name: "selamat pagi",
  },
  {
    id: 4,
    src: "https://file.garden/aGJwdAK8lRt7Ht-6/Assignment2/DurryHouse.wav",
    name: "durryHouse",
  },
  {
    id: 5,
    src: "https://file.garden/aGJwdAK8lRt7Ht-6/Assignment2/Fentship.wav",
    name: "fentship",
  },
  {
    id: 6,
    src: "https://file.garden/aGJwdAK8lRt7Ht-6/Assignment2/Rather%20KMS.wav",
    name: "rather KMS",
  },
];

const msg = document.querySelector("#msg");
function chooseMusic(id) {
  //retrieve the song that is currently playing
  console.log(playlist[id].src);
  //changes the name of the track that is playing
  msg.textContent = playlist[id].name;
  myMusic.src = playlist[id].src;
  myMusic.load();
  myMusic.play();
}

//changing between the songs using the text
const music1Button = document.querySelector("#music1-button");
console.log(music1Button);

music1Button.addEventListener("click", function () {
  chooseMusic(0);
});

const music2Button = document.querySelector("#music2-button");
console.log(music2Button);

music2Button.addEventListener("click", function () {
  chooseMusic(1);
});

const music3Button = document.querySelector("#music3-button");
console.log(music3Button);

music3Button.addEventListener("click", function () {
  chooseMusic(2);
});

const music4Button = document.querySelector("#music4-button");
console.log(music4Button);

music4Button.addEventListener("click", function () {
  chooseMusic(3);
});

const music5Button = document.querySelector("#music5-button");
console.log(music5Button);

music5Button.addEventListener("click", function () {
  chooseMusic(4);
});

const music6Button = document.querySelector("#music6-button");
console.log(music6Button);

music6Button.addEventListener("click", function () {
  chooseMusic(5);
});

//--------------------------------------------------------------------------------------------------------------
//play and pause functionality

const playPauseButton = document.querySelector("#play-pause-button");
console.log(playPauseButton);

playPauseButton.addEventListener("click", togglePlayback);

const playPauseImg = document.querySelector("#play-pause-img");
console.log(playPauseImg);

function togglePlayback() {
  if (myMusic.paused || myMusic.ended) {
    myMusic.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v2.png";
  } else {
    myMusic.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v2.png";
  }
}
//--------------------------------------------------------------------------------------------------------------
//progress bar functionality
const progressBar = document.querySelector("#progress-bar");
console.log(progressBar);

myMusic.addEventListener("timeupdate", updateProgress);

function updateProgress() {
  const duration = (myMusic.currentTime / myMusic.duration) * 100;
  progressBar.style.width = duration + "%";
}
//--------------------------------------------------------------------------------------------------------------
// muting functionality
const muteUnmuteButton = document.querySelector("#mute-unmute-button");
console.log(muteUnmuteButton);

muteUnmuteButton.addEventListener("click", toggleAudio);

const muteUnmuteImg = document.querySelector("#mute-unmute-img");
console.log(muteUnmuteImg);

function toggleAudio() {
  if (myMusic.muted) {
    myMusic.muted = false;
    muteUnmuteImg.src =
      "https://img.icons8.com/ios-glyphs/30/high-volume--v2.png";
  } else {
    //if video is unmuted, mute the audio + change the image
    myMusic.muted = true;
    muteUnmuteImg.src = "https://img.icons8.com/ios-glyphs/30/no-audio--v1.png";
  }
}
//-----------------------------------------------------------------------------------------
//fast forward functionality
//While not essential for a site like this , I felt this would fit the post-ironic, experimental vibe
//the entire site exudes. The fast-forward function purely changes the playbackRate variable.
const fastForwardButton = document.querySelector("#fast-forward-button");
console.log(fastForwardButton);

fastForwardButton.addEventListener("click", fastForward);

function fastForward() {
  if (myMusic.playbackRate === 1.0) {
    myMusic.playbackRate = 2.0;
  } else {
    myMusic.playbackRate = 1.0;
  }
}

//-----------------------------------------------------------------------------------------
//like functionality
const heartButton = document.querySelector("#heart-button");
console.log(heartButton);

let likesCount = 0;
const likes = document.querySelector("#likes");
console.log("likes");

heartButton.addEventListener("click", showLikes, turnPink);
function showLikes() {
  likesCount++;
  likes.textContent = likesCount;
}

function turnPink() {
  heartButton.style.color = "#ff237b";
}

//-----------------------------------------------------------------------------------------
//skip to start functionality

const skipStartButton = document.querySelector("#skip-start-button");
console.log(skipStartButton);

skipStartButton.addEventListener("click", skipStart);

function skipStart() {
  myMusic.currentTime = 0;
}

//-----------------------------------------------------------------------------------------
//volume functionality
//i at first attempted to make this a Toggle button, but for some reason the if/else statement didn't
//allow the volume to change back after it had been lowered (perhaps something wrong with the else statement)
//so I ended up splitting it into 2 buttons. I have commented it out for archival purposes.

const volumeDownButton = document.querySelector("#volume-down-button");
console.log(volumeDownButton);

volumeDownButton.addEventListener("click", volumeDown);

function volumeDown() {
  myMusic.volume = 0.1;
}

const volumeUpButton = document.querySelector("#volume-up-button");
console.log(volumeUpButton);

volumeUpButton.addEventListener("click", volumeUp);

function volumeUp() {
  myMusic.volume = 1;
}
//const volumeImg = document.querySelector("#volume-img");
//console.log(volumeImg);

//function toggleVolume() {
//if (myMusic.volume = 1) {
//myMusic.volume = 0.2;
//volumeImg.src = "https://img.icons8.com/ios-glyphs/30/high-volume--v1.png";
//} else {
//myMusic.volume = 1;
//volumeImg.src = "https://img.icons8.com/ios-glyphs/30/low-volume.png";
//}
//}

//-----------------------------------------------------------------------------------------
//shuffle functionality

//I implemented a simple random song shuffle function after searching up on Google
//how to select random variables from an array, which I then just plugged into the
//chooseMusic function.
const shuffleButton = document.querySelector("#shuffle-button");
console.log(shuffleButton);

shuffleButton.addEventListener("click", shuffle);

//This specific math.floor function is adapted from a line of code accessed here:
//https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array
function shuffle() {
  const random = [Math.floor(Math.random() * playlist.length)];
  console.log(random);
  chooseMusic(random);
}
