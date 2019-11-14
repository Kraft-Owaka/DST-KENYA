$(document).ready(function() {
    $(".sprints").click(function() {
      $(".sprint").toggle();
      $(".circuit").hide();
      $(".drag").hide();
    });   
  });

  $(document).ready(function() {
    $(".circuits").click(function() {
      $(".circuit").toggle();
      $(".drag").hide();
      $(".sprint").hide();
    });   
  });

  $(document).ready(function() {
    $(".drags").click(function() {
      $(".drag").toggle();
      $(".circuit").hide();
      $(".sprint").hide();
    });   
  });