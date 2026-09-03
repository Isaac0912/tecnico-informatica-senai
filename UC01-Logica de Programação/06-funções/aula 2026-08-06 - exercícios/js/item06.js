// **Contexto:** Um sistema escolar organiza os alunos em grupos de trabalho alternando critérios de 
// sorteio, e um dos critérios utilizados classifica o número de chamada do aluno como par ou ímpar. 
// Por ser uma verificação usada em diferentes etapas do sorteio, essa lógica foi implementada como uma 
// função independente.

// **Comando:** Implemente em JavaScript uma função chamada classificarNumero, que receba um número 
// inteiro e retorne a string “par” ou “ímpar”, conforme o caso. Em seguida, chame a função e exiba 
// o resultado com console.log().

function classificarNumero(num) {
    if (num % 2 === 0) {
        return "par";
    } else {
        return "ímpar";
    }
}

console.log(classificarNumero(2));
console.log(classificarNumero(3));