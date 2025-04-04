// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Enhanced header scroll behavior
const header = document.querySelector('.navbar');
let lastScrollY = window.scrollY;
let scrollTimer;

function handleScroll() {
    const currentScrollY = window.scrollY;
    
    // Add/remove scrolled class with blur effect
    if (currentScrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    // Hide/show header on scroll with smooth transition
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }
    
    lastScrollY = currentScrollY;
}

// Optimized scroll event listener with debouncing
window.addEventListener('scroll', () => {
    if (!scrollTimer) {
        scrollTimer = setTimeout(() => {
            requestAnimationFrame(handleScroll);
            scrollTimer = null;
        }, 10);
    }
}, { passive: true });

// Intersection Observer for animated elements
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -20% 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all feature sections for animation
document.querySelectorAll('.feature-section').forEach(section => {
    observer.observe(section);
});

// Enhanced mobile navigation
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

navbarToggler.addEventListener('click', () => {
    navbarCollapse.classList.toggle('show');
    document.body.classList.toggle('nav-open');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (navbarCollapse.classList.contains('show') && 
        !e.target.closest('.navbar-collapse') && 
        !e.target.closest('.navbar-toggler')) {
        navbarCollapse.classList.remove('show');
        document.body.classList.remove('nav-open');
    }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navbarCollapse.classList.remove('show');
        document.body.classList.remove('nav-open');
    });
});

// Add hover effect to feature images
document.querySelectorAll('.feature-image').forEach(image => {
    image.addEventListener('mouseenter', () => {
        image.style.transform = 'scale(1.02) translateY(-10px)';
    });
    
    image.addEventListener('mouseleave', () => {
        image.style.transform = 'scale(1) translateY(0)';
    });
});

// Color theme is now static

// Modal handling
const modal = document.getElementById('loginModal');
const loginBtn = document.querySelector('.login-btn');

const openModal = () => {
    modal.classList.add('show');
    document.body.classList.add('modal-open');
};

const closeModal = () => {
    modal.classList.remove('show');
    document.body.classList.remove('modal-open');
};

loginBtn.addEventListener('click', openModal);

// Close modal on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
        closeModal();
    }
});

// Prevent form submission (for demo)
const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your login logic here
});

// Handle checkbox state
const rememberMeCheckbox = document.querySelector('.remember-me input[type="checkbox"]');
rememberMeCheckbox.addEventListener('change', (e) => {
    e.target.classList.toggle('checked');
});

// Button click handlers
document.querySelector('.get-started-btn').addEventListener('click', () => {
    // Add sign up functionality
    console.log('Get Started clicked');
});

document.querySelector('.cta-button').addEventListener('click', () => {
    // Add call-to-action functionality
    console.log('CTA clicked');
});

// Remove everything below this line