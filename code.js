const max = 9;
var number = 50;

var rng = Math.floor(Math.random() * max)

var balance = document.getElementById("balance")
balance.textContent = number

var slot1 = document.getElementById("slot1")
slot1.textContent = rng
