// Mobile hamburger menu
 $('document').ready(function() {
   $(".navham").hide();

   $(".clickshow").click(function() {
      $(".navham").toggle();
   });
});

// Show div in Dev journey

$('document').ready(function(){
    $(".buttonfade").click(function(){
        $(".div1").fadeIn(2000);
        $(".div2").fadeIn(3000);
        $(".div3").fadeIn(4000);
    });
});

// Show submit form

$('document').ready(function(){
    $(".formshow").click(function(){
        $(".form1").fadeIn(2000);
    });
});

