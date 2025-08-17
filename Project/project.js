const menuBtn = document.getElementById('menu-btn');
const dropdown = document.querySelector('.dropdown-btns');

menuBtn.addEventListener('click', () => {
    dropdown.classList.toggle('show'); 
    
    const expanded = menuBtn.getAttribute('aria-expanded') === 'true' || false;
    menuBtn.setAttribute('aria-expanded', !expanded);
});
