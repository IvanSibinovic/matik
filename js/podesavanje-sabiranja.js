var range = document.querySelector("#price-range");
var numInp = document.getElementById("numInp");
range.addEventListener("input", updateValue1);
numInp.addEventListener("input", updateValue2);

function updateValue1(e) {
  numInp.value = e.target.value;
}
function updateValue2(e) {
  range.value = e.target.value;
}