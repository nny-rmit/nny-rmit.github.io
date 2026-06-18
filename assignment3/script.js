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
