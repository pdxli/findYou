const emailInput = document.getElementById("emailField");
const submitBtn = document.getElementById("submitsug");
var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,4}$/;

emailInput.addEventListener("input", () => {
  emailInput.classList.remove("emailSuccess");
  emailInput.classList.remove("emailError");
  if (emailInput.value.length > 0) {
    emailInput.classList.add("emailError");
    if (emailInput.value.match(pattern)) {
      emailInput.classList.remove("emailError");
      emailInput.classList.add("emailSuccess");
    }
  }
});

function validateForm() {
  if (emailInput.value.match(pattern)) {
    alert("Twoje konto zostało założone poprawnie!");
    return true;
  }
  alert("Błąd");
  return false;
}
