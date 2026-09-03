const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let chute = 0;
let tentativas = 0;
while (chute !== numeroSecreto && tentativas < 7) {
    chute = Number(prompt(`Adivinhe o número de 1 até 100 até chegar 7 tentativas.
        \ntentativa: ${tentativas}.`));
    if (chute === numeroSecreto) {
        alert(`Acertou em ${tentativas} tentativas.`);
        console.log("Acertou em", tentativas, "tentativas.");
        break;
    }
    if (chute < numeroSecreto) {
        console.log("Número muito baixo.");
        alert("Número muito baixo.");
    } else if (chute > numeroSecreto) {
        console.log("Número muito alto.");
        alert("Número muito alto.");
    tentativas++;
    }
}

if (tentativas === 7) {
    console.log(`Game Over!\nO número era ${numeroSecreto}`)
}