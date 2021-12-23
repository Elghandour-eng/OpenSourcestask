$(window).on("load", function(){
     $(".preloader").fadeOut("slow");
});






$(document).ready(function() {

    /*navbar shrink */
     $(window).on("scroll",function(){
        if($(this).scrollTop() > 90){
            $(".navbar").addClass("navbar-shrink");
        }
        else{
            $(".navbar").removeClass("navbar-shrink");
        }
     });

    /*video-popup */
    const videosrc = $("#player-1").attr("src");
    $(".video-play-btn, .video-popup").on("click", function(){
        if($(".video-popup").hasClass("open")){
           $(".video-popup").removeClass("open");
           $("#player-1").atrr("src","");
        }
        else{
            $(".video-popup").addClass("open");
           if($("#player-1").atrr("src")==''){
              $("#player-1").atrr("src",videosrc);
           }
        }
    });

    /*owl carsoul */
    $('.features-carsoul').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    });


         // screenshots-carousel//

    $('.screenshots-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:4,
            }
        }
    });


    ///testmonials
    $('.testmonials-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    });


    ///team section
    $('.team-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    });


    /////scroll//////////
        $.scrollIt({
            topOffset: -50
        });


   /////navbar collapse//////////////
   $(".nav-link").on("click", function(){
         $(".navbar-collapse").collapse("hide");  
   });
   


   ///////dark mood
    function toggleTheme(){
        if(localStorage.getItem("tech-magic") !== null){
            if(localStorage.getItem("tech-magic") === "dark"){
                 $("body").addClass("dark");
            }
            else{
                $("body").removeClass("dark");
            }
        }
         updateIcon();
    }
    toggleTheme();
    $(".toggle-theme").on("click",function(){
        $("body").toggleClass("dark");
        if($("body").hasClass("dark")){
              localStorage.setItem("tech-magic","dark");
        }
        else{
            localStorage.setItem("tech-magic","light");
        }
        updateIcon();
    });

    function updateIcon(){
        if($("body").hasClass("dark")){
             $(".toggle-theme i").removeClass("fa-moon");
             $(".toggle-theme i").addClass("fa-sun");
        }
        else{
            $(".toggle-theme i").removeClass("fa-sun");
            $(".toggle-theme i").addClass("fa-moon");
        }
    }

      
});



///scroll to top
let span = document.querySelector(".up");

window.onscroll = function () {
  // console.log(this.scrollY);
  // if (this.scrollY >= 1000) {
  //   span.classList.add("show");
  // } else {
  //   span.classList.remove("show");
  // }
  this.scrollY >= 1000 ? span.classList.add("show") : span.classList.remove("show");
};

span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};