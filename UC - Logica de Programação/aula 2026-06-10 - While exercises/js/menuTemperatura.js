let temperaturaCelsius = Number(prompt("Entre a temperatura atual em Celsius."));
let temperaturaFahrenheit = (temperaturaCelsius * 1.8) + 32;
let menu = undefined;

while (menu !== 0) {
    menu = Number(prompt("Menu\n1-Celsius para Fahrenheit.\n2-Fahrenheit para Celsius.\n0-Sair."));
    if (menu == 1) {
        let formulaFahrenheit = (temperaturaCelsius * 1.8) + 32;
        alert(`${formulaFahrenheit}°F`);
    } else if (menu == 2) {
        let formulaCelsius = 5/9 * (temperaturaFahrenheit - 32);
        alert(`${formulaCelsius}°C`);
    }
}
alert("Programa encerrado.");