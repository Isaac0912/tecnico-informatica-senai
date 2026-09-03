//Leia N notas e calcule a média, a maior nota e a menor nota.
let quantidadeNotas = Number(prompt("Digite a quantidade de notas"));
let maior;
let menor;
let soma = 0;
for (i = 1; i <= quantidadeNotas; i++) {
    nota = Number(prompt(`Digite o resultado da ${i}° nota`));
    soma = soma + nota;
    if (i === 1) {
        maior = nota;
        menor = nota;
    } else {
        if (maior < nota) {
            maior = nota;
        } else if (menor > nota) {
            menor = nota;
        }
    }
}
media = soma / quantidadeNotas
console.log("Média", media);
console.log("Maior nota", maior);
console.log("Menor nota", menor);