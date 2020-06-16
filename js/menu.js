function underlineMenu() {
  const path = window.location.pathname.split("/");
  console.log(path);
  const page = path[path.length - 1];
  console.log(page);
  const menuItem = document.querySelector('[data-page="' + page + '"]');
  console.log(menuItem);
  menuItem.classList.add("currentPage");
}
