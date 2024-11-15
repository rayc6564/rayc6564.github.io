const skillBtn = document.getElementById("skill-btn");
const educationBtn = document.getElementById("education-btn");

const gtContainer = document.querySelector(".gt-container");
const skillsToolsContainer = document.querySelector(".skills-tools-container");

const educationText = document.getElementById("education-text");

const hide = ()=>{
    gtContainer.classList.toggle("hidden");
    educationText.classList.toggle("hidden");
    skillBtn.classList.toggle("hidden");
    educationBtn.classList.toggle("hidden");
    skillsToolsContainer.classList.toggle("hidden");
}

skillBtn.addEventListener("click", () =>{
    hide();
});

educationBtn.addEventListener("click", () =>{
    hide();
})

document.getElementById('menu-btn').addEventListener('click', function() {
    const dropdown = document.querySelector('.dropdown-btns');
    if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
    } else {
        dropdown.style.display = 'block';
    }
});