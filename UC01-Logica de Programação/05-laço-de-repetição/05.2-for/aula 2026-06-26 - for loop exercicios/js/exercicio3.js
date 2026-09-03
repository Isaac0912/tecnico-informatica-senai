//Calcule a soma de todos os múltiplos de 3 entre 1 a 100. (numero % 3 == 0)
let soma = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
        soma = soma + i;
    }
}
console.log(soma);