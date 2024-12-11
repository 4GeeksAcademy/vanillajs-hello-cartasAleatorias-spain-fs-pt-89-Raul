/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

window.onload = function() {
  let cardNumber = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "A",
    "J",
    "Q",
    "K"
  ];
  let pinta = ["Diamantes", "Trebol", "Corazon", "Pica"];
  let randomCardNumber = Math.floor(Math.random() * cardNumber.length);
  let randomPintaNumber = Math.floor(Math.random() * pinta.length);
  let cartaFinal = pinta[randomPintaNumber];

  document.getElementById("cardContent").innerHTML =
    cardNumber[randomCardNumber];
  document.getElementById("laCarta").className = "";
  document.getElementById("laCarta").classList.add("carta");
  document.getElementById("laCarta").classList.add(getPintaClass(cartaFinal));
};

function getPintaClass(pinta) {
  switch (pinta) {
    case "Diamantes":
      return "pinta-Diamantes";
    case "Trebol":
      return "pinta-Trebol";
    case "Corazon":
      return "pinta-Corazon";
    case "Pica":
      return "pinta-Pica";
  }
}
