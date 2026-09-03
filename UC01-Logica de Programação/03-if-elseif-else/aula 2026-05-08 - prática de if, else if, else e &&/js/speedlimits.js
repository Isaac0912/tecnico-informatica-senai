let vehicleSpeedKmH = Number(prompt("Digite a velocidade."));
const seriousFine = 150.00;
const verySeriousFine = 300.00;

if (vehicleSpeedKmH > 80) {
    console.log("Multa aplicada!");
    if (vehicleSpeedKmH > 100) {
        console.log("Valor da multa em BRL:", verySeriousFine.toFixed(2));
    } else {
        console.log("Valor da multa em BRL:", seriousFine);
    }
} else {
    console.log("Velocidade permitida, boa viagem!");
}