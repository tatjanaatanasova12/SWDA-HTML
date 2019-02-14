// alert('test');

var ime = 'Pero';
ime = "Janko";
ime = `Stanko`;

console.log(ime);

var prezime = 'Perovski';

var imePrezime = ime +  " " + prezime;

console.log(imePrezime);

var prezimeIme = `${prezime} ${ime}`; //multi line string

console.log(prezimeIme);

var tekst = `lorem ipsum dolor
sit Amet`;

console.log(tekst.length);
console.log(tekst[2]);

var visina = 182;
console.log(visina);

var shirina = 50;

var rezultat = visina + shirina;

console.log(rezultat);

// *
// /
// -
// %

// console.log(5 % 2);
console.log(5 % 3);


var a = 1;
a++; // zgolemuvanje za 1
a++; // zgolemuvanje za 1
a++; // zgolemuvanje za 1
console.log(a);
console.log(++a); //prvo zgolemi pa pecati
console.log(a);

a += 3; // a = a + 3;
console.log(a);

a *= 4;
console.log(a);

var r = (22 + 5) * 10;
console.log(r);


var vrne = false;
var duva = false;



console.log(vrne);
console.log(duva);

if(duva){
    console.log('ponesi jakna');
}

if(vrne){
    console.log('ponesi chador');
}

var pomalo = 2 < 10;
console.log(pomalo);

if(pomalo){
    console.log('Pomalo e..');
}

// BEZ POMOSHNA PROMENLIVA
if(2 < 20){
    console.log('POMALO');
}

// && - i 
// a && b - (i a i b treba da bidat true)
// || - ili
// a || b - (ili a ili b treba da bide true)

var vrneDuva = vrne && duva;
console.log(vrneDuva);

var broj = 6;

if(broj <= 4){
    console.log('mal broj');
} else if(broj > 4 && broj <= 7){
    console.log('sreden broj');
} else if(broj > 7 && broj <= 10 ){
    console.log('golem broj');
}


 vrne = true;
 duva = true;


if(!vrne && duva){
    console.log('ponesi chador');
} else if(vrne && !duva){
    console.log('ponesi kaput');
} else if (vrne && duva){
    console.log('ponesi montka');
} else {
    console.log('odime na plaza');
}
// podatoci od input polinja koi gi popolnuva korisnik
inputEmail = 'pero@pero.mk';
inputPassword = 'perecar';

// podatoci koi sistemot gi vlece od bazata na podatoci
DBEmail = 'pero@pero.mk';
DBPwd = '223305';

if(inputEmail == DBEmail && inputPassword == DBPwd) {
    console.log('login successfull'); 
} else {
    console.log('login failed!');
}


ime = 'Persa';

switch(ime) {
    case 'Milka':
        console.log('Jas ne sum Lile');
        break;
    case 'Jasna':
        console.log('Povelete jas sum Jasna...')
        break;
    case 'Lile':
        console.log('Zdravo, jas sum Lile');
        break;
    default:
    console.log('Nemame vakov covek kaj nas');
}