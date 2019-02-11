var range = document.querySelector("#range");
var rectangle = document.querySelector(".scaled-item");

range.addEventListener("change", function() {
    rectangle.style.width = this.value + "px";
    rectangle.style.height = this.value + "px";
});