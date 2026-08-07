// **Contexto:** Uma ferramenta de orçamento de material de construção calcula o perímetro de ambientes retangulares
//  para estimar a quantidade de rodapé necessária em uma reforma. Buscando uma sintaxe mais concisa para funções
//  simples de cálculo, a equipe de desenvolvimento optou por implementar essa função utilizando arrow function.

// **Comando:** Implemente em JavaScript, utilizando arrow function, uma função chamada calcularPerimetro, que receba
//  a largura e a altura de um ambiente retangular e retorne o valor do perímetro. Em seguida, chame a função e exiba
//  o resultado com console.log().

let calcularPerimetro = (largura, altura) => {
    return (largura * 2) + (altura * 2);
}

console.log(calcularPerimetro(10,20));