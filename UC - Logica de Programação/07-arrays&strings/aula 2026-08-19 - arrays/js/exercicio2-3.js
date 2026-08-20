// 3. Dado o array [5, 2, 8, 1, 9, 3, 7, 4, 6], use sort com comparador para ordenar de 
// forma crescente e decrescente. Exiba o resultado.

let arr = [5, 2, 8, 1, 9, 3, 7, 4, 6];
arr.sort((a, b) => a - b);
console.log(arr);
arr.sort((a, b) => b - a);
console.log(arr);