document.getElementById('menu-btn').addEventListener('click', function() {
    const dropdown = document.querySelector('.dropdown-btns');
    if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
    } else {
        dropdown.style.display = 'block';
    }
});