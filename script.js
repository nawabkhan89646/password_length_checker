function checkStrength() {
  // Get the password input value
  const password = document.getElementById('password').value;
  // Get the strength indicator element
  const strengthIndicator = document.getElementById('strength');
  // Default password strength
  let strength = 'Weak';
  // Set the default class for weak password
  strengthIndicator.className = 'weak';

  // Check if the password is strong
  if (
    password.length > 8 &&                // More than 8 characters
    /[A-Z]/.test(password) &&             // Contains an uppercase letter
    /[a-z]/.test(password) &&             // Contains a lowercase letter
    /[0-9]/.test(password) &&             // Contains a digit
    /[\W]/.test(password)                 // Contains a special character
  ) {
    strength = 'Strong';
    strengthIndicator.className = 'strong'; // Set the class for strong password
  } 
  // Check if the password is medium strength
  else if (
    password.length > 6 &&                // More than 6 characters
    /[A-Z]/.test(password) &&             // Contains an uppercase letter
    /[a-z]/.test(password) &&             // Contains a lowercase letter
    /[0-9]/.test(password)                // Contains a digit
  ) {
    strength = 'Medium';
    strengthIndicator.className = 'medium'; // Set the class for medium password
  }

  // Update the strength indicator text
  strengthIndicator.textContent = `Strength: ${strength}`;
}
