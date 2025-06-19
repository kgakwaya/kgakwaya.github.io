// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

  // --- Responsive Navbar ---
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  // Toggle the 'active' class on the nav links when the hamburger is clicked
  hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
  });

  // Close the mobile nav when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
          if (navLinks.classList.contains('active')) {
              navLinks.classList.remove('active');
          }
      });
  });

  // --- Contact Form Validation ---
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  contactForm.addEventListener('submit', (e) => {
      e.preventDefault(); // Prevent the default form submission

      // Get form data
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      // Simple validation
      if (name === '' || email === '' || message === '') {
          formStatus.textContent = 'Please fill out all fields.';
          formStatus.style.color = 'red';
          return;
      }

      // Email format validation (basic)
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
          formStatus.textContent = 'Please enter a valid email address.';
          formStatus.style.color = 'red';
          return;
      }

      // If validation passes (in a real app, you would send this to a server)
      formStatus.textContent = 'Thank you for your message!';
      formStatus.style.color = 'var(--accent-color)';

      // Clear the form
      contactForm.reset();

      // Remove the status message after a few seconds
      setTimeout(() => {
          formStatus.textContent = '';
      }, 5000);
  });
  
  // --- Project Modal ---
  const modal = document.getElementById('project-modal');
  const modalOverlay = document.querySelector('.modal-overlay');
  const closeButton = document.querySelector('.close-button');
  const projectButtons = document.querySelectorAll('.project-btn');

  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const modalTech = document.getElementById('modal-tech');

  // Function to open the modal
  const openModal = (title, desc, tech) => {
      modalTitle.textContent = title;
      modalDesc.textContent = desc;
      modalTech.textContent = tech;
      modal.style.display = 'flex';
  };

  // Function to close the modal
  const closeModal = () => {
      modal.style.display = 'none';
  };

  // Add click event listeners to all "Learn More" buttons
  projectButtons.forEach(button => {
      button.addEventListener('click', () => {
          const title = button.getAttribute('data-title');
          const desc = button.getAttribute('data-desc');
          const tech = button.getAttribute('data-tech');
          openModal(title, desc, tech);
      });
  });

  // Close the modal when the close button is clicked
  closeButton.addEventListener('click', closeModal);

  // Close the modal when clicking outside the modal content
  modalOverlay.addEventListener('click', (event) => {
      if (event.target === modalOverlay) {
          closeModal();
      }
  });
  
  // Close the modal with the 'Escape' key
  window.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && modal.style.display === 'flex') {
          closeModal();
      }
  });

});