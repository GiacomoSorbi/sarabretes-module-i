
let sectionFilters = document.getElementsByClassName("filterItem");
function showOptions(e) {
  // console.log(e.id);
  let filterId = e.id;
  let filterItems = document.querySelectorAll("." + filterId);
  //console.log(filterId, filterItems);
  for (let i = 0; i < filterItems.length; i++) {
    if (e.checked) {
      filterItems[i].style.display = "inline-block";
    } else {
      filterItems[i].style.display = "none";
    }
  }

}


function selectAll() {
  let filters = document.getElementsByClassName("filterOptions");
  let checked = [];


  let pink = document.getElementById('all')

  for (let i = 0; i < filters.length; i++) {
    if (filters[i].checked) {
      checked.push(filters[i]);

    }
    if ((checked.length) != filters.length) {
      for (let a = 0; a < sectionFilters.length; a++) {
        sectionFilters[a].style.display = "inline-block";
      }

    }

  }

}