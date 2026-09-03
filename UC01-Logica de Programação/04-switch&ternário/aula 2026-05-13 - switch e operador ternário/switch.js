// let idade = 18;
// let status;
// status = (idade >= 18) ? "Adulto" : "Menor de idade";
// console.log(status);

let dia = Number(prompt("Digite o número do dia (1-dom, 2-seg, 3-ter, 4-qua, 5-qui, 6-sex, 7-sab):"));
let nomeDia;

switch (dia) {
    case 1:
        console.log("Domingo.")
    break;
    case 2:
        console.log("Segunda.")
    break;
    case 3:
        console.log("Terça.")
    break;
    case 4:
        console.log("Quarta.")
    break;
    case 5:
        console.log("Quinta.")
    break;
    case 6:
        console.log("Sexta.")
    break;
    case 7:
        console.log("Sábado.")
    break;
    default:
        nomeDia = "Numero Inválido";
    break;
}
console.log("Dia:", nomeDia);