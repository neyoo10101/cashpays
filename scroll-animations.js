document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
                observer.unobserve(entry.target); // Stop observing once revealed
            }
        });
    }, {
        threshold: 0.1 // Trigger when at least 10% of the element is visible
    });

    // Observe all elements with scroll-animate class
    document.querySelectorAll('.scroll-animate').forEach(element => {
        observer.observe(element);
    });

    // Add scroll-animate class to feature sections
    document.querySelectorAll('.feature-section').forEach(section => {
        if (!section.classList.contains('scroll-animate')) {
            section.classList.add('scroll-animate');
            observer.observe(section);
        }
    });
});