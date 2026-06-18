const music = document.querySelector("#music");

const muteButton = document.querySelector("#mute-button");
console.log(muteButton);

muteButton.addEventListener("click", toggleAudio);

function toggleAudio() {
  if (music.muted) {
    music.muted = false;
  } else {
    music.muted = true;
  }
}

const playlist = [
  {
    id: 1,
    src: "https://file.garden/aGJwdAK8lRt7Ht-6/assignment3/Jacob%20Tompkins%20-%20pinkpantheress%20type%20beat%20%EF%BC%82ninety%EF%BC%82%20free%20for%20profit.m4a",
  },
  {
    id: 2,
    src: "https://file.garden/aGJwdAK8lRt7Ht-6/assignment3/Jacob%20Tompkins%20-%20pinkpantheress%20type%20beat%20%EF%BC%82lead%EF%BC%82%20free%20for%20profit.opus",
  },
  {
    id: 3,
    src: "https://file.garden/aGJwdAK8lRt7Ht-6/assignment3/Jacob%20Tompkins%20-%20pinkpantheress%20dnb%20type%20beat%20%EF%BC%82cle%EF%BC%82%20free%20for%20profit.m4a",
  },
];

const toggleButton = document.querySelector("#toggle-button");

toggleButton.addEventListener("click", function () {
  chooseMusic();
});

function chooseMusic(id) {
  console.log(playlist[id].src);
  music.src = playlist[id + 1].src;
  music.load();
  music.play();
}

//----------------------------------

const clothes = document.querySelectorAll(".clothes");
console.log(clothes);

let draggedClothes = null;

for (let i = 0; i < clothes.length; i++) {
  clothes[i].addEventListener("dragstart", function () {
    draggedClothes = clothes[i];
    console.log(draggedClothes);
  });
}

const dropbox = document.querySelector(".dropbox");
console.log(dropbox);

dropbox.addEventListener("dragover", function (e) {
  dropbox.innerHTML = "";
  e.preventDefault();
});

dropbox.addEventListener("drop", function () {
  let clone = draggedClothes.cloneNode(true);
  dropbox.appendChild(clone);
  draggedClothes = null;
});

//-------------------------

const clothes2 = document.querySelectorAll(".clothes2");
console.log(clothes2);

let draggedClothes2 = null;

for (let i = 0; i < clothes2.length; i++) {
  clothes2[i].addEventListener("dragstart", function () {
    draggedClothes2 = clothes[i];
    console.log(draggedClothes2);
  });
}

const dropbox2 = document.querySelector(".dropbox2");
console.log(dropbox2);

dropbox2.addEventListener("dragover", function (e) {
  dropbox2.innerHTML = "";
  e.preventDefault();
});

dropbox2.addEventListener("drop", function () {
  let clone = draggedClothes2.cloneNode(true);
  dropbox2.appendChild(clone);
  draggedClothes2 = null;
});
