// 5. Crie uma calculadora simples que aceite dois números e um operador (+, -, *, /) e realize a operação apropriada.

let numeroA = Number(prompt("Digite o primeiro número."));
let numeroB = Number(prompt("Digite o segundo número."));
let operador = prompt("Digite o operador (+, -, *, /).");
let calculo;
if (operador === "+") {
    calculo = numeroA + numeroB;
} else if (operador === "-") {
    calculo = numeroA - numeroB;
} else if (operador === "*") {
    calculo = numeroA * numeroB;
} else if (operador === "/") {
    calculo = numeroA / numeroB;
} console.log(calculo);