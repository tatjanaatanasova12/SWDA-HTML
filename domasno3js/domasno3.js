var a = document.querySelector('.a');
var b = document.querySelector('.b');
var op = document.querySelector('.op');
var res = document.querySelector('.res');
var calc = document.querySelector('.calc');

calc.addEventListener('click', function(){
    switch(op.value){ // '+', '-', '/', '*'
        case '+':
            res.value = parseInt(a.value) + parseInt(b.value);
            break;
        case '-':
            res.value = parseInt(a.value) - parseInt(b.value);
            break;
        case '/':
            res.value = parseInt(a.value) / parseInt(b.value);
            break;
        case '*':
            res.value = parseInt(a.value) * parseInt(b.value);
            break;
    }
});