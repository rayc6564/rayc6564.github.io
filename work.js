const chopsticksBtn = document.querySelector(".chopsticks-container");
const chopsticksHideContainer = document.querySelector(".chopsticks-container-hide");

const petBtn = document.querySelector(".pet-container");
const petHideContainer = document.querySelector(".pet-container-hide");

const cleaningBtn = document.querySelector(".cleaning-container");
const cleaningHideContainer = document.querySelector(".cleaning-container-hide");


chopsticksBtn.addEventListener("click", () => {
    chopsticksBtn.classList.add("hidden");
    chopsticksHideContainer.classList.remove("hidden");
});

chopsticksHideContainer.addEventListener("click", () => {
    chopsticksBtn.classList.remove("hidden");
    chopsticksHideContainer.classList.add("hidden");
})

petBtn.addEventListener("click", () => {
    petBtn.classList.add("hidden");
    petHideContainer.classList.remove("hidden");
});

petHideContainer.addEventListener("click", () => {
    petBtn.classList.remove("hidden");
    petHideContainer.classList.add("hidden");
});

cleaningBtn.addEventListener("click", () => {
    cleaningBtn.classList.add("hidden");
    cleaningHideContainer.classList.remove("hidden");
});

cleaningHideContainer.addEventListener("click", () => {
    cleaningBtn.classList.remove("hidden");
    cleaningHideContainer.classList.add("hidden");
});

document.getElementById('menu-btn').addEventListener('click', function() {
    const dropdown = document.querySelector('.dropdown-btns');
    if (dropdown.style.display === 'flex') {
        dropdown.style.display = 'none';
    } else {
        dropdown.style.display = 'flex';
    }
});
