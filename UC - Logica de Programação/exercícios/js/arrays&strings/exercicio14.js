// **ITEM 14**
// **Contexto:** Após a fusão de duas filiais de uma rede de lojas, o sistema precisa unificar as duas listas de 
// clientes cadastrados em uma única lista, e em seguida gerar um texto único com os nomes separados por vírgula 
// para envio por e-mail.
// **Comando:** Implemente em JavaScript um programa que utilize concat() para unir dois arrays de nomes de 
// clientes e, em seguida, join() para transformar o array unificado em uma única string separada por vírgulas, 
// exibindo o resultado com console.log().

let listaClienteA = ['João', 'Pedro', 'Sara', 'Sofia'];
let listaClienteB = ['Raquel', 'Anderson', 'Lívia', 'Bianca'];
let listaClienteAB = listaClienteA.concat(listaClienteB).join(', ');
console.log(listaClienteAB);