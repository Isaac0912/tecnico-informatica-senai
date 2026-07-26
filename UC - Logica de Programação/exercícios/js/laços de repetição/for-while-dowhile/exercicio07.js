// 7. **Contagem de Números Negativos**
//     - Escreva um algoritmo que lê 5 valores, um de cada vez, 
// e conta quantos destes valores são negativos, escrevendo esta informação.

let valorNegatvo = 0;
let leitorValor, contador = 1;
while (contador <= 5) {
    leitorValor = Number(prompt("Digite um valor"));
    if (leitorValor < 0) {
        valorNegatvo++;
    }
    contador++;
} alert(`Entre 5 valores que foram digitados, ${valorNegatvo} valor(es) eram negativos`);