// ### Item 10

// **Contexto:** Um módulo de cadastro gera códigos de identificação numéricos de forma 
// sequencial, a partir de 1. Por uma política interna de reserva, o primeiro código que 
// for múltiplo de 7 é destinado exclusivamente à administração do sistema e marca o ponto 
// em que a geração automática deve ser encerrada. O módulo precisa, portanto, localizar 
// esse primeiro múltiplo de 7 e interromper o processo nesse valor.

// **Comando:** Implemente em JavaScript um programa que percorra os números a partir de 1 
// e interrompa o processo ao encontrar o primeiro múltiplo de 7, exibindo esse número com 
// console.log().

let i = 1;

while(true) {
    if (i % 7 === 0) {
        console.log(i);
        break;
    }
i++;
}