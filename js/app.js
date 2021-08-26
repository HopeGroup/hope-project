"use strict";

// let contain = document.getElementById("contain");

let cardArr = [];

function CardConst(catName, catImg) {
  this.catName = catName;
  this.catImg = catImg;
  cardArr.push(this);
}

function makeorder(event) {
  event.preventDefault();
  let catName = event.target.childNodes[1].innerText;
  let catPath = `images/${catName}.jpg`
  console.log(catName, catPath);
  new CardConst(catName, catPath);
  saveToLocalStorage();
}

function saveToLocalStorage() {
  let data = JSON.stringify(cardArr);
  //   console.log(cardArr);
  localStorage.setItem("key", data);
}

function getFromLocalStorage() {
  let data = localStorage.getItem("key");
  if (data) {
    cardArr = JSON.parse(data);
  }
}
getFromLocalStorage();