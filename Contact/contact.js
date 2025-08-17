const menuBtn = document.getElementById('menu-btn');
const dropdown = document.querySelector('.dropdown-btns');

menuBtn.addEventListener('click', () => {
    dropdown.classList.toggle('hidden');
});
