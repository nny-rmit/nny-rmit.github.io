function checkWeather() {
  const myTemp = document.querySelector("#myTemp");
  console.log(myTemp.value);
  const body = document.querySelector("body");
  const outer = document.querySelector(".outer");
  let temp = myTemp.value;

  if (temp < 10) {
    console.log("It is cold.");
    body.style.backgroundColor = "gray";
    outer.style.backgroundColor = "black";
  } else if (temp >= 10 && temp < 20) {
    console.log("It is average.");
    body.style.backgroundColor = "green";
    outer.style.backgroundColor = "lime";
  } else if (temp >= 20 && temp < 30) {
    console.log("It is warm.");
    body.style.backgroundColor = "orange";
    outer.style.backgroundColor = "red";
  }
}
