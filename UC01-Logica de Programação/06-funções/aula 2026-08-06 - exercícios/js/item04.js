// **Contexto:** Um aplicativo de acompanhamento fitness auxilia os usuários a monitorar 
// sua evolução física ao longo do tempo. Entre os indicadores calculados está o Índice de 
// Massa Corporal (IMC), obtido a partir do peso e da altura da pessoa. Por ser utilizado 
// em diferentes telas do aplicativo, esse cálculo foi implementado como uma função independente.

// **Comando:** Implemente em JavaScript uma função chamada calcularIMC, que receba os 
// parâmetros peso e altura e retorne o valor do IMC. Em seguida, chame a função com 
// valores de teste e exiba o resultado com console.log().

function calcularIMC(peso, altura) {
    let valorIMC = peso / (altura ** 2);
    return valorIMC;
}

console.log(calcularIMC(75, 1.76).toFixed(2));