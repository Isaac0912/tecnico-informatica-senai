// **ITEM 27**
// **Contexto:** Um sistema de importação de contatos recebe um arquivo no formato CSV, no qual os dados de cada 
// contato (nome, telefone e e-mail) estão separados por ponto e vírgula em uma única linha de texto.
// **Comando:** Implemente em JavaScript um programa que utilize o método split() para separar uma linha de texto 
// no formato ‘nome;telefone;email’ em um array com os três valores, exibindo o resultado com console.log().

let csv = 'Isaac;1111-1111;www@email.com';
let contato = csv.split(';');
console.log(contato);