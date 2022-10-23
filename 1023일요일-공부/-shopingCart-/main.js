// Fetch the items from the JSON file
function loadItems() {
  return fetch('./data.json')
    .then(response => response.json())
    .then(json => json.items);
}

// Update the list with the given items
function displayItems(items) {
  const container = document.querySelector('.items');
  //  배열에들어간 인덱스 별로 다합쳐서 하나의 문자열로 만든다.
  container.innerHTML = items.map(item => createHTMLString(item)).join('');
}

// Create HTML list item from the given data item
function createHTMLString(item) {
  // string타입으로, return되서 map을 이용해 인덱스에맞게 배열에 들어간다.
  return `
    <li class="item">
        <img src="${item.image}" alt="${item.type}" class="item__thumbnail" />
        <span class="item__description">${item.gender}, ${item.size}</span>
    </li>
    `;
}

const handlerBtnClick = (e, items) => {



}


const setEventListeners = (items) => {
  const btns = document.querySelectorAll('.btn');
  const logo = document.querySelector('.logo');
  btns.forEach((v) => {
    v.addEventListener('click', (e) => {
      handlerBtnClick(e, items)
    })
  })
}

loadItems()
  .then(item => {
    displayItems(item);
    setEventListeners(item);
  })
