

$.noConflict();


jQuery(document).ready(function($){
  $("#button1").click(function(){
    $("p").text("jQuery is still working!");
  });
});


jQuery(document).ready(function($){
  $("#button2").click(function(){
    $("p").text("This is a paragraph.");
    $(".david").text("David jQuery is still working!");
  });
});
