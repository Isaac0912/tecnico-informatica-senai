// 9. Desenvolva um programa que peça o número de um mês (1 a 12) e informe a qual estação do ano ele pertence 
// (considere o hemisfério sul).

let mes = Number(prompt("Digite um número de mês entre 1 a 12."));
if (mes === 12 || mes === 1 || mes === 2) {
    alert(`O mês ${mes} pertence a estação Verão.`);
} else if (mes === 3 || mes === 4 || mes === 5) {
    alert(`O mês ${mes} pertence a estação Outono.`);
} else if (mes === 6 || mes === 7 || mes === 8) {
    alert(`O mês ${mes} pertence a estação Inverno.`);
} else if (mes === 9 || mes === 10 || mes === 11) {
    alert(`O mês ${mes} pertence a estação Primavera.`);
} console.log("Programa encerrado.");