import list from "../js/productsList.js";

const navProductsList = document.querySelector(".nav-products__list");
const productsList = document.querySelector(".products__list");
const more = document.querySelector(".nav-products__more");
let count = 5;
let tabName = "best";

function createTableRows(data, tab) {
  const selectArticle = data.filter((item) => item.rate === tab);

  // if (count < selectArticle.length) {
  productsList.innerHTML = "";
  for (let i = 0; i < count; i++) {
    productsList.innerHTML += `
        <li class="products__item elem">
          <article class="product">
            <div class="product__image">
              <img src="${selectArticle[i].image}" alt="${selectArticle[i].title}">
            </div>
            <div class="product__content">
            <h3 class="product__title">
              <a class="product__link" href="#">
                ${selectArticle[i].title}
              </a>
            </h3>
            <span class="product__rate">${selectArticle[i].rate}</span>
            <div class="product__footer">
              <span class="product__price">${selectArticle[i].price}</span>
              <button class="product__add add btn--active" data-id="${selectArticle[i].data}">Shop</button>
            </div>
            </div>
          </article>
        </li>
  `;
  }
  // }
}
createTableRows(list, tabName);

// =================

const tab = function () {
  const tabNav = document.querySelectorAll(".nav-products__item");
  tabNav.forEach((item) => {
    item.addEventListener("click", selectTabNav);
  });

  function selectTabNav(e) {
    count = 5;
    tabName = this.getAttribute("data-products-name");
    createTableRows(list, tabName);
  }
};
tab();

more.addEventListener("click", (e) => {
  e.preventDefault();
  count += 5;
  createTableRows(list, tabName);

  if (count > list.length) {
    more.style.display = "none";
  } else {
    more.style.display = "inline-flex";
  }
});

// =============

navProductsList.addEventListener("click", handleLink);

function handleLink(e) {
  e.preventDefault();

  if (e.target === e.currentTarget) {
    return;
  }

  const currentLink = e.target;
  const activeLink = e.currentTarget.querySelector(
    ".nav-products__item--active"
  );

  if (activeLink) {
    activeLink.classList.remove("nav-products__item--active");
  }

  currentLink.classList.add("nav-products__item--active");
}
