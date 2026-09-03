// 11. **Leia um número fornecido pelo usuário.**
//     - Se esse número for positivo, eleve o número ao quadrado.
//     - Se o número for negativo, mostre uma mensagem dizendo que o número é inválido.

let numero = Number(prompt("Digite um número para calcular ao quadrado."));
let numeroQuadrado;
if (numero > 0) {
    numeroQuadrado = numero ** 2;
    alert(`O número ${numero} ao quadrado é igual a ${numeroQuadrado}`);
} else {
    alert("Número inválido.")
}