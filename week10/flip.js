const card = document.querySelector(".card");
console.log(card);

card.addEventListener("click", function () {
  card.classList.toggle("yflip");
});

card.addEventListener("dblclick", function () {
  card.classList.toggle("xflip");
});
