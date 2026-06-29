// 13. Crie um programa que peça o tipo de cartão de crédito (1-Normal, 2-Universitário, 3-Premium) e o valor da compra, 
// e aplique um desconto conforme o tipo (5%, 10%, 15% respectivamente).
let valorCompra = Number(prompt("Digite o valor da compra.")).toFixed(2);
let tipoCartao = Number(prompt("Digite o tipo de cartão de crédito\n1-Normal\n2-Universitário\n3-Premium"));
let compraDesconto;
let valorDesconto;
if (tipoCartao === 1) {
    valorDesconto = (valorCompra / 100) * 5;
} else if (tipoCartao === 2) {
    valorDesconto = (valorCompra / 100) * 10;
} else if (tipoCartao === 3) {
    valorDesconto = (valorCompra / 100) * 15;
}
compraDesconto = (valorCompra - valorDesconto).toFixed(2);
alert(`O valor da sua compra de R$${valorCompra} com o desconto do seu cartão ficará R$${compraDesconto}`);