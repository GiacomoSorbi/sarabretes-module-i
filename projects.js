function toggleOptions(target) {
  let filterId = target.id;
  let filterItems = document.querySelectorAll("." + filterId);
  for (let i = 0; i < filterItems.length; i++) {
    if (target.checked) {
      filterItems[i].style.display = "inline-block";
    } else {
      filterItems[i].style.display = "none";
    }
  }
}

function selectFilter(target) {
  let filterOptions = document.getElementsByClassName("filterOptions");
  let selectAllOption = document.getElementById("all");
  let count = 0;
  for (let i = 0; i < filterOptions.length; i++) {
    if (filterOptions[i].checked === true) {
      count++;
    }
  }
  if (count === filterOptions.length) {
    selectAllOption.checked = true;
  } else {
    selectAllOption.checked = false;
  }
  toggleOptions(target);
}

function selectAll(target) {
  let filterOptions = document.getElementsByClassName("filterOptions");
  for (let i = 0; i < filterOptions.length; i++) {
    filterOptions[i].checked = target.checked;
    toggleOptions(filterOptions[i]);
  }
}

function filterWorkItems(tag) {
  let tagId = tag.id;
  let workItems = document.getElementsByClassName("work");
  let countDisplayed = 0;
  let nothingToShow = document.getElementById("nothingToShow");

  for (let i = 0; i < workItems.length; i++) {
    if (workItems[i].classList.contains(tagId)) {
      workItems[i].style.display = "block";
      countDisplayed++;
    } else {
      workItems[i].style.display = "none";
    }
  }
  if (countDisplayed > 0) {
    nothingToShow.style.display = "none";
  } else {
    nothingToShow.style.display = "block";
  }
}
