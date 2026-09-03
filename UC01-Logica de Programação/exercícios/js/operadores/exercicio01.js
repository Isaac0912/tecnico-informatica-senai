let nota1 = 10;
let nota2 = 5;
let nota3 = 9;
let media;
const media_corte = 7;
let estaAprovado
media = (nota1 + nota2 + nota3) / 3;
console.log("Sua media de notas é:", media);

estaAprovado = media >= media_corte;
console.log(estaAprovado);