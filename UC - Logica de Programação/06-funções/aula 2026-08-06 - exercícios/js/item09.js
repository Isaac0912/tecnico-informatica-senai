// **Contexto:** O sistema de precificação de uma loja virtual aplica um desconto fixo de 10% 
// sobre o preço original de todos os produtos antes de calcular o valor final exibido ao cliente. 
// Para manter o código organizado, a equipe de desenvolvimento decidiu separar o cálculo do desconto
// em uma função própria, reaproveitada por outra função responsável por determinar o preço final.

// **Comando:** Implemente em JavaScript uma função chamada calcularDesconto, que receba o preço original 
// e retorne o valor do desconto de 10%, e uma função chamada calcularPrecoFinal, que utilize a primeira 
// função internamente para retornar o preço já com o desconto aplicado. Em seguida, chame calcularPrecoFinal 
// e exiba o resultado com console.log().

function calcularDesconto(preco) {
    let valorDesconto = preco * 0.10;
    return valorDesconto;
} let valorDesconto = calcularDesconto(200)
function calcularPrecoFinal(valorDesconto) {
    let precoFinal = preco;
    precoFinal = precoFinal - valorDesconto;
    return precoFinal;
}

console.log(calcularPrecoFinal(valorDesconto));