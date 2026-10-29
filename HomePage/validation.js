function validateForm() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (firstName === '' || lastName === ''|| phone === '' || email === '' || password === '') {
        alert('All fields are required');
        return false;
    }

    return true;
}