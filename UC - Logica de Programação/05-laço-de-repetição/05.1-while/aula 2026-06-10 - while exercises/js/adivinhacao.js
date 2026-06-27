let tentativas = 7;
let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let adivinha = 0;
while (tentativas !== 0 && adivinha !== numeroSecreto) {
    let adivinha = Number(prompt(`Adivinhe um número entre 1 a 10.
        \nVocê tem ${tentativas} tentativas restantes.`));
    if (adivinha === numeroSecreto) {
        console.log(`Você acertou o número, era ${numeroSecreto}.`)
        alert(`Você acertou o número, era ${numeroSecreto}.`);
        tentativas = 2;
        break;
    }  else if (adivinha <= 0 || adivinha > 10) {
        console.log("Entrada inválida.")
        alert("Entrada inválida.")
    } else if (adivinha > numeroSecreto) {
        console.log("Número muito alto que número secreto.");
        alert("Número muito alto que número secreto.");
    } else if (adivinha < numeroSecreto) {
        console.log("Número muito baixo que número secreto.");
        alert("Número muito baixo que número secreto.");
    }
    tentativas--;
    if (tentativas === 0) {
    alert(`Game Over! O número era ${numeroSecreto}.`); 
}
} 