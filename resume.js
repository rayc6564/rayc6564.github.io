document.getElementById('menu-btn').addEventListener('click', function() {
    const dropdown = document.querySelector('.dropdown-btns');
    if (dropdown.style.display === 'flex') {
        dropdown.style.display = 'none';
    } else {
        dropdown.style.display = 'flex';
    }
});
