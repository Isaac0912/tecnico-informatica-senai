const nomeA = "Joana";
console.log(nomeA);

let nomeB = "João";
console.log(nomeB);
nomeB = "Anderson";
console.log(nomeB);

let altura = 1.80;
console.log(altura);
console.log(typeof(altura));

let valorNull = null;
console.log(valorNull);
console.log(typeof(valorNull));

let valorIndefinido = undefined;
console.log(valorIndefinido);
console.log(typeof(valorIndefinido));

let a = 10;
let b = '10';
console.log(a == b); //o "==" analisa o conteúdo, nesse caso, mesmo o número(a) e a string(b) têm o mesmo conteúdo, etnão true 
console.log(a === b); //o "===" analisa tanto tipo quanto conteúdo. Nesse caso, número != string. Então false.