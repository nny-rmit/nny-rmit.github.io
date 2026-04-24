//window everything on screen including toolbars
//document from html to /html
//navigation allows us to access device specific things

const heading = document.querySelector("h1");
console.log(heading);
console.log(heading.textContent); //reading DOM
heading.textContent = "I Now Know DOM"; //modifying or updating DOM

const subheading = document.querySelectorAll("h2"); //change this ("variable") to target another element
console.log(subheading);
for (let i = 0; i < subheading.length; i++) {
  console.log(subheading[i].textContent);
}

const blueItem = document.querySelector(".blue-color");
console.log(blueItem);

const subHead = document.querySelector("#subhead-1");
console.log();

//getter - reads element property
//setter - modifies element property

function toggleMe() {
  const myCat = document.querySelector("#my-cat");
  console.log(myCat);
  myCat.classList.toggle("round");
  //toggle function allows it to add/remove each time
}

//innerHTML allows you to append content
const courseName = "Interactive Media";
const courseID = "0ART1013";
const header = document.querySelector("header");
console.log(header);
console.log(header.innerHTML);
header.innerHTML += `<h3 class="blue-color">${courseName}</h3>
<p>${courseID}</p>
`; //backticks used for multiple lines of html code

const myCat = document.querySelector("#my-cat");
console.log(myCat);

myButton = document.querySelector("#my-button");
console.log(myButton);
myCat.addEventListener("click", toggleMe);
myCat.addEventListener("mouseenter", addMe);
myCat.addEventListener("mouseleave", removeMe);

const body = document.querySelector("body");

function addMe() {
  myCat.classList.add("round");
  myButton.textContent = "unclicked";
  body.style.backgroundColor = "lime";
}

function removeMe() {
  myCat.classList.remove("round");
  myButton.textContent = "clicked";
  body.style.backgroundColor = "orange";
}

//dont add functionOne() round brackets, makes it execute immediately
