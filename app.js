const form = document.querySelector("#create-account-form");
const usernameInput = document.querySelector("#username");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirm-password");

form.addEventListener("submit", (e) => {
  validateForm();

  if (isFormValid() == true) {
    form.submit();
  } else {
    e.preventDefault();
  }
});

function isFormValid() {
  const inputContainers = form.querySelectorAll(".input-group");
  let result = true;
  inputContainers.forEach((container) => {
    if (container.classList.contains("error")) {
      result = false;
    }
  });
  return result;
}

function validateForm() {
  // USERNAME
  if (usernameInput.value.trim() == "") {
    setError(usernameInput, "Username can not be empty");
  } else {
    setSuccess(usernameInput);
  }
  // EMAIL
  if (emailInput.value.trim() == "") {
    setError(emailInput, "Provide email address");
  } else if (isEmailValid(emailInput.value)) {
    setSuccess(emailInput);
  } else {
    setError(emailInput, "Provide valid email address");
  }
  // PASSWORD
  if (passwordInput.value.trim() == "") {
    setError(passwordInput, "Password can not be empty");
  } else if (
    passwordInput.value.trim().length < 6 ||
    passwordInput.value.trim().length > 20
  ) {
    setError(passwordInput, "password min 6 and max 20 char");
  } else {
    setSuccess(passwordInput);
  }
  // CONFIRM PASSWORD
  if (confirmPasswordInput.value.trim() == "") {
    setError(confirmPasswordInput, "re-enter the password");
  } else if (confirmPasswordInput.value !== passwordInput.value) {
    setError(confirmPasswordInput, "passwords doesnt match");
  } else {
    setSuccess(confirmPasswordInput);
  }
}

function setError(element, errorMessage) {
  const parent = element.parentElement;
  if (parent.classList.contains("success")) {
    parent.classList.remove("success");
  }
  parent.classList.add("error");
  const paragraph = parent.querySelector("p");
  paragraph.textContent = errorMessage;
}

function setSuccess(element) {
  const parent = element.parentElement;
  if (parent.classList.contains("error")) {
    parent.classList.remove("error");
  }
  parent.classList.add("success");
}

function isEmailValid(email) {
  const reg =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reg.test(email);
}
