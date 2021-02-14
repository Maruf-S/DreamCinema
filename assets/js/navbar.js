
$(document).ready(function () {
      ///////////////////////
      var i, stop;
      i = 1;
      stop = 7;
      setInterval(function(){
        if (i > stop){
          return;
        }
        $('#len'+(i++)).toggleClass('bounce');
      }, 500)
      ////////////////
   $(window).scroll(function () {
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

// $(function(){
//    $(document).ready(function(){

//    });
//  });