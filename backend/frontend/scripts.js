// scripts.js
// Add interactive functionality using JavaScript

// Function to handle student sign-in form submission
document.getElementById('signin-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  // Send student sign-in details to backend (e.g., using fetch or AJAX)
  // Example: Fetch API call to backend
  fetch('/api/student/signin', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (response.ok) {
      // Student signed in successfully, handle response
      console.log('Student signed in successfully');
    } else {
      // Handle sign-in failure
      console.error('Student sign-in failed');
    }
  })
  .catch(error => {
    console.error('Error during sign-in:', error);
  });
});

// Function to handle contact us form submission
document.getElementById('contact-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  // Send contact form details to backend (e.g., using fetch or AJAX)
  // Example: Fetch API call to backend
  fetch('/api/contact', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (response.ok) {
      // Contact form submitted successfully, handle response
      console.log('Contact form submitted successfully');
    } else {
      // Handle submission failure
      console.error('Contact form submission failed');
    }
  })
  .catch(error => {
    console.error('Error during contact form submission:', error);
  });
});
