// ### Item 12

// **Contexto:** Um sistema acadêmico auxilia os professores no fechamento 
// das notas ao final do bimestre. Em uma turma com 5 alunos, o docente lança 
// as notas individualmente, e o sistema deve calcular automaticamente a média
// da turma a partir desses valores. Esse cálculo apoia a análise do desempenho 
// geral antes da divulgação dos resultados.

// **Comando:** Implemente em JavaScript um programa que leia 5 notas (utilizando prompt()), 
// some-as e exiba a média final com console.log().
let soma = 0;
let media = 0;
for(i = 1; i <= 5; i++) {
    do {
        let nota = Number(prompt(`Digite a ${i}ª nota.`));
    } while (nota < 0 || nota > 10);
    soma += nota;
    media = soma / 5;
} 
alert(`Soma = ${soma}\nMédia = ${media}`);