const contactUs = document.querySelector(".form-contact");
const crossBtn = document.querySelector(".form-contact__btn");
const signinBtn = document.querySelector(".form-contact__submit");
const openFormBtn = document.querySelector(".info__btn");

openFormBtn.addEventListener("click", openForm);
crossBtn.addEventListener("click", openForm);
signinBtn.addEventListener("click", store);

function openForm(e) {
  e.preventDefault();
  contactUs.classList.toggle("is-open");
}

function store(e) {
  e.preventDefault();
  const inputName = document.querySelector(".form-contact__name").value;
  const inputPhone = document.querySelector(".form-contact__phone").value;
  const inputEmail = document.querySelector(".form-contact__email").value;

  localStorage.setItem("name", inputName);
  localStorage.setItem("phone", inputPhone);
  localStorage.setItem("email", inputEmail);

  document.querySelector(".form-signin__email").value = "";
  document.querySelector(".form-signin__password").value = "";
  document.querySelector(".form-signin__password").value = "";
}


