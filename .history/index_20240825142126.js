const email = document.getElementById("email");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");
const message = document.getElementById("para");
function validateEmail{
    const emailFormat=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const val = email.value;
    if(!emailFormat.test(val)){
        message.classList.remove("hidden");
    }
    else{
        message.classList.add("hidden");
    }
}