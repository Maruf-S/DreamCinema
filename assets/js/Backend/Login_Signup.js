let db = new Localbase('DreamCinema');
//#region SignUp
async function SignUpUser(email, password) {
    //1,2,10 are error codes
    try {
        return await db.collection('users').doc({
            email: email
        }).get().then(document => {
            if (document == undefined) {
                db.collection('users').add({
                    email: email,
                    password: password
                });
                return 1;
                //   return "Successfully signedUpUser";
            } else {
                console.log("Duplicate User");
                return 2;
                // return `Email has to be uniqe`;
            }
        })

    } catch (error) {
        alert(error);
        return 10;
        // return `Unknown error occurred${error}`;
    }
}
//#endregion

//#region SignIn
async function SignInUser(email, password) {
    try {
        return await db.collection('users').doc({
            email: email,
            password: password
        }).get().then(document => {
            if (document) {
                //Remove the exsting cookie to secure a seamless login
                eraseLoginCookie();
                //Create a new login cookie
                createLoginCookie(email, 1);
                return 1;
                //   return "Successfully SignedIn";
            } else {
                console.log("Email or password is incorrect");
                return 2;
                // return `Email or password is incorrect`;
            }
        })
    } catch (error) {
        alert(error);
        return 10;
        // return `Unknown error occurred${error}`;
    }
}
//#endregion
//#region AccountManagment
async function ChangePassword(email, oldPsw, newPsw) {
    try {
        return await db.collection('users').doc({
            email: email,
            password: oldPsw
        }).get().then(document => {
            if (document) { //user exists
                db.collection('users').doc({
                    email: email
                }).update({
                    password: newPsw
                }).catch(error => {
                    console.log(`UNKNOWN ERROR OCCOURED ${error}`);
                    return 10;
                });
                console.log("CHANGE SUCCESSfUL");
                return 1;
                //return "Password change successful";
            } else {
                console.log(`password mismatch`);
                return 2;
                //Password mismatch
            }
        })
    } catch (error) {

        console.log(`UNKNOWN ERROR OCCOURED ${error}`);
        return 10;
    }
}
async function ChangeEmail(oldEmail,newEmail,password) {
    try {
        return await db.collection('users').doc({
            email: oldEmail,
            password : password
        }).get().then(document => {
            if (document) { //user exists
                console.log("USER EXISTS PROCEDING CHANGE");
                db.collection('users').doc({
                    email: oldEmail
                }).update({
                    email: newEmail
                }).catch(error => {
                    console.log(`UNKNOWN ERROR OCCOURED ${error}`);
                    return 10;
                });
                console.log("Email change successufl")
                return 1;
                //return "Email change successful";
            } else {
                console.log(`password mismatch`);
                return 2;
                //Password mismatch
            }
        })
    } catch (error) {

        console.log(`UNKNOWN ERROR OCCOURED ${error}`);
        return 10;
    }
}
async function deleteUser(email,password){
   return db.collection('users')
    .doc({ email: email,password: password })
  .delete()
  .then(response => {
      return 1;
  })
  .catch(error => {
    console.log(`password mismatch`);
    return 2;
    //Password mismatch
  });
    // logOutUser();
}
//#endregion 
//#region LoginCookie
function createLoginCookie(email, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    } else var expires = "";
    document.cookie = "loggedIn=" + email + expires + "; path=/";
}

function readLoginCookie() {
    var nameEQ = "loggedIn" + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseLoginCookie() {
    createLoginCookie("", -1);
}
// //#endregion
// ChangeEmail('m@m.com',`mdsadddddddddddddddddddddddd@m.com`,`4`);
// deleteUser(`mdsadddddddddddddddddddddddd@m.com`,'4');