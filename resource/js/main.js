$(document).ready(function(){


    // STICKY MRNU
   $(".js--services-section").waypoint(function(direction){
       if (direction == "down") {
        $("nav").addClass("sticky")
       }
    
       else {
           $("nav").removeClass("sticky")

       }
   });

  


    // MIXITUP (PORTFOLIO SECTION)
    var mixer = mixitup('.rom');

});

//CLOSE NAV AND OPEN NAV
function openNav() {
    document.getElementById("myNav").style.width="100%";
}
    
function closeNav() {
    document.getElementById("myNav").style.width="0";
}
    

// (E) SMOTH SCROOL//

$("a").on('click', function(event){
    
    if (this.hash !== "") {
         event.preventDefault();

         var hash = this.hash;

         $('html,body').animate({
             scrollTop: $(hash).offset().top
            }, 800, function(){  
                window.location.hash = hash;
         });
    }

});


  function alo() {
      alert("plz doble click");
  }