$(document).ready(function () {
   $(window).scroll(function () {
      console.log($(this).scrollTop());
      if ($(this).scrollTop() < 70) {
         $(".navbar").removeClass("navbarNotSoFat");
      } else {
         $(".navbar").addClass("navbarNotSoFat");
      }
   });
});
$('.navTrigger').click(function () {
   $(this).toggleClass('active');
});
//   document.querySelector(".navTrigger").addEventListener("click", (e) =>{
//      console.log(e.target.classList);
//      e.target.classList.toggle('active');
//   });
<<<<<<< Updated upstream
=======

// $(function(){
//    $(document).ready(function(){

//    });
//  });
Swal.fire({
   position: 'top-end',
   icon: 'success',
   title: 'Your work has been saved',
   showConfirmButton: false,
   timer: 1500
 })
>>>>>>> Stashed changes
