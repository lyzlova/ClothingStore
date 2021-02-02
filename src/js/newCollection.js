import list from "../js/productsList.js";

const collection = document.querySelector(".collection__list");
const openBtn = document.querySelector(".collection__btn");
let count = 5;

function createTableRows(data) {
  const selectArticle = data.filter((item) => item.rate === "new");

  collection.innerHTML = "";
  for (let i = 0; i < count; i++) {
    collection.innerHTML += `
    <li class="products__item">
    <article class="product">
      <div class="product__image">
        <img src="${selectArticle[i].image}" alt="${selectArticle[i].title}">
      </div>
      <div class="product__content">
      <h3 class="product__title">
        <a href="#">
          ${selectArticle[i].title}
        </a>
      </h3>
      <span class="product__rate">${selectArticle[i].rate}</span>
      <div class="product__footer">
        <span class="product__price">${selectArticle[i].price}</span>
        <button class="product__add" data-id="wsd2">Shop</button>
      </div>
      </div>
    </article>
  </li>
  `;
  }
}

openBtn.addEventListener("click", (e) => {
  createTableRows(list);

  if (e.target.nodeName === "BUTTON") {
    openBtn.classList.toggle("open");


    if (openBtn.classList.contains('open')) {
      e.target.textContent = "Hide";
      collection.style.display = "flex";
    } else {
      e.target.textContent = "ALL COLLECTION";
      collection.style.display = "none";
    }
  }
});

