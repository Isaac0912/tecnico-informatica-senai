//**ITEM 12**
//**Contexto:** Durante uma auditoria de sistema, a equipe de suporte técnico precisa identificar a posição 
//exata de um funcionário específico dentro do array de cadastro, para atualizar seus dados diretamente
//pelo índice.
//**Comando:** *Implemente em JavaScript um programa que utilize o método findIndex() para localizar e 
//exibir, com console.log(), o índice do funcionário cujo nome seja igual a um valor informado.*

let listaFuncionarios = [
    {nome: 'Lucas', idade: 26, área: 'Administração'},
    {nome: 'Roberto', idade: 20, área: 'Administração'},
    {nome: 'Luísa', idade: 31, área: 'Administração'},
    {nome: 'Yasmin', idade: 23, área: 'Tecnologia'},
    {nome: 'Pedro', idade: 35, área: 'Tecnologia'}
];
let input = listaFuncionarios.findIndex(listaFuncionarios => listaFuncionarios.nome === "Roberto");
console.log(input);