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
