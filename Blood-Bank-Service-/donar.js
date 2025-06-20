// Real-time Validation
document.getElementById('name').addEventListener('input', function() {
  validateField(this, this.value.trim().length >= 3);
});

document.getElementById('contact').addEventListener('input', function() {
  validateField(this, /^[0-9]{10}$/.test(this.value));
});

function validateField(field, isValid) {
  const validIcon = field.nextElementSibling;
  const invalidIcon = validIcon.nextElementSibling;
  
  if (field.value === '') {
    validIcon.style.display = 'none';
    invalidIcon.style.display = 'none';
  } else {
    validIcon.style.display = isValid ? 'block' : 'none';
    invalidIcon.style.display = isValid ? 'none' : 'block';
    field.style.borderColor = isValid ? '#2ecc71' : '#e74c3c';
  }
}

// Form Submission
document.getElementById('registrationForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Simulate API call
  const donorData = {
    name: document.getElementById('name').value,
    bloodType: document.getElementById('blood-type').value,
    location: document.getElementById('location').value,
    contact: document.getElementById('contact').value,
    isPrivate: document.getElementById('privacyToggle').checked
  };
  
  console.log('Submitting:', donorData);
  alert('Thank you for registering! We\'ll contact you soon.');
  this.reset();
});