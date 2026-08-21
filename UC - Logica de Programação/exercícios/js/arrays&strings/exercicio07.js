// **ITEM 07**
// **Contexto:** Durante a atualização de um catálogo de produtos de uma loja virtual, o time 
// de estoque identificou que um item foi descontinuado e precisa ser removido da lista, ao 
// mesmo tempo em que dois novos produtos precisam ser inseridos na mesma posição.
// **Comando:** *Implemente em JavaScript um programa que utilize o método splice() para 
// remover um produto de uma posição específica de um array e inserir dois novos produtos 
// naquela mesma posição, exibindo o array resultante com console.log().

let catalogo = ['ProdutoA', 'ProdutoB', 'ProdutoC'];
catalogo.splice(2, 1, 'ProdutoD', 'ProdutoE');
console.log(catalogo);