let mes = Number(prompt("Digite o mês do ano."));

switch (mes) {
    case 12:
    case 1:
    case 2:
        console.log(mes + "° mês está na estação do ano Verão.")
    break;
    case 3:
    case 4:
    case 5:
        console.log(mes + "° mês está na estação do ano Outuno.")
    break;
    case 6:
    case 7:
    case 8:
        console.log(mes + "° mês está na estação do ano Inverno.")
    break;
    case 9:
    case 10:
    case 11:
        console.log(mes + "° mês está na estação do ano Primavera.")
    break;
    default:
        console.log("Entrada inválida.")
    break;
}