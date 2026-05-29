const myCards = [
  { id: 1, name: "Queen", src: "queen.png" },
  { id: 2, name: "King", src: "king.png" },
  { id: 3, name: "Jack", src: "jack.png" },
];

const deck = document.querySelector(".deck");
console.log(deck);

let cardComposition = "";

for (let i = 0; i < myCards.length; i++) {
  let content = ` 
        <div class="card-container">
            <div class="card" draggable="true">
              <!--draggable = true allows for drag & drop interactions-->
              <div class="card-face"><img src="cloud.png" alt="Back" /></div>
              <div class="card-face yflip">
                <img src="${myCards[i].src}" alt=${myCards[i].name}/>
              </div>
            </div>
          </div>`;

  cardComposition = cardComposition + content;
}
//console.log(cardComposition);

deck.innerHTML = cardComposition;

const cards = document.querySelectorAll(".card");
console.log(cards);
let draggedCard = null;

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("dragstart", function () {
    draggedCard = cards[i];
    console.log(draggedCard);
  });
}

const dropbox = document.querySelector(".dropbox");
console.log(dropbox);

dropbox.addEventListener("dragover", function (e) {
  dropbox.innerHTML = "";
  e.preventDefault();
});

dropbox.addEventListener("drop", function () {
  //let clone = draggedCard.cloneNode(true);
  let clone = draggedCard;
  dropbox.appendChild(clone);
  draggedCard = null;
});
