let Form= document.getElementById('registrationForm')

    Form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    const formData = {
      first_name: document.getElementById('first_name').value,
      last_name: document.getElementById('last_name').value,
      email: document.getElementById('email').value,
      phone_number: document.getElementById('phone_number').value,
      password: document.getElementById('password').value
    };

   
    console.log(formData);

    Form.reset();
  });