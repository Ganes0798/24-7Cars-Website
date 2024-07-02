document.addEventListener("DOMContentLoaded", function() {
    var header = document.querySelector(".sticky-header");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 30) {
            header.classList.add("active");
        } else {
            header.classList.remove("active");
        }
    });
});


function validateForm() {
    let isValid = true;
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("messageError").textContent = "";
  
    // Validate Name
    const name = document.getElementById("fname").value;
    const nameString = /^[a-zA-Z\s-]+$/;
    if (name === "") {
      document.getElementById("nameError").textContent = "Please enter your name.";
      isValid = false;
    } 
    if(!nameString.test(name)) {
      document.getElementById("nameError").textContent = "Please enter a Valid Name.";
      isValid = false;
    }
  
  
    // Validate Email
    const email = document.getElementById("femail").value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
      document.getElementById("emailError").textContent = "Please enter your email.";
      isValid = false;
    } 
    if (!emailPattern.test(email)) {
      document.getElementById("emailError").textContent = "Please enter a valid email address.";
      isValid = false;
    }
  
    // Validate Message
    const message = document.getElementById("fmessage").value;
    if (message === "") {
      document.getElementById("messageError").textContent = "Please enter your message.";
      isValid = false;
    }
  
    return isValid;
  }


  function sendEmail(){
    document.getElementById('contactForm').addEventListener('submit', function (event) {
      event.preventDefault();

      const formData = new FormData(event.target);
      const data = Object.fromEntries(formData);

      fetch('https://localhost:5001/api/Email/sendemail', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(data => {
          alert('Email sent successfully!');
      })
      .catch((error) => {
          console.error('Error:', error);
      });
  });
  }
