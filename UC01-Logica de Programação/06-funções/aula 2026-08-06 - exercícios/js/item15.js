// **Contexto:** Uma ferramenta de análise de tráfego de um site precisa contabilizar o número de acessos 
// a uma página específica, mantendo esse valor preservado entre chamadas sucessivas, sem depender de uma 
// variável global. Para isso, a equipe de desenvolvimento utiliza uma função que retorna outra função, 
// capaz de manter o valor da contagem em seu próprio escopo.

// **Comando:** Implemente em JavaScript uma função chamada criarContador, que retorne uma função interna 
// responsável por incrementar e retornar a contagem de acessos a cada chamada. Em seguida, chame a função 
// interna duas vezes e exiba os resultados com console.log().

function criarContador() {
    let acessos = 0;
    return function() {
        acessos++;
        return acessos;
    };
};
const input = criarContador();
console.log(input());
console.log(input());