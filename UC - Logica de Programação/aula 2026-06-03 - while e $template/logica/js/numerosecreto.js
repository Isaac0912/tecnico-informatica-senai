const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let chute = 0;
let tentativas = 0;
while (chute !== numeroSecreto) {
    chute = Number(prompt("Adivinhe o número de 1 até 100: "));
    tentativas++;
    if (chute < numeroSecreto) {
        console.log("Número muito baixo.");
        alert("Número muito baixo.");
    } else if (chute > numeroSecreto) {
        console.log("Número muito alto.");
        alert("Número muito alto.");
    }
}console.log("Acertou em", tentativas, "tentativas.");