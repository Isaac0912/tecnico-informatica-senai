// **Contexto:** Um sistema de checkout de uma loja virtual precisa calcular 
// o valor total de um item em diferentes telas do aplicativo, como o carrinho, 
// o resumo do pedido e a nota fiscal. Para evitar repetir a mesma lógica de 
// cálculo em cada tela, a equipe de desenvolvimento decidiu isolar essa operação 
// em uma função reutilizável, responsável por receber a quantidade e o preço 
// unitário do produto e devolver o valor total correspondente.

// **Comando:** Implemente em JavaScript uma função chamada calcularTotal, 
// que receba os parâmetros quantidade e precoUnitario e retorne o valor total 
// da compra. Em seguida, chame a função com valores de teste e exiba o resultado 
// com console.log().

function calcularTotal(quantidade, precoUnitario) {
    let valorTotal = precoUnitario * quantidade;
    return valorTotal;
}

console.log(calcularTotal(2, 300));