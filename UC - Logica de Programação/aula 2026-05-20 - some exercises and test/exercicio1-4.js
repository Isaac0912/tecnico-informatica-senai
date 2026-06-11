let genero = prompt("digite seu gênero (F,M, Feminino ou Masculino)").toLowerCase();

if (genero === "f" || genero === "feminino") {
    console.log("Seu gênero é feminino.");
} else if (genero === "m" || genero === "masculino") {
    console.log("Seu gênero é masculino.");
} else {
    console.log("Entrada inválida");
}