// 5. Faça um Programa que pergunte em que turno você estuda. 
// Peça para digitar M-matutino ou V-Vespertino ou N- Noturno. 
// Imprima a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso.
let turno = prompt("Digite seu turno (M, V, N) ou (Matutino, Vespertino, Noturno)").toLowercase();

if (turno === "m" || turno === "matutino") {
    console.log("Bom Dia!");
} else if (turno === "v" || turno === "vespertino") {
    console.log("Boa Tarde!");
} else if (turno === "n" || turno === "noturno") {
    console.log("Boa Noite!");
} else {
    console.log("Entrada inválida.");
}