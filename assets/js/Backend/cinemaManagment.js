var db = new Localbase('DreamCinema');
//#region Register Comments
async function addComment(email, movId, comment) {
    try {
        await db.collection('comments').add({
            movId: movId,
            email: email,
            date: (`${Date().split(' ')[0]} ${Date().split(' ')[1]} ${Date().split(' ')[2]}, ${Date().split(' ')[3]}`),
            comment : comment
        });
        return 1;
    } catch (error) {
        return 10;
        // return `Unknown error occurred${error}`;
    }
}
//#endregion
//#region GetComments
async function getComments() {
    try {
        return db.collection('comments').orderBy('date').get().then(comments => {
            return comments;
        })
    } catch (error) {
        console.log(error);
        return 10;
    }
}
//#endregion
//REGION TICKET MANAGMENT

//Create a GUID per user to serve as a digital ticket
function createGuid()  
{  
   return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {  
      var r = Math.random()*16|0, v = c === 'x' ? r : (r&0x3|0x8);  
      return v.toString(16);  
   });  
} 
async function buyTicket(email, movId) {
    var guid = createGuid();
    try {
        await db.collection('comments').add({

            movId: movId,
            email: email,
          ticket : guid,
            date: (`${Date().split(' ')[0]} ${Date().split(' ')[1]} ${Date().split(' ')[2]}, ${Date().split(' ')[3]}`),
        });
        return guid;
    } catch (error) {
        return false;
        // return `Unknown error occurred${error}`;
    }
}
//END REGION