// 3. Peça dois números e mostre o maior deles.
let numeroA = Number(prompt("Digite o primeiro número."));
let numeroB = Number(prompt("Digite o segundo número."));

if (numeroA > numeroB) {
    console.log("Número", numeroA, "é maior que", numeroB);
} else if (numeroA < numeroB) {
    console.log("Número", numeroB, "é maior que", numeroA);
} else {
    console.log("Ambos números são iguais.");
}