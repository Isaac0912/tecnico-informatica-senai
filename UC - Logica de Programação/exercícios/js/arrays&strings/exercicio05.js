// **ITEM 05**
// **Contexto:** Um editor de texto online permite que o usuário desfaça sua última ação. 
// Para isso, cada ação realizada é armazenada no final de um array que funciona como uma 
// pilha de histórico.
// **Comando:** *Implemente em JavaScript um programa que utilize o método pop() para remover 
// e exibir, com console.log(), a última ação registrada em um array de histórico de edições.

let historicoDeAcao = ['acao1', 'acao2', 'acao3'];
historicoDeAcao.pop();
console.log(historicoDeAcao);