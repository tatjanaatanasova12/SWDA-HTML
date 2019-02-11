var amount = document.querySelector("#amount");
var currency = document.querySelector("#curency");
var button = document.querySelector("#convert");
var result = document.querySelector("#result");

button.addEventListener("click", function(){
    switch(currency.value) {
        case "eur": 
            result.innerHTML = "Conversion in MKD: " + (parseInt(amount.value) * 61.5);
        break;
        case "usd": 
            result.innerHTML = "Conversion in MKD: " + (parseInt(amount.value) * 44.5);
        break;
    }
});