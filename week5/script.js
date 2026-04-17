console.log("hi");

// let defines variables that change
// const defines variables that remain the same
// numbers can be pos/neg, fractions, percentages

let myId = 1234;
console.log(myId);
myId = 4567;
console.log(myId);
myBudget = 30.57;
console.log("I can spend :$", myBudget);

{
  let a = 20;
  let b = 40;
  let c = a * b;
  console.log(c);
}
// console.log(c); , c is undefined due to being contained in a block

// boolean is mainly used for condition checks (true/false)
let isItFriday = true;
let isItPublicHoliday = false;
console.log(isItPublicHoliday);

// null & undefined; null: empty box, undefined: blind box
let iAmUnknown = undefined;
let emptyBox = null;
console.log(emptyBox);

// strings define stored alphanumeric value, including html
const myName = "Syl";
console.log("hello", myName);
let myCity = "Melbourne";

// objects group things related to the same entity
// and you can have multiple datatypes
const myRecord = { myName: "Sylvain", id: 1234, city: "Perth" };
console.log(myRecord);
console.log(myRecord.city);

// conditionals check is certain values fit its conditions, and will run the if/else accordingly
if (isItFriday) {
  console.log("yay");
} else {
  console.log("aww");
}

let x = "45";
let y = "50";
if (x < 40) {
  console.log(true);
} else {
  console.log(false);
}
// logical operators dictate conditionals with multiple variables
// &&, AND operators must have both conditions to be true
// ||, OR operators can have either to be true
// !, NOT operators changed the condition from true to false and vice versa

// arrays are a collection of elements
// they start at 0, not 1
const grades = [67, 84, 90, 45, 78];
console.log("student B grade", grades[1]);

const students = ["alice", "bob", "carol", "deb"];
console.log(students.length);
for (
  let i = 0;
  i < students.length;
  i++
) // for loops run a statement multiple times
// i++ lengthens the array by 1, so it doesn't start on 0
{
  console.log("hello", students[i]);
}

const expenditures = [34, 4, 78, 5, 10];
let totalSpend = 0;
console.log(expenditures.length);
for (let i = 0; i < expenditures.length; i++) {
  totalSpend = totalSpend + expenditures[i];
  console.log("expenditure so far", totalSpend);
}

console.log("total expenditure is", totalSpend);

let shoppingCart = [
  { name: "T-shirt", price: 20 },
  { name: "Jeans", price: 50 },
  { name: "Sneakers", price: 80 },
  { name: "Backpack", price: 30 },
];

console.log(shoppingCart[0].price);
let purchases = 0;
console.log(shoppingCart.length);
for (let i = 0; i < shoppingCart.length; i++) {
  purchases = purchases + shoppingCart[i].price;
  console.log("purchased:", shoppingCart[i].name, "for", shoppingCart[i].price);
}

console.log("total price is", purchases);
let discount = 0;
if (purchases > 100) {
  discount = purchases - 10 * (purchases / 100);
  console.log("your discounted price is", discount);
}
