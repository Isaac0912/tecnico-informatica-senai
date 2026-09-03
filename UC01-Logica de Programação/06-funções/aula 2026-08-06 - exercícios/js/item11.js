// **Contexto:** Após calcular o Índice de Massa Corporal de um usuário, um aplicativo de acompanhamento fitness
// precisa classificar o resultado em uma faixa de referência, de acordo com os parâmetros utilizados pela equipe 
// de nutrição responsável pelo conteúdo do aplicativo, a fim de orientar o usuário sobre sua condição atual.

// **Comando:** Implemente em JavaScript uma função chamada classificarIMC, que receba o valor do IMC e retorne a
//  classificação correspondente, entre “abaixo do peso”, “peso normal” ou “sobrepeso”. Em seguida, chame a função
//  e exiba o resultado com console.log().

function classificarIMC(valorIMC) {
    if (valorIMC < 18.5) {
        return "abaixo do peso";
    } else if (valorIMC >= 18,5 && valorIMC < 30) {
        return "peso normal";
    } else {
        return "sobrepeso";
    }
}

console.log(classificarIMC(25.6));