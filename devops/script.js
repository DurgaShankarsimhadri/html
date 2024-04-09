function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission behavior
  
    // Get form inputs
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Simple validation example (you can add more complex validation as needed)
    if (username.trim() === '') {
      alert('Please enter a username.');
      return;
    }
  
    if (email.trim() === '') {
      alert('Please enter an email address.');
      return;
    }
  
    if (password.trim() === '') {
      alert('Please enter a password.');
      return;
    }
  
    // If all validations pass, you can perform further actions like sending the form data to a server
    console.log('Form submitted successfully!');
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
  
    // Reset the form after submission (optional)
    document.getElementById('registrationForm').reset();
  }