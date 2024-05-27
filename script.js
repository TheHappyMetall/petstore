// Burger
const burgerBtn = document.querySelector(".burger-cont");
const closeBurgerBtn = document.querySelector(".close-burger");
const navItems = document.querySelector(".nav-items");

burgerBtn.addEventListener("click", () => {
  navItems.classList.add("nav-items-open");
});

closeBurgerBtn.addEventListener("click", () => {
  navItems.classList.remove("nav-items-open");
});
