let table = document.getElementById("contain");

function render() {
  for (let i = 0; i < cardArr.length; i++) {
    let trEl = document.createElement("tr");
    table.appendChild(trEl);

    let thEl = document.createElement("td");
    trEl.appendChild(thEl);
    thEl.textContent = cardArr[i].catName;

    let thEl2 = document.createElement("td");
    let imEl = document.createElement("img");
    imEl.src = cardArr[i].catImg;
    thEl2.appendChild(imEl);
    trEl.appendChild(thEl2);
    // thEl2.textContent = cardArr[i].catImg;
  }
}

console.log(cardArr);

if (cardArr[0]) {
  render();
}