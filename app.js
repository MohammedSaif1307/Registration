var password1;
var email;
const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');
function Wrong() {
    password1 = document.getElementById("password").value;
    var pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d])(?=.*[!@#$%^&*₹]){8,}/;
    if(pattern.test(password1) == false) {
        document.getElementById("wrong-password").style.display = "inline-block";
        document.getElementById("password").innerHTML = "";
    }
    else {
        document.getElementById("wrong-password").style.display = "none";
    }
}

function Email() {
    email = document.getElementById("password").value;
    var pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d])(?=.*[!@#$%^&*₹]){8,}/;
    if(pattern.test(password1) == false) {
        document.getElementById("wrong-password").style.display = "inline-block";
        document.getElementById("password").innerHTML = "";
    }

function Register() {
    if(document.getElementById("Name").value == "" || document.getElementById("Email").value == "" || document.getElementById("password").value == "") {
        document.getElementById("result").style.display = "none";
    }
    else {
        document.getElementById("result").style.display = "inline-block";
    }
}
togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye / eye slash icon
    this.classList.toggle('bi-eye');
});