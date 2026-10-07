// **ITEM 13**
// **Contexto:** Um sistema de monitoramento registra continuamente eventos de erro em um array de logs. 
// Para investigar um incidente recente, a equipe de suporte precisa localizar o último registro de erro 
// do tipo ‘falha de conexão’.
// **Comando:** *Implemente em JavaScript um programa que utilize o método findLastIndex() para localizar 
// e exibir, com console.log(), o índice do último evento do array cujo tipo seja ‘falha de conexão’.*

let logs = [
    {id:100, aviso: "falha de conexão"},
    {id:101, aviso: "falha de input"},
    {id:102, aviso: null},
    {id:103, aviso: "falha de conexão"},
    {id:104, aviso: null}
];
let input = logs.findLastIndex(logs => logs.aviso === "falha de conexão");
console.log(input);