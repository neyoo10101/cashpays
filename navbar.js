document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.header.navbar');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const dropdowns = document.querySelectorAll('.dropdown');

    // Ensure navbar is visible
    navbar.style.display = 'flex';
    navbar.style.visibility = 'visible';
    navbar.style.opacity = '1';

    // Navbar scroll behavior
    function handleScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    }

    // Add smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const headerOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });

                    // Close mobile menu after clicking
                    if (navbarCollapse.classList.contains('show')) {
                        navbarToggler.click();
                    }
                }
            }
        });
    });

    // Enhanced dropdown behavior
    dropdowns.forEach(dropdown => {
        const dropdownToggle = dropdown.querySelector('.nav-link');
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');

        // Handle hover on desktop
        if (window.innerWidth > 991) {
            dropdown.addEventListener('mouseenter', () => {
                dropdownMenu.classList.add('show');
            });

            dropdown.addEventListener('mouseleave', () => {
                dropdownMenu.classList.remove('show');
            });
        }

        // Handle click on mobile
        dropdownToggle.addEventListener('click', (e) => {
            if (window.innerWidth <= 991) {
                e.preventDefault();
                dropdownMenu.classList.toggle('show');
            }
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
                menu.classList.remove('show');
            });
        }
    });

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Initialize scroll state
    handleScroll();
});