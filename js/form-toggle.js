var btn = document.querySelector(".form-show-btn");
var form = document.querySelector(".find-hotel-form");

btn.addEventListener("click", function (evt) {
  evt.preventDefault();
  form.classList.toggle("find-hotel-form-hidden");
});