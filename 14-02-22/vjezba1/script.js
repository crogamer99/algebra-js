$(document).ready(function(){
    $("#hide").click(function(){
      $("h1").hide();
    });
    $("#show").click(function(){
      $("h1").show();
    });
    $(".enter").mouseover(function(){
      $("body").css("background-color","blue");
    });
  });