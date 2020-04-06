function showOptions(e) {
  console.log(e.id);
  let filterId = e.id;
  let filterItems = document.querySelectorAll("." + filterId);
  console.log(filterId, filterItems);
  for (let i = 0; i < filterItems.length; i++) {
    if (e.checked) {
      filterItems[i].style.display = "block";
    } else {
      filterItems[i].style.display = "none";
    }
  }
}
