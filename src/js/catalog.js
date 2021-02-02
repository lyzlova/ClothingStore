const catalogFiltersTop = document.querySelectorAll(".catalog-filter__top");
const hideFilter = document.querySelector(".hide-filters");

catalogFiltersTop.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    e.currentTarget.closest(".catalog-filter").classList.toggle("catalog-filter--open");
  });
});

hideFilter.addEventListener("click", (e) => {
  e.preventDefault();
  catalogFiltersTop.forEach((item) => {
    item.closest(".catalog-filter").classList.remove("catalog-filter--open");
  });
});


