let saldo = 100;
while (saldo > 0) {
    let saque = Number(prompt(`Saldo: ${saldo.toFixed(2)}.\nDigite um valor para saque: `));
    if (saque <= 0) {
        console.log("Valor do saque inválido");
    } else if (saque > saldo) {
        console.log("Saldo insuficiente.");
    } else {
        saldo = saldo - saque;
        //saldo -= saque;
        console.log(`Saldo atual: RS${saldo.toFixed(2)}`);
    }
}
console.log("Saldo zerado. Conta encerrada.");