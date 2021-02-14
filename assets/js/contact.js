var submit_button=document.getElementById('submit');
var full_name =document.getElementById('name');
var email = document.getElementById('email');
var message = document.getElementById('message')


submit_button.addEventListener("click", clearText);


function clearText(){
    full_name.innerText = ""
    email.innerText = ""
    message.innerText = ""
}
