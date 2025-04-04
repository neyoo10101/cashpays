// Form handling
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const rememberMe = document.querySelector('.remember-me input[type="checkbox"]').checked;

        // Add your login logic here
        console.log('Login attempt:', { email, password, rememberMe });
        
        // For demo purposes, redirect to dashboard
        // window.location.href = 'dashboard.html';
    });
}

if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const terms = document.querySelector('.terms input[type="checkbox"]').checked;

        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        // Add your registration logic here
        console.log('Registration attempt:', { fullName, email, password, terms });
        
        // For demo purposes, redirect to login
        // window.location.href = 'login.html';
    });
}

// Password visibility toggle
document.querySelectorAll('input[type="password"]').forEach(input => {
    const toggleBtn = document.createElement('button');
    toggleBtn.type = 'button';
    toggleBtn.className = 'password-toggle';
    toggleBtn.innerHTML = '👁️';
    toggleBtn.style.position = 'absolute';
    toggleBtn.style.right = '1rem';
    toggleBtn.style.top = '50%';
    toggleBtn.style.transform = 'translateY(-50%)';
    toggleBtn.style.background = 'none';
    toggleBtn.style.border = 'none';
    toggleBtn.style.color = 'var(--gray-color)';
    toggleBtn.style.cursor = 'pointer';
    
    input.parentElement.style.position = 'relative';
    input.parentElement.appendChild(toggleBtn);
    
    toggleBtn.addEventListener('click', () => {
        input.type = input.type === 'password' ? 'text' : 'password';
        toggleBtn.innerHTML = input.type === 'password' ? '👁️' : '👁️‍🗨️';
    });
});
