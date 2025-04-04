// Team members data
const teamMembers = [
    {
        name: 'John Smith',
        position: 'CEO & Founder',
        image: 'images/team/john-smith.jpg',
        bio: 'Leading innovation in financial technology'
    },
    {
        name: 'Sarah Johnson',
        position: 'CTO',
        image: 'images/team/sarah-johnson.jpg',
        bio: 'Driving technological excellence'
    },
    {
        name: 'Michael Chen',
        position: 'Head of Product',
        image: 'images/team/michael-chen.jpg',
        bio: 'Creating user-centric solutions'
    },
    {
        name: 'Emma Wilson',
        position: 'Head of Operations',
        image: 'images/team/emma-wilson.jpg',
        bio: 'Optimizing business processes'
    }
];

// Function to create team member cards with lazy loading
function createTeamMemberCard(member) {
    return `
        <div class="team-member">
            <img src="${member.image}" alt="${member.name}" loading="lazy" onerror="this.src='images/team/placeholder.jpg'">
            <div class="team-member-info">
                <h3>${member.name}</h3>
                <p class="position">${member.position}</p>
                <p class="bio">${member.bio}</p>
            </div>
        </div>
    `;
}

// Populate team section with Intersection Observer for better performance
document.addEventListener('DOMContentLoaded', () => {
    const teamGrid = document.querySelector('.team-grid');
    if (teamGrid) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    teamGrid.innerHTML = teamMembers.map(member => createTeamMemberCard(member)).join('');
                    observer.unobserve(teamGrid);
                }
            });
        }, { threshold: 0.1 });

        observer.observe(teamGrid);
    }

    // Add smooth scrolling for anchor links with requestAnimationFrame for better performance
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
                const startPosition = window.pageYOffset;
                const distance = targetPosition - startPosition;
                let startTime = null;

                function animation(currentTime) {
                    if (startTime === null) startTime = currentTime;
                    const timeElapsed = currentTime - startTime;
                    const progress = Math.min(timeElapsed / 800, 1);
                    const ease = t => t * (2 - t);
                    window.scrollTo(0, startPosition + distance * ease(progress));

                    if (progress < 1) {
                        requestAnimationFrame(animation);
                    }
                }

                requestAnimationFrame(animation);
            }
        });
    });
});
