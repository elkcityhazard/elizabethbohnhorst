/**********
 * Mobile Nav Toggle
 */

const before = document.querySelector(".hamburger::before");
const after = document.querySelector(".hamburger::after");
const hamburger = document.querySelector(".hamburger");
const toggle = document.getElementById("nav-toggle");

toggle.addEventListener("click", (e) => {
  hamburger.classList.toggle("turn");
});

/**********
 * Form validation
 */

let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let subjectInput = document.getElementById("subject");
let messageInput = document.getElementById("message");
const contactForm = document.getElementById("contact-form");
let messages = [];

function checkLength(input, callback) {
  let message = input.value.trim();
  if (!typeof message == String) {
    return callback(input, "must be a string");
  }
  if (message === "") {
    return callback(input, "cannot be empty");
  }
  if (message.length < 3) {
    return callback(input, "length too short");
  }
  if (message.length > 14) {
    return callback(input, "length too long");
  }
}

function pushMessage(input, message) {
  messages.push(message);
  input.nextElementSibling.classList.add("fadeIn");
  input.nextElementSibling.textContent = message;
  setTimeout(() => {
    input.nextElementSibling.classList.remove("fadeIn");
  }, 3000);
}

function init() {
  messages = [];
  nameInput.value = "";
  emailInput.value = "";
  subjectInput.value = "";
  messageInput.value = "";
}

function clearErrors() {
  messages = [];
  document.querySelectorAll("small").forEach((el) => {
    el.classList.remove("fadeIn");
  });
}

// Check email is valid

function checkEmail(input, callback) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
  } else {
    callback(input, "Email is not valid");
  }
}

contactForm.addEventListener("submit", (e) => {
  clearErrors();
  checkLength(nameInput, pushMessage);
  checkLength(emailInput, pushMessage);
  checkLength(subject, pushMessage);
  checkEmail(emailInput, pushMessage);
  checkLength(messageInput, pushMessage);
  console.log(messages);
  if (messages.length > 0) {
    e.preventDefault();
  }
});

init();
