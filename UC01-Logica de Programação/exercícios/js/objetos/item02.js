// **ITEM 2**
// **Contexto:** O sistema de estoque de uma loja de informática registra os produtos disponíveis para venda, incluindo a 
// quantidade em estoque. Após a confirmação de uma venda, o sistema precisa atualizar a quantidade disponível do produto 
// vendido, refletindo a baixa realizada.
// **Comando:** Implemente em JavaScript um objeto chamado produto com as propriedades nome, preco e estoque. Em seguida, 
// altere o valor da propriedade estoque para simular uma venda e exiba o objeto atualizado com console.log().

let produto = {
    nome: "Fone de Ouvido TWS",
    preco: 119.90,
    estoque: 204
}
produto.estoque -= 1;
console.log(produto);