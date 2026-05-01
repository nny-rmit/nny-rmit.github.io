//  get access to the audio element using queryselector

const airportAudio = document.querySelector("#airport-audio");
console.log(airportAudio);

const playButton = document.querySelector("#play-button");
console.log(playButton);

//changes text depending on function
const msg = document.querySelector("#msg");

playButton.addEventListener("click", playAudio);
function playAudio() {
  airportAudio.play();
  msg.textContent = "playing";
}

// pause button

const pauseButton = document.querySelector("#pause-button");
console.log(pauseButton);

pauseButton.addEventListener("click", pauseAudio);
function pauseAudio() {
  airportAudio.pause();
  msg.textContent = "pause";
}

// pop button

const popAudio = document.querySelector("#pop-audio");
console.log(popAudio);
const popButton = document.querySelector("#pop-button");
console.log(popButton);

popButton.addEventListener("click", popPlay);
function popPlay() {
  popAudio.play();
  msg.textContent = "pop";
}

// video controller

const myVideo = document.querySelector("#my-video");

const videoPlay = document.querySelector("#video-play");
videoPlay.addEventListener("click", playVideo);

function playVideo() {
  myVideo.play();
  msg.textContent = "playing";
}
// pause button
console.log(pauseButton);

const videoPause = document.querySelector("#video-pause");
videoPause.addEventListener("click", pauseVideo);

function pauseVideo() {
  myVideo.pause();
  msg.textContent = "pause";
}
