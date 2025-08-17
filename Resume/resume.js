const menuBtn = document.getElementById('menu-btn');
const dropdown = document.querySelector('.dropdown-btns');

menuBtn.addEventListener('click', () => {
    dropdown.classList.toggle('show');
});

window.addEventListener('click', (e) => {
    if (!menuBtn.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.remove('show');
    }
});
