

let list = document.getElementById("list");

let addToListButton = document.getElementById("add-to-list-button");
let loadListButton = document.getElementById("load-list-button");
let clearListButton = document.getElementById("clear-list-button");

// Clear list button
clearListButton.onclick = () => {
  localStorage.clear();
  list.innerHTML = "";
};

// javascript function
function loadFromList() {
  // Load list from local storage
  let items = JSON.parse(localStorage.getItem("urls"));
  if (items) {
    list.innerHTML = "";
    items.forEach(function (item) {
      let li = document.createElement("li");
      li.innerText = item;
      list.appendChild(li);
    });
  }
}

addToListButton.onclick = function () {
  let items = [];
  let url = document.getElementById("url").value;

  let dbItems = JSON.parse(localStorage.getItem("urls"));
  if (dbItems) {
    dbItems.push(url);
    localStorage.setItem("urls", JSON.stringify(dbItems));
  } else {
    items.push(url);
    localStorage.setItem("urls", JSON.stringify(items));
  }

  loadFromList();
};

loadListButton.onclick = function () {
  loadFromList();
};