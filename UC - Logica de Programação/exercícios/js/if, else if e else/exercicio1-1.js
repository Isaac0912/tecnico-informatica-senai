// 1. Solicite a idade do usuário e informe se ele é maior de idade ou não.
let idade = Number(prompt("Digite sua idade."));
if (idade >= 18 && idade > 0) {
    console.log("Maior de idade.");
} else if (idade >= 0 && idade < 18) {
    console.log("Menor de idade.");
} else {
    console.log("entrada inválida.");
}