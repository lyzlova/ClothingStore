
const catalogList = document.querySelector(".catalog-columns__list");
const catalogGridContents = document.querySelector(".catalog-grid__content");
const columnsBtn = document.querySelectorAll(".catalog-columns__btn");
const catalogFilterItems = document.querySelectorAll(".catalog-filter__item");
let catalogChoice = document.querySelector(".catalog-props__choice");

catalogList.addEventListener("click", (e) => {
  if (e.target.closest(".catalog-columns__item")) {
    let columns = e.target.dataset.columns;
    catalogGridContents.dataset.gridColumns = columns;

    columnsBtn.forEach((item) => {
      item.classList.remove("catalog-columns__btn--current");
    });
    e.target.classList.add("catalog-columns__btn--current");
  }
});

const createChoiceItem = (text) => {
  return `
      <button class="catalog-choice__item btn" data-choice-text="${text}">
        ${text}
        <svg class="catalog-choice__icon" width="16" height="16">
          <use href="./images/icon/symbol-defs.svg#icon-cross"></use>
        </svg>
      </button>
    `;
};

catalogFilterItems.forEach((item) => {
  item.querySelector("input").addEventListener("change", (e) => {
    const checked = item.querySelector("input").checked;

    if (checked) {
      item
        .querySelector(".custom-checkbox")
        .classList.add("custom-checkbox--active");

      const text = item.querySelector(".custom-checkbox__text").textContent;

      catalogChoice.insertAdjacentHTML("afterbegin", createChoiceItem(text));
    } else {
      item
        .querySelector(".custom-checkbox")
        .classList.remove("custom-checkbox--active");

      const text = item.querySelector(".custom-checkbox").dataset.text;

      document.querySelector(`[data-choice-text="${text}"]`).remove();
    }

    const activeCheckboxes = document.querySelectorAll(
      ".custom-checkbox--active"
    );

    if (activeCheckboxes.length > 0) {
      catalogChoice.style.display = "flex";
    } else {
      catalogChoice.style.display = "none";
    }
  });
});

catalogChoice.addEventListener("click", (e) => {
  if (e.target.classList.contains('catalog-choice__item')) {
    e.target.remove();



    let text = e.target.textContent.trimLeft().trimRight();

    document
      .querySelector(`[data-text="${text}"]`)
      .querySelector("input").checked = false;
    document
      .querySelector(`[data-text="${text}"]`)
      .classList.remove("custom-checkbox--active");
  }

  if (e.target.classList.contains("catalog-choice__clear")) {
    Array.from(e.currentTarget.children).forEach((item) => {
      item.remove();
    });

    catalogFilterItems.forEach((item) => {
      item.querySelector("input").checked = false;
      item.querySelector(".custom-checkbox").classList.remove(
        "custom-checkbox--active"
      );
    });

    e.currentTarget.style.display = "none";
  }

  if (e.currentTarget.children.length === 1) {
    e.currentTarget.style.display = "none";
  }
});



