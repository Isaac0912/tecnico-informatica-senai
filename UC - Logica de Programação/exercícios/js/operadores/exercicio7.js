let peso = 65;
let altura = 1.70;
const imc = peso / altura ** 2;
console.log('seu IMC é', imc);
const pesoIdeal = imc >= 24.9;
console.log(pesoIdeal);