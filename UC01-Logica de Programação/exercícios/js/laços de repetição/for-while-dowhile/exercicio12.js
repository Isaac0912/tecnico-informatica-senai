// 12. **Simulador de Votação**
//     - Simule uma votação com três candidatos.
//     - O usuário vota até que ele digite um número negativo.
//     - Exiba o resultado final da votação.

let votoUsuario = 1, candidato1 = 0, candidato2 = 0, candidato3 = 0;
while (votoUsuario >= 0) {
    votoUsuario = Number(prompt("Vote para um candidato: 10, 20 ou 30"))
    switch (votoUsuario) {
        case 10:
            candidato1++;
            break;
        case 20:
            candidato2++;
            break;
        case 30:
            candidato3++;
            break;
    }
} console.log(`Resultado final das votações
    \nCandidato 10: ${candidato1}
    \nCandidato 20: ${candidato2}
    \nCandidato 30: ${candidato3}`)