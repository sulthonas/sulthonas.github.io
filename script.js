/* navbar */
const list = document.getElementById('list');
const navbar = document.getElementById('navbar');

list.addEventListener('click', function() {
    navbar.classList.toggle('active');
});