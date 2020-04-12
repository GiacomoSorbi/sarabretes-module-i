function toggleNav() {
  let burger = document.querySelector(".fa-bars");
  let nav = document.querySelector(".menus");
  const navLinks = document.querySelectorAll(".menus li");

  burger.addEventListener("click", function () {
    nav.classList.toggle("menusActive");
  });
}
toggleNav();
