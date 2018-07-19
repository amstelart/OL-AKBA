
$( document ).ready(function() {

  $(function() {
  $('nav#mobile-menu').mmenu({
    navbar: {
      title: 'Меню'
    }
  });
});

  $('.main-slider').owlCarousel({
      loop:true,
      margin:0,
      items:1,
      dot: true,
      nav:true
      // responsive:{
      //     0:{
      //         items:1
      //     },
      //     600:{
      //         items:3
      //     },
      //     1000:{
      //         items:5
      //     }
      // }
  });

  $('.main-carousel').owlCarousel({
      loop:true,
      margin:35,
      nav:true,
      dot: false,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:3
          }
      }
  });

});

// Изоляция без jQuery
// (function(){
//   // code
// }());

// На проекте нет jQuery, но хочется $( document ).ready...
// function ready(fn) {
//   if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
//     fn();
//   } else {
//     document.addEventListener('DOMContentLoaded', fn);
//   }
// }
//
// ready(function(){
//   // code
// });
