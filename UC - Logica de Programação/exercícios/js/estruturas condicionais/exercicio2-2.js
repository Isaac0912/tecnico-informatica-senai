// 2. Crie um programa que peça a temperatura do paciente e informe se ele está com febre (acima de 37°C), 
// hipotermia (abaixo de 35°C) ou temperatura normal.

let temperaturaPaciente = Number(prompt("Digite a temperatura do paciente em Celius (°C)."));
if (temperaturaPaciente > 37) {
    console.log("Febre.");
} else if (temperaturaPaciente < 35) {
    console.log("Hipotermia.");
} else if (temperaturaPaciente >= 35 && temperaturaPaciente <= 37) {
    console.log("Temperatura normal.");
}