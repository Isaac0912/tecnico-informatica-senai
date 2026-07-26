// 11. **Média simples**: 
//     - Faça um programa que peça ao usuário para digitar 5 números e informe a soma e a média dos números.

let usuarioNumero, soma = 0, media = 0;
for (let i = 1; i <= 5; i++) {
    usuarioNumero = Number(prompt("Digite qualquer número"));
    soma += usuarioNumero;
} media = soma / 5;
alert(`Soma dos números: ${soma}\nMédia dos números: ${media}`);