// ### Item 2

// **Contexto:** A tela de manutenção de um sistema web é exibida sempre que o servidor
//precisa ser reiniciado para a aplicação de atualizações. Para informar os usuários
//sobre o tempo restante, a interface apresenta uma contagem regressiva em segundos 
//antes da reinicialização. Durante esse intervalo, o sistema deve mostrar, em ordem
//decrescente, os valores do número 10 até o número 1.

// **Comando:** Implemente em JavaScript um programa que exiba no console os 
// números de 10 até 1, em ordem decrescente, um por linha, utilizando console.log().

for (contagemRegressiva = 10; contagemRegressiva > 0; contagemRegressiva--) {
    console.log(contagemRegressiva);
}