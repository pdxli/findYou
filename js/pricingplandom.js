const pricings = document.querySelectorAll(".pricing");
const priceBtns = document.querySelectorAll(".pricebutton");
const pricingTry = document.querySelectorAll(".pricingtry");

priceBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    removeClasses();
    btn === priceBtns[0] ? addClasses(0) : addClasses(1);
  });
});

function removeClasses() {
  pricings.forEach((pricing) => {
    pricing.classList.remove("active", "blueact", "redact");
    pricing.classList.add("unactive");
  });
  pricingTry.forEach((pricTry) => {
    pricTry.textContent = "Try 30 Days Free";
    pricTry.classList.remove("bolder");
  });
}

function addClasses(x) {
  pricings[x].classList.remove("unactive");
  pricings[x].classList.add("active");
  pricingTry[x].textContent = "PAKIET ZOSTAL WYBRANY!";
  pricingTry[x].classList.add("bolder");
  x === 0
    ? pricings[x].classList.add("blueact")
    : pricings[x].classList.add("redact");
}
