// 1. Simule uma fila de atendimento: use push para adicionar clientes e shift para 
// atender (remover o primeiro). Exiba o estado da fila a cada operação.

let filaCliente = ['Gustavo', 'Hugo'];
filaCliente.push('Ana', 'Eduardo');
console.log(filaCliente);

filaCliente.shift();
console.log(filaCliente);