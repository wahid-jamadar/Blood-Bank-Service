// Initialize Map
const map = L.map('contact-map').setView([19.0760, 72.8777], 13); // Mumbai coords
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
L.marker([19.0760, 72.8777]).addTo(map)
  .bindPopup('<b>BloodConnect HQ</b>');

// FAQ Accordion
document.querySelectorAll('.accordion-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.parentElement.classList.toggle('active');
  });
});

// CAPTCHA Validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const answer = document.getElementById('captchaAnswer').value;
  if (answer !== '8') {
    alert('CAPTCHA failed. Please try again.');
    return;
  }
  alert('Message sent successfully!');
  this.reset();
});