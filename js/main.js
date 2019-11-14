var name = document.getElementById("name").value;
var street = document.getElementById("street").value;
var age = document.getElementById("age").value;
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
