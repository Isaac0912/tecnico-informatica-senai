let cardapio = Number(prompt("Escolhe seu pedido: 1-pizza, 2-hamburguer, 3-salada, 4-suco."));
switch (cardapio) {
    case 1:
        console.log("Pizza R$60.00")
    break;
    case 2:
        console.log("Hamburguer R$30.00")
    break;
    case 3:
        console.log("Salada R$20.00")
    break;
    case 4:
        console.log("Suco R$12.00")
    break;
    default:
        console.log("Entrada inválida.")
    break;
}

