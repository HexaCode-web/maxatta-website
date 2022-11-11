const navItems = Array.from(document.querySelectorAll(".ListItem"));
const focusEL = document.querySelector(".outline");
navItems.forEach((item) => {
  item.addEventListener("mouseover", () => {
    focusEL.classList.remove("inactive");
    item.appendChild(focusEL);
  });
  item.addEventListener("mouseout", () => {
    focusEL.classList.add("inactive");
  });
});
const navItems2 = Array.from(document.querySelectorAll(".SecondListItems"));
const focusEL2 = document.querySelector(".SecondOutline");
navItems2.forEach((item) => {
  item.addEventListener("mouseover", () => {
    focusEL2.classList.remove("inactive");
    item.appendChild(focusEL2);
  });
  item.addEventListener("mouseout", () => {
    focusEL2.classList.add("inactive");
  });
});
