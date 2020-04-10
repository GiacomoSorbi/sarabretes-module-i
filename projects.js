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

function filterTags(tag) {
  let tagId = tag.id;
  let tags = document.getElementsByClassName("work");
  let arr = [];
  for (let i = 0; i < tags.length; i++) {
    if (tags[i].classList.contains(tagId)) {
      arr.push(tags[i]);
    }
  }
  filterTagsStyle(arr);
}

function filterTagsStyle(arr) {
  let tags = document.getElementsByClassName("work");
  let workRow = document.getElementsByClassName("workRow");
  if (arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      arr[i].style.display = "block";
    }
  } else {
    for (let i = 0; i < tags.length; i++) {
      tags[i].style.display = "none";
    }
  }
}

// function filterTags(tag) {
//   let tagId = tag.id;
//   let tags = document.getElementsByClassName("work");
//
//   for (let i = 0; i < tags.length; i++) {
//     if (tags[i].classList.contains(tagId)) {
//       tags[i].style.display = "block";
//     } else {
//       tags[i].style.display = "none";
//     }
//   }
// }
