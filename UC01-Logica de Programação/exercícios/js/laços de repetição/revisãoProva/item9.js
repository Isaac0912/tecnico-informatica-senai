// ### Item 9

// **Contexto:** O setor financeiro de uma empresa administra um carnê de 
// pagamento com 50 parcelas, numeradas de 1 a 50. De acordo com o programa 
// de fidelidade vigente, somente as parcelas de número par concedem pontos 
// ao cliente. Para calcular a pontuação total acumulada, o sistema precisa 
// percorrer todas as parcelas e somar os números correspondentes apenas às 
// de posição par.

// **Comando:** Implemente em JavaScript um programa que percorra os números 
// de 1 a 50, some apenas os pares e exiba o total ao final com console.log().

for (let i = 1; i <= 50; i++) {
    let parcelaPar = 0;
    if(i % 2 === 0) {
        parcelaPar += i;
        console.log(parcelaPar);
    }
}