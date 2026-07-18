// Faça um programa que peça a idade e o sexo de uma pessoa e informe se ela pode ou não se aposentar
//  (homens: 65 anos, mulheres: 62 anos).

let idadeUsuario = Number(prompt("Digite sua idade."));
let sexoUsuario = prompt("Digite seu sexo (M = Masculino; F = Feminino).").toUpperCase();
console.log(idadeUsuario);
console.log(sexoUsuario);
if (idadeUsuario >= 65) {
    console.log("Você pode se aposentar.");
} else if (idadeUsuario >= 62) {
    if (sexoUsuario === "F") {
        console.log("Você pode se aposentar.");
    } else if (sexoUsuario === "M") {
        console.log("Você não pode se aposentar ainda.");
    } 
} else {
    console.log("Você não pode se aposentar ainda.")
}