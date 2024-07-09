function checkStrength() {
    const password = document.getElementById('password').value;
    const strengthIndicator = document.getElementById('strength');
    let strength = 'Weak';
    strengthIndicator.className = 'weak';

    if (password.length > 8 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /[0-9]/.test(password) && /[\W]/.test(password)) {
        strength = 'Strong';
        strengthIndicator.className = 'strong';
    } else if (password.length > 6 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /[0-9]/.test(password)) {
        strength = 'Medium';
        strengthIndicator.className = 'medium';
    }

    strengthIndicator.textContent = `Strength: ${strength}`;
}