// 13. **Gerador de Números Aleatórios**
//     - Crie um programa que gere 10 números aleatórios entre 1 e 100.
//     - Mostre os valores gerador na tela um em sequência do outro utilizando o `\t`.

let numeroAleatorio;
let resultado = "";
for (let i = 1; i <= 10; i++) {
    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    resultado += numeroAleatorio + "\t";
} console.log(resultado);