
function showOptions(e) {
    let options = document.getElementsByClassName("filterOptions");
    let projectAreaSection = document.getElementById("ProjectArea");
    let toolsUsedSection = document.getElementById("toolsUsed")

    console.log(e);


    for (let i = 0; i < options.length; i++) {
        if (options[i].checked === true) {
            switch (options[i].id) {
                case 'area':
                    projectAreaSection.style.display = "block";
                    break;
                case 'tools':
                    toolsUsedSection.style.display = "block";
                    break;
                // questions: if all the swiches above are true, how can I add another case that matches that?
                // how can I see the tick/untick display immediately? currently if I untick a box the div is still there

            }
        }


    }






}






let checkOptions = [
    {
        name: "Project Area",
        id: "area"
    },
    {
        name: "tools",
        id: "area",
    },
    {
        name: "all",
        id: "all"
    }
];





    // if (options[0].checked) {
    //    
    // } if (options[1].checked) {
    //     toolsUsedSection.style.display = "block";
    // } if (projects[0].checked || projects[1].checked) {
    //     projectAreaSection.style.display = "block"
    //     toolsUsedSection.style.display = "block";
    // }
