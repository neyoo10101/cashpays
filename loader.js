document.addEventListener('DOMContentLoaded', () => {
    const loaderContainer = document.querySelector('.loader-container');
    
    // Hide loader when page is fully loaded
    window.addEventListener('load', () => {
        loaderContainer.classList.add('hidden');
        
        // Remove loader from DOM after animation completes
        setTimeout(() => {
            loaderContainer.remove();
        }, 500);
    });
});