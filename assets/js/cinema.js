const second = 1000,
minute = second * 60,
hour = minute * 60,
day = hour * 24;
//Get this from the DB latter
let targetDate = "Mar 4, 2021 00:00:00";
countDown = new Date(targetDate).getTime();
setInterval(() => {
let now = new Date().getTime();
distance = countDown - now;
document.getElementById("days").innerText = Math.floor(distance / (day)),
  document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
  document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
  document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
}, 1000);

var postorImage = document.querySelector(".poster");
var movieTitle = document.querySelector(".movieTitle");
var movieRelease = document.querySelector(".releaseDate");
var productionCompany = document.querySelector(".prodCompany");
var IDMBrating = document.querySelector(".ratingOverall");
var ratingStarsContainner = document.querySelector(".ratingStarsContainner");
var genereContainer = document.querySelector(".sgeneros");
var movieDesc = document.querySelector(".desc");
var availableTickets = document.querySelector(".availaibleTickets");
var buyTicketsButton = document.querySelector(".getTicket");
var trailer = document.querySelector(".videoTrailer");
var numComments  = document.querySelector(".commentsNum");
var commentsContainer = document.querySelector(".comments");
var commentForm = document.querySelector("#comment");
var commentArea = commentForm.querySelector(".commentArea");
buyTicketsButton.addEventListener('click',buyTickets);
commentForm.addEventListener('submit',submitComment);
//Reference to all comments
var allComments;
var movId;
var movie;
function startUp(){
    //Read vid Id from the URL
const urlParams = new URLSearchParams(window.location.search);
movId = Number(urlParams.get('id'));
allComments = getComments();
movie = {
    "id": 111 ,
    "name":"Maleficent",
    "desc" : "Maleficent and her goddaughter Aurora begin to question the complex family ties that bind them as they are pulled in different directions by impending nuptials, unexpected allies and dark new forces at play.",
    "postor": "malificent.jpg",
    "background":"wallpaper2you_310693.jpg",
    "trailer": "https://youtu.be/n0OFH4xpPr4",
    "screening":"Mar 4, 2021 00:00:00",
    "genre" : [ "Adventure", "Family", "Fantasy"],
    "idmbRating":"6.6",
    "aired" : "HBO",
    "release": "18 October 2019 (USA)",
    "ticket" : "Available",

}
document.title = movie['name'];
postorImage.src = `assets/images/Data/postors/${movie['postor']}`;
movieTitle.innerText = movie['name'];
movieRelease.innerText = movie['release'];
<<<<<<< HEAD
productionCompany.innerText = ['aired'];
=======
productionCompany.innerText = movie['aired'];
>>>>>>> Cinema-managment
IDMBrating.innerText = movie['idmbRating'];
//ADDING GENRES
var genre = movie['genre'];
genre.forEach(element => {
    var gen = document.createElement('span');
    gen.innerHTML = `<a class="genere pl-2">${element}</a>`
    genereContainer.appendChild(gen);
});
/////////////
movieDesc.innerText = movie['desc'];
availableTickets.innerText = movie['ticket'];
trailer.src = movie['trailer'];
document.querySelector('body').style.background = `background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('assets/images/Data/covers/${movie['background']}');`;
}
startUp();
// alert(id);
// ?id=${cursor.value.id}
//#region COMMENTS
async function setUpComments(){
    //Empty the comment container
    commentsContainer.innerHTML = '';
    allComments = await getComments();
    numComments.innerText = `(${allComments.length}) Comments`;
    allComments.forEach(element => {
        if(element['movId']===movId){
            var comU = document.createElement("div");
            comU.innerHTML = `<div class="media my-4">
            <img class="align-self-start rounded-circle mr-3" style="max-width: 64px;" src="https://st3.depositphotos.com/13159112/17145/v/600/depositphotos_171453724-stock-illustration-default-avatar-profile-icon-grey.jpg" alt="User">
            <div class="media-body pl-3 leftBorder">
              <h5 class="mt-0 text-white">${element['email']}</h5>
              ${element['comment']}
            </div>
            <div class="text-muted d-inline cstext">${element['date']}</div>
          </div>  `
          commentsContainer.appendChild(comU);
        }
    });
}
async function submitComment(e){
    e.preventDefault();
    var userName = readLoginCookie();
    var commen = commentArea.value;
    var date = (`${Date().split(' ')[0]} ${Date().split(' ')[1]} ${Date().split(' ')[2]}, ${Date().split(' ')[3]}`);
    var comU = document.createElement("div");
    await addComment(userName, movId,commen);
    allComments = await getComments();
    numComments.innerText = `(${allComments.length}) Comments`;
    comU.innerHTML = `<div class="media my-4">
    <img class="align-self-start rounded-circle mr-3" style="max-width: 64px;" src="https://st3.depositphotos.com/13159112/17145/v/600/depositphotos_171453724-stock-illustration-default-avatar-profile-icon-grey.jpg" alt="User">
    <div class="media-body pl-3 leftBorder">
      <h5 class="mt-0 text-white">${userName}</h5>
      ${commen}
    </div>
    <div class="text-muted d-inline cstext">${date}</div>
  </div>  `
  commentsContainer.appendChild(comU);
}
//#endregion
function buyTickets(){
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success mx-2',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: true
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Confirm order',
        text: "Are you sure you want to buy a ticket to {Movie Name} ?",
        icon: 'info',
        showCancelButton: true,
        cancelButtonText: 'No, cancel',
        confirmButtonText: 'Yes, Proceed',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )}
        // else if (
        //   /* Read more about handling dismissals below */
        //   result.dismiss === Swal.DismissReason.cancel
        // ) 
        else{
          swalWithBootstrapButtons.fire(
            'Transaction canceled',
            'Purchase canceled by the user',
            'error'
          )
        }
      })
}

setUpComments();

<<<<<<< HEAD
function createGuid()  
//CREATE A GUID TO SERVE AS A "DIGITAL" TICKET
{  
   return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {  
      var r = Math.random()*16|0, v = c === 'x' ? r : (r&0x3|0x8);  
      return v.toString(16);  
   });  
} 
var guid = createGuid();

=======
>>>>>>> Cinema-managment
// Swal.fire({
//     imageUrl: `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${guid}`,
//     imageHeight: 300,
//     imageAlt: 'Ticket ID'
//   })

// Swal.fire({
//     icon: 'error',
//     title: 'Oops...',
//     text: 'Sorry, Something went wrong. Please Try again later!',
//     footer: `<a href='contactUs.html'>Report this issue.</a>`
//   })

