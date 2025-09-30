var cash = 1;

var rng = Math.floor(Math.random() * max);

const balance = document.getElementById("balance");
balance.textContent = cash;

const button = document.getElementById("button");

function click() {
  cash += 1;
  balance.textContent = cash;

  alert("Check!")
}
