// 10. **Conversor de Moedas:** 
//     - Crie um conversor que aceite um valor em reais e a cotação do dólar, euro e libra.
//     - O programa deve converter o valor para essas três moedas.
let valorUSD = 0.20;
let valorEUR = 0.17;
let valorLIB = 0.15;

let valorBRL = Number(prompt("Digite um valor em BRL. (Use ponto ao invés de vírgula) "));
let escolha = prompt("Escolhe a moeda que deseja converter (Euro = EUR. Dólar = USD. Libra = LIB.) ");
let conversor;

if (valorBRL < 1) {
    console.log("Entrada de valor em BRL inválida.")
} else if (escolha != "EUR" || escolha != "USD" || escolha != "LIB") {
    console.log("Entrada de moeda inválida.")
} else {
    if (escolha === "EUR") {
    conversor = valorBRL * valorEUR;
    console.log("Valor é", conversor.toFixed(2));
} else if (escolha === "LIB") {
    conversor = valorBRL * valorLIB;
    console.log("Valor é", conversor.toFixed(2));
} else if (escolha === "USD") {
    conversor = valorBRL * valorUSD;
    console.log("Valor é", conversor.toFixed(2));
} 
}
