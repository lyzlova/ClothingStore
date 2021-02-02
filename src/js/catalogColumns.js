const columnsList = document.querySelector(".catalog-columns__list");
const catalogContent = document.querySelector(".catalog-grid__content");
const columnsBtn = document.querySelectorAll(".catalog-columns__btn");

columnsList.addEventListener("click", (e) => {
  if (
    e.target.classList.contains(".catalog-columns__btn") ||
    e.target.closest(".catalog-columns__item")
  ) {
    const columns = e.target.dataset.columns;

    columnsBtn.forEach((item) => {
      item.classList.remove("catalog-columns__btn--current");
    });

    e.target.classList.add("catalog-columns__btn--current");

    catalogContent.dataset.gridColumns = columns;
  }
});
