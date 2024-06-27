let dataBase = [
  "BANANA",
  "APPLE",
  "MANGO",
  "STRAWBERRY",
  "PEACH",
  "PEAR",
  "GRAPE",
  "ORANGE",
  "WATERMELON",
  "NIGERIA",
  "AUSTRALIA",
  "DENMARK",
  "FINLAND",
  "GREECE",
  "THAILAND",
  "CHINA",
  "RUSSIA",
  "GHANA",
  "EGYPT",
  "KENYA",
  "SOUTHAFRICA",
];

function showDb(array) {
  return array.map((db) => {
    result.innerHTML += `<li>${db.toLowerCase()}</li>`;
  });
}

function showEntireList() {
  result.style.display = "block";
  showDb(dataBase);
}

function showList() {
  result.style.display = "block";
  result.innerHTML = "";
  if (input.value) {
    let filteredDb = dataBase.filter((db) => {
      return db.includes(input.value.toUpperCase());
    });
    filteredDb.map((item) => {
      const highlightedItem = item.replace(
        new RegExp(input.value, "gi"),
        (match) => {
          return `<span class="highlight">${match}</span>`;
        }
      );

      const itemDiv = document.createElement("div");
      itemDiv.innerHTML = highlightedItem.toLowerCase();
      result.appendChild(itemDiv);
    });
  } else {
    result.innerHTML = "";
    showDb(dataBase);
  }
}
