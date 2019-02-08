var t = document.querySelector('.t');
var func = document.querySelector('.func');
var conv = document.querySelector('.conv');
var cv = document.querySelector('.cv');

conv.addEventListener('click', function(){
if(func.value == 'f2c'){
cv.value = (parseInt(t.value) - 32) * 5/9;
} else if(func.value == 'c2f') {
cv.value = parseInt(t.value) * 9/5 + 32;
}
});