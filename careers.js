// Job listings data
const jobListings = [
    {
        title: 'Senior Full Stack Developer',
        department: 'engineering',
        location: 'San Francisco, CA',
        type: 'Full-time',
        description: 'Join our engineering team to build and scale our financial technology platform.'
    },
    {
        title: 'Product Manager',
        department: 'product',
        location: 'Remote',
        type: 'Full-time',
        description: 'Lead product strategy and development for our core banking solutions.'
    },
    {
        title: 'UI/UX Designer',
        department: 'design',
        location: 'New York, NY',
        type: 'Full-time',
        description: 'Create beautiful and intuitive user experiences for our financial products.'
    },
    {
        title: 'Marketing Manager',
        department: 'marketing',
        location: 'Remote',
        type: 'Full-time',
        description: 'Drive growth and brand awareness for CashPays.'
    }
];

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    // Populate job listings
    displayJobs('all');

    // Set up filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active state
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter jobs
            const department = button.getAttribute('data-department');
            displayJobs(department);
        });
    });

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
});

// Display filtered jobs
function displayJobs(department) {
    const positionsGrid = document.querySelector('.positions-grid');
    const filteredJobs = department === 'all' 
        ? jobListings 
        : jobListings.filter(job => job.department === department);

    positionsGrid.innerHTML = filteredJobs.map(job => createJobCard(job)).join('');
    
    // Add event listeners to apply buttons
    document.querySelectorAll('.apply-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const jobTitle = e.target.getAttribute('data-job-title');
            handleJobApplication(jobTitle);
        });
    });
}

// Create job card HTML
function createJobCard(job) {
    return `
        <div class="position-card" data-department="${job.department}">
            <h3>${job.title}</h3>
            <div class="position-info">
                <span><i class="fas fa-map-marker-alt"></i> ${job.location}</span>
                <span><i class="fas fa-clock"></i> ${job.type}</span>
            </div>
            <p>${job.description}</p>
            <button class="apply-btn" data-job-title="${job.title}">Apply Now</button>
        </div>
    `;
}

// Handle job application
function handleJobApplication(jobTitle) {
    // This is a placeholder function - replace with actual application handling
    alert(`Thank you for your interest in the ${jobTitle} position. Please send your resume to careers@cashpays.com`);
}

// Add animation on scroll
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.benefit-card, .position-card, .process-step');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight * 0.8) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
});
