// reg form 
var regForm = document.getElementById("register-form");
var regName = document.getElementById("registerName");
var regEmail = document.getElementById("registerEmail");
var regPassword = document.getElementById("registerPassword");
var regRePassword = document.getElementById("registerRepeatPassword");
var regCheck = document.getElementById("registerCheck");

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

regForm.addEventListener("submit", function (event) {
    if (regName.value === "") {
        regName.style.backgroundColor = "rgb(254 220 220)";
        regName.focus();
        regName.setAttribute("placeholder", "Please fill this field");
        event.preventDefault();
    }
    else if (regEmail.value === "" || !validateEmail(regEmail.value)) {
        regName.style.backgroundColor = "white";
        regEmail.value = "";
        regEmail.style.fontSize = "13px";
        regEmail.style.backgroundColor = "rgb(254 220 220)";
        regEmail.focus();
        regEmail.setAttribute("placeholder", "Please fill a valid email i.e example@example.example");
        event.preventDefault();
    }
    else if (regPassword.value === "") {
        regEmail.style.backgroundColor = "white";
        regPassword.style.backgroundColor = "rgb(254 220 220)";
        regPassword.focus();
        regPassword.setAttribute("placeholder", "Please fill this field");
        event.preventDefault();
    }
    else if (regRePassword.value === "" || regRePassword.value !== regPassword.value) {
        regPassword.style.backgroundColor = "white";
        regRePassword.value = "";
        regRePassword.style.backgroundColor = "rgb(254 220 220)";
        regRePassword.focus();
        regRePassword.style.fontSize = "13px";
        regRePassword.setAttribute("placeholder", "Please fill this field to match the password field");
        event.preventDefault();
    }
    else if (!regCheck.checked) {
        regRePassword.style.backgroundColor = "white";
        regCheck.style.backgroundColor = "rgb(254 220 220)";
        event.preventDefault();
    }
    else {
        var userRegData = {
            name: regName.value,
            email: regEmail.value,
            password: regPassword.value
        };
    
        window.localStorage.setItem("userData", JSON.stringify(userRegData));
    }
} );

// login form 
var loginForm = document.getElementById("login-form");
var loginPassword = document.getElementById("loginPassword");
var loginEmail = document.getElementById("loginName");

var userLoginData = JSON.parse(window.localStorage.getItem("userData"));

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();
    if (!userLoginData) {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "error",
            title: "Please Register First!"
          });
    }
    else if (loginEmail.value !== userLoginData.email || loginPassword.value !== userLoginData.password) {
        loginEmail.focus();
        loginEmail.value = "";
        loginPassword.value = "";
        loginEmail.style.backgroundColor = "rgb(254 220 220)";
        loginEmail.setAttribute("placeholder", "Incorrect email or password");
    }
    else {
        window.location.href = "/homepage.html";
    }
});


