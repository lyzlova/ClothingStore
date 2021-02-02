import list from "../js/productsList.js";

const cartProduct = document.querySelector(".catalog-grid__content");
let count = 10;

function createTableRows(data) {
  cartProduct.innerHTML = "";
  for (let i = 0; i < count; i++) {
    cartProduct.innerHTML += `
          <li class="catalog-grid__item elem" data-price="${data[i].price}">
          <article class="product">
          <div class="product__image">
            <img src="${data[i].image}" alt="${data[i].title}">
          </div>
          <div class="product__content">
          <h3 class="product__title">
            <a class="product__link" href="#">
              ${data[i].title}
            </a>
          </h3>
          <span class="product__rate">${data[i].rate}</span>
          <div class="product__footer">
            <span class="product__price">${data[i].price}</span>
            <button class="product__add add btn--active" data-id="${data[i].data}">Shop</button>
          </div>
          </div>
        </article>
          </li>
    `;
  }
}
createTableRows(list);

