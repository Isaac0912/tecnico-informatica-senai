// **Contexto:** Uma transportadora cobra o frete de acordo com o peso da encomenda, aplicando, por padrão, uma 
// taxa de R$ 3,50 por quilo. Em contratos com clientes específicos, no entanto, essa taxa pode ser negociada 
// individualmente. O sistema de cotação de frete precisa de uma função capaz de calcular esse valor considerando 
// a taxa padrão ou uma taxa personalizada.

// **Comando:** Implemente em JavaScript uma função chamada calcularFrete, que receba os parâmetros peso e 
// taxaPorKg, sendo a taxaPorKg um parâmetro com valor padrão de 3.5, e retorne o valor do frete. Em seguida, 
// chame a função e exiba o resultado com console.log().

function calcularFrete(peso, taxaPorKg) {
    return peso * taxaPorKg;
}
const taxaPadrao = 3.5;

console.log("R$" + calcularFrete(+30, taxaPadrao).toFixed(2));
console.log("R$" + calcularFrete(+30, 2).toFixed(2));