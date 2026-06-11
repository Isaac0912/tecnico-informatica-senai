let tentativas = 7;
let numero = Math.floor(Math.random() * 10) + 1;
let adivinha = 0;
while (tentativas !== 0 && adivinha !== numero) {
    let adivinha = Number(prompt(`Digite um número entre 1 a 10.\nVocê tem ${tentativas} tentativas restantes.`));
    if (adivinha === numero) {
        alert(`Você acertou o número, era ${numero}.`);
        tentativas = 1;
    }  else if (adivinha <= 0 || adivinha > 10) {
        alert("Entrada inválida.")
    }
    tentativas--;
} if (tentativas === 0) {
    alert(`Game Over! O número era ${numero}.`);
}