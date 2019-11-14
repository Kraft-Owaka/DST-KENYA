/*tooglin part*/

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



var name = document.getElementById("name").value;
var street = document.getElementById("street").value;
var age = parseInt(document.getElementById ("age").value);
var vehicle = document.getElementById("vehicle").value
console.log(age)
console.log("hi there")

function register(){
    if (age <=17){
        alert ("Hi son, Yo to young  for this try again in a few years")
    }
    else{
        window.location.replace="race.html"
    }
}
