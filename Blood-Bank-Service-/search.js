// Mock Data (Replace with API later)
const mockDonors = [
  { id: 1, name: "Aary Satardekar", bloodType: "O+", location: "Mumbai", lat: 19.0760, lng: 72.8777, contact: "9876543210", urgent: true },
  { id: 2, name: "Wahid Jamadar", bloodType: "A+", location: "Delhi", lat: 28.7041, lng: 77.1025, contact: "8765432109", urgent: false },
];

// Initialize Map
const map = L.map('map').setView([20.5937, 78.9629], 5); // India view
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Add Donor Markers
mockDonors.forEach(donor => {
  const marker = L.marker([donor.lat, donor.lng])
    .addTo(map)
    .bindPopup(`<b>${donor.name}</b><br>Blood Type: ${donor.bloodType}`);
  
  if (donor.urgent) {
    marker._icon.classList.add('urgent-marker');
  }
});

// Filter Logic
document.getElementById('blood-type').addEventListener('change', filterDonors);
document.getElementById('urgent-only').addEventListener('click', function() {
  this.classList.toggle('active');
  filterDonors();
});

function filterDonors() {
  const bloodType = document.getElementById('blood-type').value;
  const showUrgent = document.getElementById('urgent-only').classList.contains('active');
  
  const filtered = mockDonors.filter(donor => 
    (bloodType === 'all' || donor.bloodType === bloodType) &&
    (!showUrgent || donor.urgent)
  );
  
  renderDonorCards(filtered);
}

function renderDonorCards(donors) {
  const container = document.getElementById('donor-results');
  container.innerHTML = donors.map(donor => `
    <div class="donor-card ${donor.urgent ? 'urgent' : ''}">
      <h3>${donor.name} ${donor.urgent ? '🔴' : ''}</h3>
      <p><strong>Blood Type:</strong> ${donor.bloodType}</p>
      <p><strong>Location:</strong> ${donor.location}</p>
      <button class="contact-btn" data-contact="${donor.contact}">
        Request Contact
      </button>
    </div>
  `).join('');
}