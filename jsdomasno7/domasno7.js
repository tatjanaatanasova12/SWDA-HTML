var wght = document.querySelector("#wght");
var hght = document.querySelector("#hght");
var button = document.querySelector("#calc");
var result = document.querySelector("#result");

button.addEventListener("click", function() {
    result.innerHTML = "Your Body Mass Index is: " + parseInt(wght.value) / (parseInt(hght.value) * parseInt(hght.value));
});