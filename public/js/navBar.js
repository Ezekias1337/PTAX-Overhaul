let arrayOfNavbarDropdownElements = document.getElementsByClassName("nav-link dropdown-toggle");

/* 
    Need to add unique ids to navbar dropdowns, then check the id in code,
    when mousing over dropdown triggerer and over the dropdown list,
    and if id is not the same then hide the dropdown
*/


for (const item of arrayOfNavbarDropdownElements) {
    item.addEventListener("mouseenter", () => {
        item.click();
        //item.nextElementSibling.classList.add("show");
    })
    item.nextElementSibling.addEventListener("mouseleave", () => {
        /* 
            without this part the navbar was allowing several dropdowns to display
            when the mouse is moved rapidly horizontally
        */
        let arrayOfElementsWithShow = document.querySelectorAll("ul.show")
        for(const nestedItem of arrayOfElementsWithShow) {
            console.log(nestedItem)
            nestedItem.classList.remove("show");
        }
        
    })
    item.addEventListener("mouseleave", () => {
        let arrayOfElementsWithShow = document.querySelectorAll("ul.show")
        if(arrayOfElementsWithShow?.length > 1) {
            for(let i = 1; i < arrayOfElementsWithShow.length; i ++) {
                arrayOfElementsWithShow[i].classList.remove("show");
            }
        }
    })
}