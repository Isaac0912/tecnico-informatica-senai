// 1. Peça a nota de um aluno e mostre sua situação: aprovado se for maior ou igual a 7, 
// reprovado se for menor que 5, e em recuperação se for entre 5 e 7.

let notaAluno = Number(prompt("Digite sua nota."));
if (notaAluno < 0 || notaAluno > 10) {
    console.log("Entrada inválida.")
} else if (notaAluno >= 7) {
    console.log("Aprovado.");
} else if (notaAluno < 5) {
    console.log("Reprovado.");
} else if (notaAluno >= 5 && notaAluno < 7) {
    console.log("Recuperação.");
}