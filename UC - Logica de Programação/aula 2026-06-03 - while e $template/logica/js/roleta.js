let escolha;
let numeroBala;
let shutOff = 0;
let rodada = 0;
while (shutOff != 1) {
    numeroBala = Math.floor(Math.random() * 6) + 1;
    rodada++;
    console.log("Rodada", rodada);
    escolha = Number(prompt("Digite um número entre 1 a 6: "));
    if (escolha !== numeroBala && escolha >= 1 && escolha <= 6) {
        console.log("Você sobreviveu.");
    } else if (escolha === numeroBala && escolha >= 1 && escolha <= 6) {
        console.log("Você morreu.");
    } else {
        console.log("Número inválido.");
    } 
    shutOff = Number(prompt("Você quer repetir?\n0-Sim.\n1-Não."));
}
console.log("Programa encerrado.");