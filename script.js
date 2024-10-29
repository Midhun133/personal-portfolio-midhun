// Smooth scrolling for navigation
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }
  
  // Contact Form Submission
  document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for reaching out! I will get back to you soon.');
    // Clear the form fields
    document.getElementById('contact-form').reset();
  });
  