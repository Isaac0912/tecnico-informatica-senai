// 8. **Tabuada Seletiva**
//     - Desenvolva um gerador de tabuada, capaz de gerar a tabuada de qualquer número inteiro entre 1 a 10.
//     - O usuário deve informar de qual numero ele deseja ver a tabuada. A saída deve ser conforme o exemplo abaixo:
//     - `Tabuada de 5:
//     5 X 1 = 5
//     5 X 2 = 10
//     ...
//     5 X 10 = 50`

let tabuada = Number(prompt("Digite a tabuada que deseja entre 1 a 10."));
if (tabuada >= 1 && tabuada <= 10) {
    console.log(`Tabuada de ${tabuada}`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${tabuada} X ${i} = ${tabuada * i}`);
    }
}
