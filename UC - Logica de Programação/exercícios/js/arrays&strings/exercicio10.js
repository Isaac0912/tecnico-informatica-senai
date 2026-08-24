//**ITEM 10**
//**Contexto:** O setor de logística de um centro de distribuição precisa verificar, rapidamente, se um determinado código 
// de rastreio já consta na lista de encomendas despachadas no dia, antes de registrar uma nova saída.
//**Comando:** Implemente em JavaScript um programa que utilize o método includes() para verificar se um código de rastreio 
// informado está presente em um array de códigos já despachados, exibindo o resultado (true ou false) com console.log().

let codigoAnalisar = Number(prompt("Digite o código."));
let listaCodigoEncomendas = [1119832, 1119833, 1119834, 1119835, 1119836, 1119840];
console.log(listaCodigoEncomendas.includes(codigoAnalisar));
