import "./js/swiper.js";
import "./js/map.js";
import "./scss/styles.scss";
import "./js/login.js";
import "./js/products.js";
import "./js/newCollection.js";
import "./js/catalog.js";
import "./js/filter.js";
import "./js/contact-us.js";
import "./js/sortProducts.js";
import "./js/catalogColumns.js";
import "./js/sortProductsByPrice.js";

const buttonMenu = document.querySelector("[data-menu-button]");
const burgerMenu = document.querySelector("[data-menu]");

buttonMenu.addEventListener("click", hadleToggle);

function hadleToggle(e) {
  const expanded = buttonMenu.getAttribute("aria-expended") === "true" || false;
  buttonMenu.classList.toggle("is-open");
  buttonMenu.setAttribute("aria-expended", !expanded);

  burgerMenu.classList.toggle("is-open");
}
