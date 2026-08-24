//**ITEM 11**
//**Contexto:** O departamento de Recursos Humanos de uma empresa precisa localizar rapidamente, em uma lista de 
// funcionários cadastrados como objetos, o primeiro colaborador que atua no setor de ‘Tecnologia’, para convocá-lo 
// a uma reunião.
//**Comando:** Implemente em JavaScript um programa que utilize o método find() para localizar e exibir, com console.log(), 
// o primeiro funcionário do array cujo setor seja ‘Tecnologia’.

let listaFuncionarios = [
    {nome: 'Lucas', idade: 26, área: 'Administração'},
    {nome: 'Roberto', idade: 20, área: 'Administração'},
    {nome: 'Luísa', idade: 31, área: 'Administração'},
    {nome: 'Yasmin', idade: 23, área: 'Tecnologia'},
    {nome: 'Pedro', idade: 35, área: 'Tecnologia'}
];
console.log(listaFuncionarios.find(a => a.área === 'Tecnologia'));