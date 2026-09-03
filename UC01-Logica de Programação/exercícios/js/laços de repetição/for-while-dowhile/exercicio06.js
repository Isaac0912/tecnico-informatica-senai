// 6. **Calculadora de Desconto**
//     - Peça ao usuário o valor de uma compra e a porcentagem de desconto.
//     - Calcule e exiba o valor final após o desconto.
//     - O programa deve fechar apenas quando o usuário digitar `-1`;
let valorCompra;
let valorDesconto = 0, compraDesconto = 0, sair = 0;
while (sair != -1) {
    valorCompra = Number(prompt("Digite o valor da compra"));
    valorDesconto = Number(prompt("Digite o valor do desconto"));
    compraDesconto = valorCompra - ((valorCompra / 100) * valorDesconto);
    alert(`O valor da compra com desconto fica ${compraDesconto.toFixed(2)}`);
    sair = Number(prompt("Deseja sair?\n(-1 = sim, 0 = não)"))
}