// **Contexto:** Uma loja virtual aplica, por padrão, um desconto de 10% em compras realizadas 
// por clientes cadastrados no programa de fidelidade, podendo conceder percentuais promocionais 
// diferentes em datas especiais. O sistema de precificação precisa de uma função que calcule o 
// preço final de um produto considerando esse desconto.

// **Comando:** Implemente em JavaScript uma função chamada calcularPrecoComDesconto, que receba 
// os parâmetros preco e desconto, sendo o desconto um parâmetro com valor padrão de 10, e retorne 
// o preço final. Em seguida, chame a função e exiba o resultado com console.log().

function calcularPrecoComDesconto(preco, desconto) {
    let precoFinal = preco - (preco * desconto);
    return precoFinal;
}

const descontoPadrao = 0.10;
console.log("R$"+calcularPrecoComDesconto(200, descontoPadrao).toFixed(2));
console.log("R$"+calcularPrecoComDesconto(200, 0.20).toFixed(2));