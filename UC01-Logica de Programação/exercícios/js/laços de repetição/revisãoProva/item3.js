// ### Item 3

// **Contexto:** O sistema financeiro de um e-commerce consolida o faturamento
// diário a partir das vendas registradas no período. Antes de colocar o cálculo 
// em produção, a equipe de desenvolvimento o valida com um cenário de teste composto 
// por 10 vendas, no qual o valor de cada venda, em reais, corresponde ao seu número 
// de ordem (a 1ª venda equivale a R$ 1, a 2ª a R$ 2, e assim sucessivamente até a 10ª).
// A soma desses valores representa o faturamento simulado do dia.

// **Comando:** Implemente em JavaScript um programa que some os valores 
// das 10 vendas (de 1 a 10) e exiba o faturamento total com console.log().

for (let vendaValor = 1; vendaValor <= 10; vendaValor++) {
    console.log(vendaValor + "ª Venda = R$"+vendaValor.toFixed(2));
}