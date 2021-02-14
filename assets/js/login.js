const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = (() => {
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (() => {
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
});
signupLink.onclick = (() => {
  signupBtn.click();
  return false;
});
var backgrounds = ["b1","b2","b3","b4"];
curIndex = 0;
function changeBackground(){
  document.querySelector("body").id = backgrounds[curIndex];
  curIndex = curIndex < backgrounds.length-1 ? ++curIndex : 0;
}
setInterval(changeBackground,5000);
//#region SignUp
const signUpForm = document.querySelector('#signupform'); 
const signUpEmail = signUpForm.querySelector('.emailform');
const signUpPassword = signUpForm.querySelector('.password');
const signUpConfirmPassword = signUpForm.querySelector('.confirmPassword');
signUpForm.addEventListener('submit', addUser);

async function addUser(e){
  e.preventDefault();
  console.log(signUpForm);
  if(!(signUpConfirmPassword.value===signUpPassword.value)){
    alert("Password and ConfirmPassword are not the same!");
    return;
  }
  let response = await SignUpUser(signUpEmail.value,signUpPassword.value);
  alert(response);
  switch(response) {
    case 1:
      alert("Successfully signedUpUser");
      break;
    case 2:
      alert("Duplicate User")
      break;
    case 10:
      alert("Unknown Error occurred")
        break;  
    // default:
    //   // code block
  } 
}
//#endregion