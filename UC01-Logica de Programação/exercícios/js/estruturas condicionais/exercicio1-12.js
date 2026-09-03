// 12. **Escreva um programa que, dados dois números inteiros, mostre na tela:**
//     - O maior deles
//     - A diferença existente entre ambos.
// Se por acaso, os dois números forem iguais, imprima a mensagem “Números Iguais”.
let numeroA = Number(prompt("Digite o número A."));
let numeroB = Number(prompt("Digite o número B."));
let diferencaAB;
if (numeroA > numeroB) {
    diferencaAB = numeroA - numeroB;
    alert(`Número A é maior que número B (${numeroA} > ${numeroB})`);
    alert(`Diferença entre A e B: ${diferencaAB}`);
} else if (numeroA < numeroB) {
    diferencaAB = numeroB - numeroA;
    alert(`Número B é maior que número A (${numeroB} > ${numeroA})`);
    alert(`Diferença entre B e A: ${diferencaAB}`);
}
