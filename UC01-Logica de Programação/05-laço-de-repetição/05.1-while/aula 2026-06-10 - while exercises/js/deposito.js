let saldo = 0;
let contagem = 0;
while (saldo < 5000) {
    let deposito = Number(prompt(`Saldo: ${saldo.toFixed(2)}\nEntre o valor do depósito.`));
    saldo += deposito;
    contagem++;
} if (saldo >= 5000) {
    alert(`Saldo final: ${saldo.toFixed(2)}\nQuantidade de depósitos: ${contagem}`);
} else {
    alert("Erro.");
}
console.log("Programa encerrado.");