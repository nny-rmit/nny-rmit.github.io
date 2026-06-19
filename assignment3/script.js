//This is simple mute function logic carried over from the previous assignment.

const music = document.querySelector("#music");

const muteButton = document.querySelector("#mute-button");
console.log(muteButton);

muteButton.addEventListener("click", toggleAudio);
const muteUnmuteImg = document.querySelector("#mute-unmute-img");
console.log(muteUnmuteImg);

function toggleAudio() {
  if (music.muted) {
    music.muted = false;
    muteUnmuteImg.src =
      "https://img.icons8.com/ios-glyphs/30/high-volume--v2.png";
  } else {
    music.muted = true;
    muteUnmuteImg.src = "https://img.icons8.com/ios-glyphs/30/no-audio--v1.png";
  }
}

const nextButton = document.querySelector("#playlist-button");
console.log(nextButton);

//------------------------------------------------------------------------------------
// This code is supposed to change the song, but for some reason the 'src' value wasn't able to be read, so I
// ended up just commenting it out.
//const playlist = [
//{
//id: 1,
//src: "https://file.garden/aGJwdAK8lRt7Ht-6/assignment3/Jacob%20Tompkins%20-%20pinkpantheress%20dnb%20type%20beat%20%EF%BC%82cle%EF%BC%82%20free%20for%20profit.m4a",
//},
//{
//id: 2,
//src: "https://file.garden/aGJwdAK8lRt7Ht-6/assignment3/Jacob%20Tompkins%20-%20pinkpantheress%20type%20beat%20%EF%BC%82ninety%EF%BC%82%20free%20for%20profit.m4av",
//},
//{
//id: 3,
//src: "https://file.garden/aGJwdAK8lRt7Ht-6/assignment3/Jacob%20Tompkins%20-%20pinkpantheress%20type%20beat%20%EF%BC%82lead%EF%BC%82%20free%20for%20profit.opus",
//}
//];

//nextButton.addEventListener("click", nextSong);

//function nextSong(id) {
//music.src = playlist[id + 1].src;
//music.load();
//music.play();
//};

//More simple functionality. THis moves the UI around and off the screen so the user can take
//screenshots clearly, and targets the elements separately so that they can be eased in and out
//and that their movement across isn't so clunky.

const toggleButton = document.querySelector("#toggle-button");
console.log(toggleButton);

const wardrobe = document.querySelector(".wardrobe");
console.log(wardrobe);

const controls = document.querySelector(".controls");
console.log(controls);

const stage = document.querySelector(".stage");
console.log(stage);

let clicked = false;
toggleButton.addEventListener("click", toggleUi);

function toggleUi() {
  if (clicked) {
    console.log("did you just click me?");
    clicked = false;
    wardrobe.style.translate = "0px 0px";
    controls.style.translate = "0px 0px";
    stage.style.translate = "0px 0px";
  } else {
    wardrobe.style.translate = "1000px 0px";
    controls.style.translate = "-650px 0px";
    stage.style.translate = "400px 0px";
    clicked = true;
  }
}

//----------------------------------

//This code is the drag and drop functionality. I have separated it into tops and bottoms
//to allow for the tops to overlay the bottoms using z-index. Thus, they are 2 separate dragdrop
//classes going into 2 different dropboxes.

//Unfortunately, due to outside circumstances I was unable to get both the tops and bottoms working simultaneously.
//seemingly a problem within the implementation of cloneNode, and I was unable to rectify this before submission.
//Thus, this work functions more as a proof of concept if anything.

const clothes = document.querySelectorAll(".clothes");
console.log(clothes);

let draggedClothes = null;

for (let i = 0; i < clothes.length; i++) {
  clothes[i].addEventListener("dragstart", function () {
    draggedClothes = clothes[i];
    console.log(draggedClothes);
  });
}

const topStage = document.querySelector(".top-stage");
console.log(topStage);

topStage.addEventListener("dragover", function (e) {
  topStage.innerHTML = "";
  e.preventDefault();
});

topStage.addEventListener("drop", function () {
  let cloneTop = draggedClothes.cloneNode(true);
  topStage.appendChild(cloneTop);
  draggedClothes = null;
});

//-------------------------
//For some reason, the tops and bottoms can only be implemented separately, though as individual
//snippets of code they function perfectly fine. You can comment out all code below this to see
//what I mean. It's unfortunate and disappointing on my part, but it does work.

const clothes2 = document.querySelectorAll(".clothes2");
console.log(clothes2);

let draggedClothes2 = null;

for (let i = 0; i < clothes2.length; i++) {
  clothes2[i].addEventListener("dragstart", function () {
    draggedClothes2 = clothes2[i];
    console.log(draggedClothes2);
  });
}

const bottomStage = document.querySelector(".bottoms-stage");
console.log(bottomStage);

bottomStage.addEventListener("dragover", function (a) {
  bottomStage.innerHTML = "";
  a.preventDefault();
});

bottomStage.addEventListener("drop", function () {
  let cloneBottoms = draggedClothes2.cloneNode(true);
  bottomStage.appendChild(cloneBottoms);
  draggedClothes2 = null;
});
