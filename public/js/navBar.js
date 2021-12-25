let arrayOfNavbarDropdownElements = document.getElementsByClassName("nav-link dropdown-toggle");

for (const item of arrayOfNavbarDropdownElements) {
    item.addEventListener("mouseenter", () => {
        item.click();
    })
    item.nextElementSibling.addEventListener("mouseleave", () => {
        item.nextElementSibling.classList.remove("show")
    })
}