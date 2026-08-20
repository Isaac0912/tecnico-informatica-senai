// Array literal (recomendado).
let frutas = ["maçã", "banana", "laranja", "uva"];
let notas = [7.5, 8.0, 9.5, 6.0, 5.5];
let misto = [42, "texto", true, null];
let vazio = []; // array vazio - válido e comum.

// Array com construtor (menos recomendado).
let array = new Array(3); // [empty * 3].

console.log(typeof frutas); // 'object' // arrays são objetos em JS
console.log(Array.isArray(frutas)); // true // use Array.isArray() para verificar


console.log(frutas[0]); // 'maçã' // primeiro elemento — índice 0
console.log(frutas[1]); // 'banana'
console.log(frutas[3]); // 'uva' // último elemento — índice length-1
console.log(frutas[4]); // undefined // índice fora do range
console.log(frutas.length); // 4 // número de elementos

// Acessar o último elemento sempre:
console.log(frutas[frutas.length - 1]); // 'uva' // padrão muito usado

let cores = ['vermelho', 'verde', 'azul'];
cores[1] = 'amarelo'; // modifica o índice 1
console.log(cores); // ['vermelho', 'amarelo', 'azul']
cores[3] = 'roxo'; // adiciona no índice 3 (novo elemento)
console.log(cores); // ['vermelho', 'amarelo', 'azul', 'roxo']
cores[10] = 'rosa'; // índice 10 — cria buracos vazios (evitar!)
console.log(cores.length); // 11

let numeros = [10, 20, 30, 40, 50];
for (let i = 0; i < numeros.length; i++) { // útil quando precisa do índice
  console.log(`[${i}] =${numeros[i]}`);
}

frutas = ['maçã', 'banana', 'laranja'];
for (let fruta of frutas) { // mais limpo — sem índice
  console.log(fruta);
}
// maçã | banana | laranja

let precos = [29.90, 49.50, 15.00];
precos.forEach((preco, indice) => { // callback: (valor, índice, array)
  console.log(`[${indice}] R$${preco.toFixed(2)}`);
});
// [0] R$ 29.90
// [1] R$ 49.50
// [2] R$ 15.00

let matriz = [ // array de arrays — 3 linhas, 3 colunas
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log(matriz[1][2]); // 6 // linha 1, coluna 2
console.log(matriz[0][0]); // 1 // linha 0, coluna 0

// Percorrendo a matriz
for (let linha of matriz) {
  console.log(linha.join(' | '));
}
// 1 | 2 | 3
// 4 | 5 | 6
// 7 | 8 | 9


let arr = ['a', 'b', 'c'];
arr.push('d', 'e'); // adiciona ao final
console.log(arr); // ['a','b','c','d','e']


let ultimo = arr.pop(); // remove e retorna o último
console.log(ultimo); // 'e'
console.log(arr); // ['a','b','c','d']


arr.unshift('z'); // adiciona no início
console.log(arr); // ['z','a','b','c','d']


let primeiro = arr.shift(); // remove e retorna o primeiro
console.log(primeiro); // 'z'
console.log(arr); // ['a','b','c','d']


// arr.splice(posicaoInicial, quantidadeARemover, item1, item2, ...)
let arr2 = ['a', 'd'];
arr2.splice(1, 2); // remove 2 elementos a partir do índice 1
console.log(arr2); // ['a']

arr2.splice(1, 0, 'x', 'y'); // insere sem remover (delete = 0)
console.log(arr2); // ['a','x','y']

arr2.splice(1, 1, 'novo'); // substitui 1 elemento a partir do índice 1
console.log(arr2); // ['a','novo','y']

// arr.sort() // ordem lexicográfica (padrão)
// arr.sort((a, b) => a - b) // comparador numérico crescente
let letras = ['c', 'a', 'd', 'b'];
letras.sort(); // ordena strings alfabeticamente — MUTA o array
console.log(letras); // ['a','b','c','d']

// CUIDADO: sort() com números usa ordem lexicográfica!
let nums = [10, 1, 21, 3, 100];
nums.sort(); // resultado ERRADO: [1, 10, 100, 21, 3]
console.log(nums); // [1, 10, 100, 21, 3] ← bug!

nums.sort((a, b) => a - b); // comparador numérico — crescente
console.log(nums); // [1, 3, 10, 21, 100] ✓

nums.sort((a, b) => b - a); // decrescente
console.log(nums); // [100, 21, 10, 3, 1]

// veja também: arr.reverse() inverte a ordem atual e também MUTA o array