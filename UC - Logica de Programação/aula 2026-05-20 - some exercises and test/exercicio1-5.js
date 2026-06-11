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