var elRes = document.querySelector(".js-result");
var one = Number(prompt("write a number"));
var two = Number(prompt("write a number"));
var three = Number(prompt("write a number"));

if (one > two && one < three || one > three && one < two ) {
  elRes.textContent = one;
}
 else if(two > one && two < three || two > three && one > two) {
  elRes.textContent = two;
} else if (three > one && two > three  || three > two && one > three) {
  elRes.textContent = three;
}
else {
  elRes.textContent = "Write a number";
}
