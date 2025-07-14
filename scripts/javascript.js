
var typed = new Typed('#element', {
  strings: ['Now powered by<br><i><span class="technology-text">Technology...</span></i>'],
  typeSpeed: 70,
});

document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuLinks = document.querySelectorAll('.right ul li a');

  function toggleMenu() {
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('active');
  }

  function closeMenu() {
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('active');
  }

  // Toggle menu on hamburger click
  hamburger.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      toggleMenu();
  });

  // Close menu when clicking on links
  menuLinks.forEach(link => {
      link.addEventListener('click', function() {
          closeMenu();
      });
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
      if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
          closeMenu();
      }
  });
});

