// 6. Peça o ano de nascimento e informe se a pessoa pode votar (16 anos ou mais) e se pode dirigir (18 anos ou mais).
//     - Utilize **`IF`,`ELSE`** e **`ELSE IF`** nesta versão.

let anoNascimento = Number(prompt("Digite seu ano de nascimento."));
let idade = 2026 - anoNascimento;
if (idade >= 16) {
    console.log("Você pode votar.");
    if (idade >= 18) {
        console.log("Você pode dirigir.");
    } else {
        console.log("Você não pode dirigir.");
    }
} else {
    console.log("Você não pode votar\nVocê não pode dirigir.");
}