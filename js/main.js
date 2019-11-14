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



/*brain function*/


function register() {
  var name = document.getElementById("name").value;
  var street = document.getElementById("street").value;
  var age = document.getElementById("age").value;
  var vehicle = document.getElementById("vehicle").value;
  if (age <= 17) {
    alert("Hi son, Yo to young  for this try again in a few years");
  } else {
    var btn = document.getElementById("regbtn");
    function race() {
      btn.setAttribute("href", "race.html");
    }
  }
  race()
}

// Set the date we're counting down to
var countDownDate = new Date("Nov 15, 2019 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
