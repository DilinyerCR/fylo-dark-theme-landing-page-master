const input = document.querySelector(".input");
const button = document.querySelector(".button");
const error = document.querySelector(".error");
const thanks = document.querySelector(".thanks");
const textColor = document.querySelector(".cyan-text-container");

const see = document.querySelector(".see");
const subrayado = document.querySelector(".subrayado");
const arrow = document.querySelector(".arrow");

function validation(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

button.addEventListener("click", (event) => {
  const email = input.value;
  event.preventDefault();
  if (validation(email)) {
    input.value = "";
    thanks.textContent = "Thank you, you have been successfully registered!";
    setTimeout(function () {
      thanks.textContent = "";
    }, 3000);
  } else {
    error.textContent = "Please enter a valid email address!";
    setTimeout(function () {
      error.textContent = "";
    }, 3000);
  }
});

textColor.addEventListener("mouseenter", () => {
  textColor.style.cursor = "pointer";
  see.style.color = "#CCCCCC";
  subrayado.style.borderTop = "1px solid #CCCCCC";
  arrow.src = "images/icon-arrow-white.svg";
});

textColor.addEventListener("mouseleave", () => {
  see.style.color = "#64E1D9";
  subrayado.style.borderTop = "1px solid #64E1D9";
  arrow.src = "images/icon-arrow.svg";
});
