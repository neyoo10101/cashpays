// Form validation and submission handling
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };

            // Basic form validation
            if (!validateForm(formData)) {
                return;
            }

            // Show loading state
            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalBtnText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            try {
                // Simulate form submission (replace with actual API endpoint)
                await simulateFormSubmission(formData);
                
                // Show success message
                showNotification('Message sent successfully!', 'success');
                
                // Reset form
                contactForm.reset();
            } catch (error) {
                // Show error message
                showNotification('Failed to send message. Please try again.', 'error');
            } finally {
                // Reset button state
                submitBtn.textContent = originalBtnText;
                submitBtn.disabled = false;
            }
        });
    }
});

// Form validation
function validateForm(formData) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!formData.name.trim()) {
        showNotification('Please enter your name.', 'error');
        return false;
    }
    
    if (!emailRegex.test(formData.email)) {
        showNotification('Please enter a valid email address.', 'error');
        return false;
    }
    
    if (!formData.subject.trim()) {
        showNotification('Please enter a subject.', 'error');
        return false;
    }
    
    if (!formData.message.trim()) {
        showNotification('Please enter your message.', 'error');
        return false;
    }
    
    return true;
}

// Notification system
function showNotification(message, type) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Add notification to page
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Simulate form submission (replace with actual API call)
function simulateFormSubmission(formData) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Form submitted:', formData);
            resolve();
        }, 1000);
    });
}

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
