// **Contexto:** Um sistema acadêmico calcula a média final dos alunos considerando um número variável 
// de avaliações, já que cada disciplina pode adotar uma quantidade diferente de provas e trabalhos ao 
// longo do período letivo. Por esse motivo, a função responsável pelo cálculo precisa aceitar uma 
// quantidade flexível de notas.

// **Comando:** Implemente em JavaScript uma função chamada calcularMedia, que receba uma quantidade 
// variável de notas utilizando parâmetro rest e retorne a média entre elas. Em seguida, chame a função 
// com um conjunto de notas de teste e exiba o resultado com console.log().

function calcularMedia(... notas) {
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
        soma = soma + notas[i];
    }
    let media = soma / notas.length;
    return media;
}
console.log(calcularMedia(10, 8, 7, 10));