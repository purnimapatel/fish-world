const message = document.getElementById("para");
const nameVal= document.getElementById("name");
const emailVal = document.getElementById("email");
const passwordVal = document.getElementById("password");
const cpasswordVal = document.getElementById("cpassword");
const message1Val = document.getElementById("message1");
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); });

function validateEmail(){
    const emailFormat=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const val = emailVal.value;
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
const valMessage1 = messageVal.value;
function emptyInput(){
    nameVal.value = "";
    emailVal.value="";
    passwordVal.value="";
    cpasswordVal.value = "";
    message1Val.value= "";

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