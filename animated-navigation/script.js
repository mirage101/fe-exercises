const toggle = document.getElementById('toggle');
const nav = document.getElementById('nav');

toggle.addEventListener('click', (e) => {
    e.preventDefault();
    nav.classList.toggle('active');
})