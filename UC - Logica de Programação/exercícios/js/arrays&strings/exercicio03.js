//**ITEM 03**
//**Contexto:** O setor de estacionamento de um shopping center organiza suas vagas em uma matriz que representa fileiras 
// e colunas do pátio. Cada posição da matriz indica se a vaga está ocupada (1) ou livre (0).
//**Comando:** Implemente em JavaScript uma matriz 3x3 representando o pátio de estacionamento e exiba, com console.log(), 
// o status da vaga localizada na segunda fileira, terceira coluna.

let estacionamentoVagas = [
    [0, 1, 1],
    [1, 1, 1],
    [1, 0, 0]
];
let statusVagas = estacionamentoVagas[1][2];
console.log(statusVagas);