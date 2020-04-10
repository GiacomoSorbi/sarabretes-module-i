function formValidation() {
  let regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
  let name = document.getElementById("fullName").value;
  let errorName = document.getElementById("errorName");
  let regEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(?:[a-zA-Z]{2,})$/;
  let errorEmail = document.getElementById("errorEmail");
  let email = document.getElementById("email").value;
  let regPhoneNumber = /^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/;
  let errorPhone = document.getElementById("errorPhone");
  let phoneNumber = document.getElementById("phoneNumber").value;
  let messageText = document.getElementById("messageText").value;
  let errorTextMessage = document.getElementById("errorTextField");

  if (!regName.test(name)) {
    errorName.style.display = "block";
  } else {
    errorName.style.display = "none";
  }

  if (!regEmail.test(email)) {
    errorEmail.style.display = "block";
  } else {
    errorEmail.style.display = "none";
  }

  if (!regPhoneNumber.test(phoneNumber)) {
    errorPhone.style.display = "block";
  } else {
    errorPhone.style.display = "none";
  }

  if (messageText.length < 10) {
    errorTextMessage.style.display = "block";
  } else {
    errorTextMessage.style.display = "none";
  }
}

// function handle_form_submission() {
//   var e = document.getElementById("email"),
//     d = document.getElementById("error"),
//     t = document.getElementById("errorName"),
//     s = document.getElementById("name"),
//     l = document.getElementById("phone"),
//     n = document.getElementById("errorPhone");
//   /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(?:[a-zA-Z]{2,})$/.test(e.value)
//     ? (d.style.display = "none")
//     : (d.style.display = "block"),
//     "" !== s.value ? (t.style.display = "none") : (t.style.display = "block"),
//     /^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/.test(
//       l.value
//     )
//       ? (n.style.display = "none")
//       : (n.style.display = "block");
// }
