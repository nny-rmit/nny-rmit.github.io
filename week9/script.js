const jumpButton = document.querySelector("#jump-button");
console.log(jumpButton);

jumpButton.addEventListener("click", doJump);

const duck = document.querySelector("#duck");
console.log(duck);

let clicked = false;

//toggle jump function using translates
function doJump() {
  console.log("did you just click me?");
  if (clicked) {
    clicked = false;
    duck.style.translate = "0px 0px";
  } else {
    duck.style.translate = "0px -60px";
    clicked = true;
  }
}

//allows the translate to increase incrementally
function flyHigh() {
  duck.style.translate = `0px -${displacement}px`;
  displacement = displacement + 20;
}
