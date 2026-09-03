// **ITEM 06**
// **Contexto:** Um sistema de help desk organiza os chamados por ordem de prioridade: chamados urgentes devem ser 
// inseridos no início da fila de atendimento, enquanto o atendimento sempre remove o chamado que está na primeira 
// posição.
// **Comando:** *Implemente em JavaScript um programa que utilize unshift() para inserir um chamado urgente no 
// início da fila e, em seguida, shift() para atender e exibir, com console.log(), o chamado que será atendido 
// primeiro.

function chamadoUrgente(arr, nome, chamado, urgencia) {
    if (urgencia === 'Y') {
        arr.unshift({chamado, nome});
        return arr;
    } else {
        arr.push({chamado, nome});
        return arr;
    }
}

let filaAtendimento = [
    {chamado: 131, nome: 'Ana'},
    {chamado: 109, nome: 'Lucas'}
];
let nome = prompt('Digite seu nome');
let chamadoUrgencia = prompt('É urgente? (Y/N)').toUpperCase();
let chamado = Math.floor(Math.random() * 101) + 100;
console.log(chamadoUrgente(filaAtendimento, nome, chamado, chamadoUrgencia));
