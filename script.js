document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var age = document.getElementById('age').value.trim();
    var dob = document.getElementById('dob').value;
    var country = document.getElementById('country').value;
    var comments = document.getElementById('comments').value.trim();
  
    // Get gender
    var genderElements = document.getElementsByName('gender');
    var gender = '';
    for (var i = 0; i < genderElements.length; i++) {
      if (genderElements[i].checked) {
        gender = genderElements[i].value;
        break;
      }
    }
  
    // Get selected hobbies
    var hobbies = [];
    var hobbyElements = document.getElementsByName('hobbies');
    for (var j = 0; j < hobbyElements.length; j++) {
      if (hobbyElements[j].checked) {
        hobbies.push(hobbyElements[j].value);
      }
    }
  
    // Basic email format check
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name || !email || !age || !dob || !gender || !country) {
      alert('Please fill out all required fields.');
      return;
    }
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email.');
      return;
    }
  
    // Output collected data
    console.log('--- Submitted User Data ---');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Age:', age);
    console.log('Gender:', gender);
    console.log('Date of Birth:', dob);
    console.log('Hobbies:', hobbies.join(', ') || 'None');
    console.log('Country:', country);
    console.log('Comments:', comments || 'No comments');
  
    alert('Form submitted successfully! Check console for details.');
  });  