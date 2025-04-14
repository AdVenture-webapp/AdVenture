// DOM Elements
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const togglePasswordBtns = document.querySelectorAll('.toggle-password');
const passwordStrength = document.querySelector('.password-strength .strength-bar');
const passwordStrengthLabel = document.querySelector('.password-strength .strength-label span');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Toggle password visibility
    togglePasswordBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const input = this.parentElement.querySelector('input');
            const icon = this.querySelector('i');
            
            if (input.type === 'password') {
                input.type = 'text';
                icon.classList.replace('fa-eye', 'fa-eye-slash');
                this.setAttribute('aria-label', 'Hide password');
            } else {
                input.type = 'password';
                icon.classList.replace('fa-eye-slash', 'fa-eye');
                this.setAttribute('aria-label', 'Show password');
            }
        });
    });
    
    // Password strength indicator
    const passwordInput = document.getElementById('registerPassword');
    if (passwordInput) {
        passwordInput.addEventListener('input', function() {
            const strength = calculatePasswordStrength(this.value);
            updatePasswordStrength(strength);
        });
    }
    
    // Form submissions
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    if (registerForm) {
        registerForm.addEventListener('submit', handleRegister);
    }
});

// Handle login
function handleLogin(e) {
    e.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    // Simple validation
    if (!email || !password) {
        alert('Please fill in all fields');
        return;
    }
    
    // In a real app, you would send this to your backend
    console.log('Login attempt with:', { email, password });
    
    // Simulate successful login
    alert('Login successful! Redirecting to dashboard...');
    // window.location.href = 'dashboard.html';
}

// Handle registration
function handleRegister(e) {
    e.preventDefault();
    
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const accountType = document.getElementById('accountType').value;
    const agreeTerms = document.getElementById('agreeTerms').checked;
    
    // Validation
    if (!firstName || !lastName || !email || !password || !accountType) {
        alert('Please fill in all required fields');
        return;
    }
    
    if (!agreeTerms) {
        alert('You must agree to the terms and conditions');
        return;
    }
    
    // In a real app, you would send this to your backend
    console.log('Registration with:', { 
        firstName, 
        lastName, 
        email, 
        password, 
        accountType 
    });
    
    // Simulate successful registration
    alert('Account created successfully! Redirecting to login...');
    window.location.href = 'login.html';
}

// Calculate password strength
function calculatePasswordStrength(password) {
    let strength = 0;
    
    // Length
    if (password.length > 7) strength += 1;
    if (password.length > 11) strength += 1;
    
    // Contains numbers
    if (/\d/.test(password)) strength += 1;
    
    // Contains special chars
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength += 1;
    
    // Contains both lower and upper case
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength += 1;
    
    return Math.min(strength, 5); // Max strength of 5
}

// Update password strength UI
function updatePasswordStrength(strength) {
    const colors = ['#dc3545', '#ff6b6b', '#ffc107', '#51cf66', '#2b8a3e'];
    const labels = ['Very Weak', 'Weak', 'Moderate', 'Strong', 'Very Strong'];
    
    // Update bar
    const width = (strength / 5) * 100;
    passwordStrength.style.width = `${width}%`;
    passwordStrength.style.backgroundColor = colors[strength - 1];
    
    // Update label
    passwordStrengthLabel.textContent = labels[strength - 1];
    passwordStrengthLabel.style.color = colors[strength - 1];
}