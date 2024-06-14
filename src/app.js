/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const suits = ["spade", "club", "heart", "diamond"];
  const values = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];
  const suitSymbols = ["♠", "♣", "♥", "♦"];

  function getRandomCard() {
    const suitIndex = Math.floor(Math.random() * suits.length);
    const valueIndex = Math.floor(Math.random() * values.length);
    return {
      suit: suits[suitIndex],
      value: values[valueIndex],
      symbol: suitSymbols[suitIndex]
    };
  }

  function renderCard() {
    const card = getRandomCard();
    const cardContainer = document.getElementById("card-container");
    cardContainer.className = `card mx-auto shadow-lg ${card.suit}`;

    const valueElements = cardContainer.querySelectorAll(
      ".corner-value, .center-value"
    );
    valueElements.forEach(v => {
      v.textContent = card.value;
      v.className = v.className.replace(/\bred-text\b/g, "");
      if (card.suit === "heart" || card.suit === "diamond") {
        v.classList.add("red-text");
      }
    });

    const suitElements = cardContainer.querySelectorAll(".corner-suit");
    suitElements.forEach(s => (s.textContent = card.symbol));
  }

  document.getElementById("new-card-btn").addEventListener("click", renderCard);

  renderCard();
};
