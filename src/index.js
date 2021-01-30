import "./js/swiper.js";
import "./js/products.js";
// import "./js/cart.js";
// import "./js/login.js";
import "./scss/styles.scss";

const buttonMenu = document.querySelector("[data-menu-button]");
const burgerMenu = document.querySelector("[data-menu]");

buttonMenu.addEventListener("click", hadleToggle);

function hadleToggle(e) {
  const expanded = buttonMenu.getAttribute("aria-expended") === "true" || false;
  buttonMenu.classList.toggle("is-open");
  buttonMenu.setAttribute("aria-expended", !expanded);

  burgerMenu.classList.toggle("is-open");
}
