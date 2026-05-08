const myVideo = document.querySelector("#my-video");
console.log(myVideo);

//-----------------------------------------------------------------------------------------
//progress bar
const progressBar = document.querySelector("#progress-bar");
console.log(progressBar);

myVideo.addEventListener("timeupdate", updateProgress);

function updateProgress() {
  const duration = (myVideo.currentTime / myVideo.duration) * 100;
  progressBar.style.width = duration + "%";
}
//play and pause
const playPauseButton = document.querySelector("#play-pause-button");
console.log(playPauseButton);

playPauseButton.addEventListener("click", togglePlayback);

const playPauseImg = document.querySelector("#play-pause-img");
console.log(playPauseImg);

function togglePlayback() {
  if (myVideo.paused || myVideo.ended) {
    myVideo.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v2.png";
  } else {
    myVideo.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v2.png";
  }
}
//-----------------------------------------------------------------------------------------
// muting button
const muteUnmuteButton = document.querySelector("#mute-unmute-button");
console.log(muteUnmuteButton);

muteUnmuteButton.addEventListener("click", toggleAudio);

const muteUnmuteImg = document.querySelector("#mute-unmute-img");
console.log(muteUnmuteImg);

function toggleAudio() {
  if (myVideo.muted) {
    myVideo.muted = false;
    muteUnmuteImg.src =
      "https://img.icons8.com/ios-glyphs/30/high-volume--v2.png";
  } else {
    //if video is unmuted, mute the audio + change the image
    myVideo.muted = true;
    muteUnmuteImg.src = "https://img.icons8.com/ios-glyphs/30/no-audio--v1.png";
  }
}

//-----------------------------------------------------------------------------------------------
//playlist logic

const videoList = [
  { id: 1, src: "stardust.mp4" },
  { id: 2, src: "zenscape.mp4" },
  {
    id: 3,
    src: "https://thelongesthumstore.sgp1.cdn.digitaloceanspaces.com/IM-2250/miac.mp4",
  },
];

//changing between the videos
const stardustButton = document.querySelector("#stardust-vid-button");
console.log(stardustButton);

stardustButton.addEventListener("click", function () {
  chooseVideo(0);
});

const zenscapeButton = document.querySelector("#zenscape-vid-button");
console.log(zenscapeButton);

zenscapeButton.addEventListener("click", function () {
  chooseVideo(1);
});

const musicvideoButton = document.querySelector("#musicvideo-vid-button");
console.log(musicvideoButton);

musicvideoButton.addEventListener("click", function () {
  chooseVideo(2);
});

function chooseVideo(id) {
  //get the video that is currently playing
  console.log(videoList[id].src);
  myVideo.src = videoList[id].src;
  myVideo.load();
  myVideo.play();
}
//-----------------------------------------------------------------------------------------
//fullscreen logic
const fullscreenButton = document.querySelector("#fullscreen-button");
console.log(fullscreenButton);

fullscreenButton.addEventListener("click", goFullscreen);
myVideo.addEventListener("dblclick", goFullscreen);

function goFullscreen() {
  if (!document.fullscreenElement) {
    //checks if the video is fullscreen
    //don't forget to add () after each function
    myVideo.requestFullscreen();
  } else {
    //if not, request if the video can go fullscreen
    document.exitFullscreen();
  }
}
//-----------------------------------------------------------------------------------------
// timestamps , STEP LOGIC
// marker 1
const step1Button = document.querySelector("#step1-button");
console.log(step1Button);

step1Button.addEventListener("click", gotoStep1);

//use the currentTime attribute
function gotoStep1() {
  myVideo.currentTime = 17.0;
}
//marker 2
const step2Button = document.querySelector("#step2-button");

step2Button.addEventListener("click", gotoStep2);

function gotoStep2() {
  myVideo.currentTime = 52.0;
}
//-----------------------------------------------------------------------------------------
//like button
const heartButton = document.querySelector("#heart-button");
console.log(heartButton);

let likesCount = 0;
const likes = document.querySelector("#likes");
console.log("likes");

heartButton.addEventListener("click", showLikes);
function showLikes() {
  likesCount++;
  //console.log(likesCount)
  likes.textContent = likesCount;
}
//-----------------------------------------------------------------------------------------
//fast forward
const fastForwardButton = document.querySelector("#fast-forward-button");
console.log(fastForwardButton);

fastForwardButton.addEventListener("click", fastForward);

function fastForward() {
  if (myVideo.playbackRate === 1.0) {
    myVideo.playbackRate = 2.0;
  } else {
    myVideo.playbackRate = 1.0;
  }
}
