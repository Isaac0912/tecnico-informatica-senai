// 16. **Peça o ano de nascimento e informe se a pessoa pode votar (16 anos ou mais) e se pode dirigir (18 anos ou mais).**
//     - Utilize apenas `IF` nesta versão.
let anoNascimento = Number(prompt("Digite seu ano de nascimento."));
let idade = 2026 - anoNascimento;
if (anoNascimento >= 16) {
    console.log("Você pode votar.")
} else {
    console.log("Você não pode votar.");
} if (anoNascimento >= 18) {
    console.log("Você pode dirigir.");
} else {
    console.log("Você não pode dirigir.");
}