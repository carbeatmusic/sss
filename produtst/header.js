document.addEventListener('DOMContentLoaded', function() {
    // Проверяем, существует ли элемент с классом .menu-icon
    const menuIcon = document.querySelector('.menu-icon');
    if (menuIcon) {
        menuIcon.addEventListener('click', function() {
            const menu = document.querySelector('.menu');
            if (menu) {
                menu.classList.toggle('active');
            }
        });
    }

    // Проверяем, существует ли элемент с классом .close-btn
    const closeBtn = document.querySelector('.close-btn');
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            const menu = document.querySelector('.menu');
            if (menu) {
                menu.classList.remove('active');
            }
        });
    }
});
