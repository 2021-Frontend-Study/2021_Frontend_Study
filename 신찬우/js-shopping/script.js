'use strict';

// Fetch the items from the JSON file
function loadItems() {
  return fetch('data/data.json') // data.json을 받아옴
    .then(response => response.json()) // json으로 변환
    .then(json => json.items); // json의 items을 return
}

// Update the list with the given items
function displayItems(items) {
  const container = document.querySelector(".items");
  container.innerHTML = items.map(item => createHTMLString(item)).join('');
}

// Create HTML list item from the given data item
function createHTMLString(item) {
  return `
  <li class="item">
    <img src="${item.image}" alt="${item.type}" class="item__thumnail">
    <span class="item__description">${item.gender}, ${item.size}</span>
  </li>
  `;
}

// Handle button click
function onButtonClick(event, items) {
  const dataset = event.target.dataset
  const key = dataset.key;
  const value = dataset.value;

  if (key == null || value == null) {
    return;
  }
  displayItems(items.filter(item => item[key] === value)); // 메모리 비효율적 관리 발생
  // updateItems(items, key, value);
}

// // Make the items matching {key: value} invisible
// function updateItems(items, key, value) {
//   items.forEach(item => {
//     if (item.dataset[key] === value) {
//       item.classList.remove('invisible');
//     } else {
//       item.classList.add('invisible');
//     }
//   })
// }

function setEventListeners(items) {
  const logo = document.querySelector(".logo");
  const buttons = document.querySelector(".buttons");
  logo.addEventListener("click", () => displayItems(items));
  buttons.addEventListener("click", event => onButtonClick(event, items));
}

// main
loadItems()
  .then(items => {
    displayItems(items);
    setEventListeners(items);
  })
  .catch(console.log)
