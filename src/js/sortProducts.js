import list from "../js/productsList.js";

// const catalog = document.querySelector(".catalog-grid__content");
const cartProduct = document.querySelector(".catalog-grid__content");
// const more = document.querySelector(".nav-products__more");
let count = 10;

function createTableRows(data) {
  cartProduct.innerHTML = "";
  for (let i = 0; i < count; i++) {
    cartProduct.innerHTML += `
          <li class="catalog-grid__item" data-price="${data[i].price}">
          <article class="product">
          <div class="product__image">
            <img src="${data[i].image}" alt="${data[i].title}">
          </div>
          <div class="product__content">
          <h3 class="product__title">
            <a href="#">
              ${data[i].title}
            </a>
          </h3>
          <span class="product__rate">${data[i].rate}</span>
          <div class="product__footer">
            <span class="product__price">${data[i].price}</span>
            <button class="product__add" data-id="wsd2">Shop</button>
          </div>
          </div>
        </article>
          </li>
    `;
  }
}
createTableRows(list);

//   const tab = function () {
//     const tabNav = document.querySelectorAll(".nav-products__item");
//     tabNav.forEach((item) => {
//       item.addEventListener("click", selectTabNav);
//     });

//     function selectTabNav(e) {
//       count = 5;
//       tabName = this.getAttribute("data-products-name");
//       createTableRows(list, tabName);
//     }
//   };
//   tab();

//   more.addEventListener("click", (e) => {
//     e.preventDefault();
//     count += 5;
//     createTableRows(list, tabName);

//     if (count > list.length) {
//       more.style.display = "none";
//     } else {
//       more.style.display = "inline-flex";
//     }
//   });
