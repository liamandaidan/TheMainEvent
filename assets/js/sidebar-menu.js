(function() {
  "use strict"; // Start of use strict

  var menuToggle = document.querySelector('.menu-toggle');
  var sidebar = document.querySelector('#sidebar-wrapper');
  
  if (menuToggle) {
    // Closes the sidebar menu
    menuToggle.addEventListener('click', function(e) {
      e.preventDefault();

      sidebar.classList.toggle('active');
      menuToggle.classList.toggle('active');
      
      var icon = menuToggle.querySelector('.fa-bars, .fa-times');
      
      if (icon) {
        if (icon.classList.contains('fa-times')) {
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        } else if (icon.classList.contains('fa-bars')) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-times');
        }
      }

    });
  }

  var navbarCollapse = document.querySelector('.navbar-collapse');

  if (navbarCollapse) {
    var navbarItems = navbarCollapse.querySelectorAll('a');

    // Closes responsive menu when a scroll trigger link is clicked
    for (var item of navbarItems) {
      item.addEventListener('click', function (event) {
        sidebar.classList.remove('active');
        menuToggle.classList.remove('active');
        
        var icon = menuToggle.querySelector('.fa-bars, .fa-times');
      
        if (icon) {
          if (icon.classList.contains('fa-times')) {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
          } else if (icon.classList.contains('fa-bars')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
          }
        }
      });
    }
  }

  // Scroll to top button appear
  var scrollToTop = document.querySelector('.scroll-to-top');
  
  if (scrollToTop) {
    
    // Scroll to top button appear
    window.addEventListener('scroll', function() {
      var scrollDistance = window.pageYOffset;

      if (scrollDistance > 100) {
        scrollToTop.style.display = 'block';
      } else {
        scrollToTop.style.display = 'none';
      }
    });
  }
})(); // End of use strict
