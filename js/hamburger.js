const hamburger = document.getElementById("hamburger");
const navigation = document.getElementById("navigation");
const navigationButtons = document.getElementById("navigation");

hamburger.addEventListener("click", () => {
  navigation.classList.toggle("show");
});

navigationButtons.addEventListener("click", () => {
  navigation.classList.remove("show");
});
