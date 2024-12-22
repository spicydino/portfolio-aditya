document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('#menu-icon');
    const navList = document.querySelector('.navlist');

    if (menuIcon && navList) { 
        menuIcon.addEventListener('click', () => {
            menuIcon.classList.toggle('bx-x');
            navList.classList.toggle('open');
        });
    } else {
        console.error('menuIcon or navList not found in the DOM.');
    }
});
