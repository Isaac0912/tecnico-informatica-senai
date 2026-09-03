// **Contexto:** Um sistema de emissão de códigos de acesso utiliza palavras palíndromas como parte de uma camada 
// adicional de verificação visual, já que esses códigos são mais fáceis de conferir manualmente pela equipe de 
// segurança. O sistema precisa de uma função que verifique se um texto informado é um palíndromo, ou seja, se 
// permanece igual ao ser lido de trás para frente.

// **Comando:** Implemente em JavaScript uma função chamada ehPalindromo, que receba um texto e retorne um valor 
// booleano indicando se ele é um palíndromo. Em seguida, chame a função e exiba o resultado com console.log().

function ehPalindromo(texto) {
    let textoNormal = texto.toLowerCase().replace(/[^a-z0-9]/g, "");
    let textoInvertido = textoNormal.split("").reverse().join("");
    return textoNormal === textoInvertido;
}

let texto1 = "Ame o poema";
let texto2 = "Socorram me subi no onibus em Marrocos";
let texto3 = "Uhul";

console.log(ehPalindromo(texto1));
console.log(ehPalindromo(texto2));
console.log(ehPalindromo(texto3));