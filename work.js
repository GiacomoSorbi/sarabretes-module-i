function showOptions() {
    let options = document.getElementsByClassName("filterOptions");
    let projectAreaSection = document.getElementById("ProjectArea");
    let toolsUsedSection = document.getElementById("toolsUsed")




    for (let i = 0; i < options.length; i++) {
        if (options[i].checked === true) {
            switch (options[i].id) {
                case 'area':
                    projectAreaSection.style.display = "block";
                    break;
                case 'tools':
                    toolsUsedSection.style.display = "block";
                    break;

                //question: if all the switch statments are true, meaning all checkboxes are seleted, how do I add that in the switch? 

            }


        }

    }



















