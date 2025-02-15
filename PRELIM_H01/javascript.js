// Toggle theme between light and dark mode
const themeToggleButton = document.getElementById("theme-toggle");

themeToggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Handle form submission and display message
const form = document.getElementById("contact-form");
const messageResult = document.getElementById("message-result");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Collect form data
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  // Simulate sending the message (in real scenarios, send data to a server)
  messageResult.innerHTML = `<p>Thank you, ${name}! Your message has been sent successfully.</p>`;

  // Clear the form after submission
  form.reset();
});
