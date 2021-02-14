var submit_button=document.getElementById('submit');
var inputs = document.querySelectorAll('input')
var message = document.getElementById('message')


submit_button.addEventListener("click", clearText);


function clearText(){
    inputs.forEach(input => input.value = "")
    message.value="";
}
