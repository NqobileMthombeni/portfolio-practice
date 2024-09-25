// Dark Mode Toggle Script
const toggleButton = document.getElementById('mode-toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
  body.classList.toggle('light-mode');

  // Change the button icon based on the mode
  toggleButton.textContent = body.classList.contains('light-mode') ? '🌞' : '🌙'; // Switch icons
});

const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x'); // Toggle the icon class
    navbar.classList.toggle('open'); // Toggle the navbar visibility
});
