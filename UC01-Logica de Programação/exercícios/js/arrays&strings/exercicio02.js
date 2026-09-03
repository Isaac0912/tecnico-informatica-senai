// **ITEM 02** 
// **Contexto:** Uma emissora de boletos precisa gerar, em lote, o valor de cada fatura de um conjunto 
// de 5 clientes cadastrados no sistema. Cada valor foi previamente armazenado em um array de números.
// 
// **Comando:** *Implemente em JavaScript um programa que percorra o array de valores das faturas 
// e exiba, para cada uma, o texto ‘Fatura: R$’ seguido do valor, utilizando console.log().*

let faturaClientes = [100, 55.50, 23.45, 211, 33];
for (let i = 0; i < faturaClientes.length; i++) {
    console.log("Fatura: R$" + faturaClientes[i].toFixed(2));
}