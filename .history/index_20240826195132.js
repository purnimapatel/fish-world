const email = document.getElementById("email");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");
const message = document.getElementById("para");
let nameVal= document.getElementById("name");
let emailVal = document.getElementById("email");
let passwordVal = document.getElementById("password");
let cpasswordVal = document.getElementById("cpassword");

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
const valName = nameVal.value;
const valEmail = emailVal.value;
const valPassword = passwordVal.value;
function emptyInput(){
    nameVal.value = "";
    emailVal.value="";
    passwordVal.value="";
    cpasswordVal.value = "";

}
// function sendEmail(){
//     emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
//         from_name: valName,
//         from_email: valEmail,
//         password: valPassword
//       })
//       .then(function(response) {
//         console.log('SUCCESS!', response.status, response.text);
//       }, function(error) {
//         console.error('FAILED...', error);
//       });
// }