function fullNameValidation() {
  let regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
  let name = document.getElementById("fullName").value;
  let errorName = document.getElementById("errorName");
  let fullNameIsValid = regName.test(name);

  if (fullNameIsValid) {
    errorName.style.display = "none";
  } else {
    errorName.style.display = "block";
  }
  return fullNameIsValid;
}

function emailValidation() {
  let regEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(?:[a-zA-Z]{2,})$/;
  let errorEmail = document.getElementById("errorEmail");
  let email = document.getElementById("email").value;
  let emailIsValid = regEmail.test(email);

  if (emailIsValid) {
    errorEmail.style.display = "none";
  } else {
    errorEmail.style.display = "block";
  }
  return emailIsValid;
}

function phoneValidation() {
  let regPhoneNumber = /^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/;
  let errorPhone = document.getElementById("errorPhone");
  let phoneNumber = document.getElementById("phoneNumber").value;
  let phoneNumberIsValid = regPhoneNumber.test(phoneNumber);
  if (phoneNumberIsValid) {
    errorPhone.style.display = "none";
  } else {
    errorPhone.style.display = "block";
  }
  return phoneNumberIsValid;
}

function messageValidation() {
  let messageText = document.getElementById("messageText").value;
  let errorTextMessage = document.getElementById("errorTextField");
  let messageIsValid = messageText.length < 10;

  if (messageIsValid) {
    errorTextMessage.style.display = "none";
  } else {
    errorTextMessage.style.display = "block";
  }
  return messageIsValid;
}

function fullFormValidation() {
  if (
    fullNameValidation() &&
    emailValidation() &&
    phoneValidation() &&
    messageValidation()
  ) {
    console.log("form Submited");
  } else {
    console.log("there was a problem with your form");
  }
}
