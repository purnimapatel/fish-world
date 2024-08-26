const email = document.getElementById("email");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");
const message = document.getElementById("para");
let nameVal= document.getElementById("name").value;
let emailVal = document.getElementById("email").value;
let passwordVal = document.getElementById("password").value;
let cpasswordVal = document.getElementById("cpassword").value;

function validateEmail(){
    const emailFormat=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const val = email.value;
    if(emailFormat.test(val)){
        message.classList.add("hidden");
    }
    else{
        message.classList.remove("hidden");
    }
}
function emptyInput(){
    nameVal = "";
    emailVal="";
    passwordVal="";
    cpasswordVal = "";

}