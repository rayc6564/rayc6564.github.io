const menuBtn = document.getElementById("menu-btn");
const dropdownBtns = document.querySelector(".dropdown-btns");

// Menu toggle (same style as About Me)
menuBtn.addEventListener("click", () => {
  const expanded = menuBtn.getAttribute("aria-expanded") === "true";
  menuBtn.setAttribute("aria-expanded", String(!expanded));
  dropdownBtns.classList.toggle("hidden");
});

// Work item toggle
document.querySelectorAll(".work-toggle").forEach(button => {
  button.addEventListener("click", () => {
    const detailsId = button.getAttribute("aria-controls");
    const details = document.getElementById(detailsId);
    const isExpanded = button.getAttribute("aria-expanded") === "true";

    button.setAttribute("aria-expanded", String(!isExpanded));
    details.classList.toggle("hidden");
  });
});
