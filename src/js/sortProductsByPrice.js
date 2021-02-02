const listSort = document.querySelector(".custom-select");
const listDropdown = document.querySelector(".custom-select__dropdown");
const listProducts = document.querySelector(".catalog-grid__content");

listSort.addEventListener("click", (e) => {
  listDropdown.classList.toggle("is-open");

  const sortElement = e.target.parentNode.dataset.dropdown;
  if (sortElement === "price") {
    for (let i = 0; i < listProducts.children.length; i++) {
      for (let j = i; j < listProducts.children.length; j++) {
        if (
          Number(listProducts.children[i].dataset.price) >
          Number(listProducts.children[j].dataset.price)
        ) {
          let replaceNode = listProducts.replaceChild(
            listProducts.children[j],
            listProducts.children[i]
          );
          insertAfter(replaceNode, listProducts.children[i]);
        }
      }
    }
  }

  if (sortElement === "latest") {
    for (let i = 0; i < listProducts.children.length; i++) {
      for (let j = i; j < listProducts.children.length; j++) {
        if (
          Number(listProducts.children[i].dataset.price) <
          Number(listProducts.children[j].dataset.price)
        ) {
          let replaceNode = listProducts.replaceChild(
            listProducts.children[j],
            listProducts.children[i]
          );
          insertAfter(replaceNode, listProducts.children[i]);
        }
      }
    }
  }
});

function insertAfter(elem, refElem) {
  return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}
