//  **ITEM 09** 
//  **Contexto:** Um aplicativo de resultados esportivos exibe apenas 3 jogos por página, 
// para não sobrecarregar a tela do usuário no celular. A lista completa de jogos do dia 
// já está armazenada em um único array.
//  **Comando:** *Implemente em JavaScript um programa que utilize o método slice() para 
// extrair e exibir, com console.log(), apenas os 3 primeiros jogos de um array com a 
// lista completa de jogos do dia.

let listaCompletaDeJogos = ["JogoA", "JogoB", "JogoC", "JogoD"];
let listaDeJogosTelaUsuario = listaCompletaDeJogos.slice(0, 3);
console.log(listaDeJogosTelaUsuario);