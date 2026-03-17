$(document).ready(function(){
    $("input").focus(function(){
      $(this).css("background-color", "#d8d8d8");
    });
    $("input").blur(function(){
      $(this).css("background-color", "rgb(78, 150, 218)");
    });
  });

  $(document).ready(function(){
    $('#message').focus(function(){
      $(this).css("background-color", "#d8d8d8");
    });
    $('#message').blur(function(){
      $(this).css("background-color", "rgb(78, 150, 218)");
    });
  });