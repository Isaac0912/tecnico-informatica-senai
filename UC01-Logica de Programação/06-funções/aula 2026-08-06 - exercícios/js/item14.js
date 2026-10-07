// **Contexto:** O motor de precificação de uma plataforma de vendas permite aplicar diferentes estratégias 
// de desconto a um mesmo preço, dependendo da campanha promocional vigente, sem alterar a lógica principal 
// de cálculo. Para isso, a função responsável pelo cálculo final recebe, como parâmetro, outra função que 
// define a regra de desconto a ser aplicada, característica das chamadas funções de alta ordem.

// **Comando:** Implemente em JavaScript uma função chamada aplicarDesconto, que receba os parâmetros preco 
// e calcularDesconto, sendo o segundo uma função responsável por calcular o valor do desconto, e retorne o 
// preço final. Implemente também uma função de desconto para ser utilizada como parâmetro. Em seguida, 
// chame aplicarDesconto e exiba o resultado com console.log().

function aplicarDesconto(preco, calcularDesconto) {
    let valorDesconto = calcularDesconto(preco);
    return preco - valorDesconto;
}
function descontoVIP(preco) {
    return preco * 0.10;
}
function descontoVerao(preco) {
    return preco * 0.05;
}
console.log(aplicarDesconto(200, descontoVIP));
console.log(aplicarDesconto(200, descontoVerao));