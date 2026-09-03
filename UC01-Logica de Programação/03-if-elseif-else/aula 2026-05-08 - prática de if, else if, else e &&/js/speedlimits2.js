let velocidade = Number(prompt("Digite a velocidade."));
const seriousFine = 150.00;
const verySeriousFine = 300.00;

if (velocidade > 80) {
    console.log("Multa aplicada!");
    if (velocidade > 100) {
        console.log("Valor da multa em BRL:", verySeriousFine);
    } else if (velociade >= 80 && velocidade <= 100) {
        console.log("Valor da multa em BRL:", seriousFine);
    }
} else {
    console.log("Veículo dentro do limite permitido. Boa viagem!");
}