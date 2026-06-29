// 14. Crie um programa que peça o valor de uma compra e a forma de pagamento 
// (1-à vista, 2-à prazo 30 dias, 3-à prazo 60 dias, 4-à prazo 90 dias) e calcule o valor final conforme a tabela:
// à vista (10% desconto), 30 dias (5% desconto), 60 dias (mesmo valor), 90 dias (5% juros).
let valorFinal = 0;
let alteracao = 0;
let valorCompra = Number(prompt("Digite o valor da compra."));
let formaPagamento = Number(prompt(`Digite sua forma de pagamento:
    \n1-à vista.\n2-à prazo 30 dias.\n3-à prazo 60 dias.\n4-à prazo 90 dias.`));
if (formaPagamento === 1) {
    valorFinal = valorCompra * 0.90;
} else if (formaPagamento === 2) {
    valorFinal = valorCompra * 0.95;
} else if (formaPagamento === 3) {
    valorFinal = valorCompra * 1;
} else if (formaPagamento === 4) {
    valorFinal = valorCompra * 1.05;
} alert(`Valor final: R$${valorFinal.toFixed(2)}`);