//**ITEM 08**
//**Contexto:** O painel administrativo de uma plataforma de vendas precisa exibir um ranking dos vendedores com base no 
// total de vendas do mês, do maior para o menor valor.
//**Comando:** Implemente em JavaScript um programa que ordene, de forma decrescente, um array com os valores de vendas 
// de 5 vendedores, utilizando o método sort() com uma função comparadora, e exiba o resultado com console.log().

let vendedoresRanking = [
    {nome: 'Lucas', vendas: 234},
    {nome: 'Andressa', vendas: 265},
    {nome: 'Isaías', vendas: 98},
    {nome: 'Jennifer', vendas: 136}
];
let vendedoresRankingDecrescente = vendedoresRanking.sort((a, b) => b.vendas - a.vendas);
console.log(vendedoresRankingDecrescente);