

document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;
  
    menuIcon.addEventListener('click', () => {
      navbar.classList.toggle('open'); // Toggle the 'open' class to show/hide navbar
  });

  
  
    // Function to set the active link
    const setActiveLink = (event) => {
      const links = document.querySelectorAll('.navbar a');
      links.forEach(link => {
        link.classList.remove('active'); // Remove active class from all links
      });
      event.target.classList.add('active'); // Add active class to the clicked link
    };
  
    // Attach click event to each navbar link
    const navbarLinks = document.querySelectorAll('.navbar a');
    navbarLinks.forEach(link => {
      link.addEventListener('click', setActiveLink);
    });
  
    // Dark mode toggle functionality
    darkModeToggle.addEventListener('click', () => {
      body.classList.toggle('dark-mode'); // Toggle dark mode class
      // Save the user's preference in localStorage
      if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.setItem('theme', 'light');
      }
    });
  
    // Load theme preference from localStorage or system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
      }
    } else {
      // If no preference saved, use system preference
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        body.classList.add('dark-mode');
      }
    }
  });
  
  // Cursor Movement
  document.addEventListener('mousemove', (e) => {
    const cursor = document.getElementById('neon-cursor');
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  });
  
  
// Theme toggle functionality
document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  // Check for saved theme preference, otherwise use system preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    body.classList.toggle('dark-mode', savedTheme === 'dark');
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    body.classList.toggle('dark-mode', prefersDark);
  }

  // Toggle theme
  themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Save preference
    localStorage.setItem('theme', 
      body.classList.contains('dark-mode') ? 'dark' : 'light'
    );
  });
});