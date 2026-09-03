// 5. **Simulador de Caixa de Supermercado Simples**
//     - Peça ao usuário o preço de vários produtos.
//     - Calcule e exiba o total da compra.
//     - O programa deve fechar apenas quando o usuário digitar `-1`;

let produtoPreco = 0, somaTotal = 0;
while (produtoPreco != -1) {
    produtoPreco = Number(prompt("Digite o preço do produtos \n(para fechar, digite '-1')"));
    somaTotal += produtoPreco;
} alert(`Total da compra: R$${somaTotal.toFixed(2)}`);