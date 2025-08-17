const skillBtn = document.getElementById("skill-btn");
const educationBtn = document.getElementById("education-btn");
const educationSection = document.getElementById("education-section");
const skillsSection = document.getElementById("skills-section");
const menuBtn = document.getElementById("menu-btn");
const dropdownBtns = document.querySelector(".dropdown-btns");

// Toggle Skills/Education visibility
const toggleSkillsAndEducation = () => {
  educationSection.classList.toggle("hidden");
  skillsSection.classList.toggle("hidden");
  skillBtn.classList.toggle("hidden");
  educationBtn.classList.toggle("hidden");
};

[skillBtn, educationBtn].forEach(btn =>
  btn.addEventListener("click", toggleSkillsAndEducation)
);

// Toggle Menu visibility
menuBtn.addEventListener("click", () => {
  const expanded = menuBtn.getAttribute("aria-expanded") === "true";
  menuBtn.setAttribute("aria-expanded", String(!expanded));
  dropdownBtns.classList.toggle("hidden");
});
