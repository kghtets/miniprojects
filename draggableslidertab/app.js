const tabsBox = document.querySelector(".tabs-box"),
arrowIcons = document.querySelectorAll(".icon i");


let isDragging = false;

const handleIcons = () => {
    let scrollVal = Math.round(tabsBox.scrollLeft);
    let maxScrollableWidth = tabsBox.scrollWidth - tabsBox.clientWidth;
    console.log(maxScrollableWidth, scrollVal);
    arrowIcons[0].parentElement.style.display = scrollVal > 0 ? "flex" : "none";
    arrowIcons[1].parentElement.style.display = maxScrollableWidth > scrollVal ? "flex" : "none";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        // console.log(icon.id);
        // if clicked icon is left, reduce 350 from tabsBox scrollLeft else add
        tabsBox.scrollLeft += icon.id === "left" ? -350 : 350;
        setTimeout(() => handleIcons(), 50); // calling handleIcons after 50 milliseconds
    });
});

const dragging = (e) => {
    if(!isDragging) return;
    // console.log(isDragging);
    tabsBox.classList.add("dragging");
    tabsBox.scrollLeft -= e.movementX;
}

const dragStop = () => {
    isDragging = false;
    tabsBox.classList.remove("dragging");
}

tabsBox.addEventListener("mousedown", () => isDragging = true);
tabsBox.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);