// **ITEM 19**
// **Contexto:** Um sistema de controle de qualidade de uma indústria valida o código de barras 
// de cada produto antes da expedição. O primeiro caractere do código indica o país de origem 
// do lote.
// **Comando:** *Implemente em JavaScript um programa que armazene um código de barras em uma 
// string e exiba, com console.log(), o caractere localizado na primeira posição, acessado por 
// índice.

let codigoBarras = '12297';
let primeiroCaractere = codigoBarras.split('').slice(0, 1);
console.log(primeiroCaractere);