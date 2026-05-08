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

const myVideo = document.querySelector("#my-video");
// access the play pause button
const playPauseButton = document.querySelector("#play-pause-btn");
console.log(playPauseButton);

//access the image
const playPauseImg = document.querySelector("#play-pause-img");
console.log(playPauseImg);

// add a click event listener to the button
playPauseButton.addEventListener("click", toggleVideo);

function toggleVideo() {
  if (myVideo.paused === true || myVideo.ended === true) {
    myVideo.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v2.png";
  } else {
    myVideo.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v2.png";
  }
}
