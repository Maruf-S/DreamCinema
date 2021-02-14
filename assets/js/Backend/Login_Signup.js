let db = new Localbase('DreamCinema');
async function SignUpUser(email,password){
    //1,2,10 are error codes
    try {
        return await db.collection('users').doc({ email: email }).get().then(document => {
            if(document==undefined){
                db.collection('users').add({
                    email: email,
                    password: password
                  });
                  return 1;
                //   return "Successfully signedUpUser";
                }
            else{
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
// SignUpUser("thotIana@gmail.com",47)