(function($){$(document).ready(function(){
  // Activate Carousel
  $("#myCarousel").carousel("pause");

  // Click on the button to start sliding 
  $("#myBtn").click(function(){
    $("#myCarousel").carousel("cycle");
  });

  // Click on the button to stop sliding 
  $("#myBtn2").click(function(){
    $("#myCarousel").carousel("pause");
  });
    
  // Enable Carousel Indicators
  for(var a=0; a<$('.slider_img');a++)
  $(".item+a").click(function(){
    $("#myCarousel").carousel(a);
   });
  // $(".item2").click(function(){
  //   $("#myCarousel").carousel(1);
  // });
  // $(".item3").click(function(){
  //   $("#myCarousel").carousel(2);
  // });
  // $(".item4").click(function(){
  //   $("#myCarousel").carousel(3);
  // });
    
  // Enable Carousel Controls
  $(".left").click(function(){
    $("#myCarousel").carousel("prev");
  });
  $(".right").click(function(){
    $("#myCarousel").carousel("next");
  });
});
});