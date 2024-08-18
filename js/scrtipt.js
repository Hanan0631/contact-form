const button = document.querySelector("button");
const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const emailInput = document.getElementById("email");
const generalEnquiry = document.getElementById("general-enquiry");
const supportRequest = document.getElementById("support-request");
const queryType = document.querySelector(".query-type").querySelectorAll("div");
const messageInput = document
  .querySelector(".message-container")
  .querySelector("div");
const consentInput = document.querySelector(".consent");
const successMessage = document.querySelector(".toast-message");

const lastNameError = document.querySelector(".last-name-error");
const emailError = document.querySelector(".email-error");
const emailValidationError = document.querySelector(".email-validation-error");
const firstNameError = document.querySelector(".first-name-error");
const queryTypeError = document.querySelector(".query-type-error");
const messageError = document.querySelector(".message-error");
const consentError = document.querySelector(".consent-error");

firstNameInput.onpaste = (event) => {
  event.preventDefault();
};

lastNameInput.onpaste = (event) => {
  event.preventDefault();
};

emailInput.onpaste = (event) => {
  event.preventDefault();
};

messageInput.onpaste = (event) => {
  event.preventDefault();
};

const validateEmail = (email) => {
  const regex = /^[\w_\.]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/;
  return regex.test(email);
};

const submitHandler = () => {
  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;
  const email = emailInput.value;
  const message = messageInput.innerText;
  firstNameError.style.display = "none";
  lastNameError.style.display = "none";
  emailError.style.display = "none";
  emailValidationError.style.display = "none";
  queryTypeError.style.display = "none";
  messageError.style.display = "none";
  consentError.style.display = "none";
  firstNameInput.style.borderColor = "hsl(186, 15%, 59%)";
  lastNameInput.style.borderColor = "hsl(186, 15%, 59%)";
  emailInput.style.borderColor = "hsl(186, 15%, 59%)";
  messageInput.style.borderColor = "hsl(186, 15%, 59%)";

  if (!firstName) {
    firstNameError.style.display = "block";
    firstNameInput.style.borderColor = "hsl(0, 66%, 54%)";
  }
  if (!lastName) {
    lastNameError.style.display = "block";
    lastNameInput.style.borderColor = "hsl(0, 66%, 54%)";
  }
  if (!email) {
    emailError.style.display = "block";
    emailInput.style.borderColor = "hsl(0, 66%, 54%)";
  } else if (!validateEmail(email)) {
    emailValidationError.style.display = "block";
    emailInput.style.borderColor = "hsl(0, 66%, 54%)";
  }
  if (!generalEnquiry.checked && !supportRequest.checked)
    queryTypeError.style.display = "block";
  if (!message) {
    messageError.style.display = "block";
    messageInput.style.borderColor = "hsl(0, 66%, 54%)";
  }
  if (!consentInput.children[0].checked) {
    consentError.style.display = "block";
  }
  if (
    firstName &&
    lastName &&
    email &&
    validateEmail(email) &&
    (generalEnquiry.checked || supportRequest.checked) &&
    message &&
    consentInput.children[0].checked
  ) {
    successMessage.style.display = "block";
  }
};

const queryTypeHandler = (event) => {
  queryType.forEach((div) => (div.style.backgroundColor = "hsl(0, 0%, 100%)"));
  if (event.target.tagName === "INPUT") {
    if (!event.target.checked) event.target.checked = true;
    event.target.parentElement.style.backgroundColor = "hsl(148, 38%, 91%)";
  } else {
    if (!event.target.children[0].checked)
      event.target.children[0].checked = true;
    event.target.style.backgroundColor = "hsl(148, 38%, 91%)";
  }
};

const consentHandler = (event) => {
  if (event.target.tagName === "DIV") {
    event.target.children[0].checked = !event.target.children[0].checked;
  } else if (event.target.tagName === "P") {
    event.target.parentElement.children[0].checked =
      !event.target.parentElement.children[0].checked;
  }
};

button.addEventListener("click", submitHandler);
consentInput.addEventListener("click", consentHandler);
queryType.forEach((query) => query.addEventListener("click", queryTypeHandler));
