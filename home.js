document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.navMenu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active'); // Toggle the 'active' class on menu
    });
});












document.getElementById("year").textContent = new Date().getFullYear();