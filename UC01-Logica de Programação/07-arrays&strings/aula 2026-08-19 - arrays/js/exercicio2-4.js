// 4. Use splice para: inserir ‘novo’ na posição 2 de [‘a’,‘b’,‘c’,‘d’], remover os 
// elementos das posições 1 e 2 de [‘x’,‘y’,‘z’,‘w’] e substituir o elemento central 
// de [1,2,3,4,5].

let arr1 = ['a', 'b', 'c', 'd'];
arr1.splice(2, 0, 'novo');
console.log(arr1);

let arr2 = ['x', 'y', 'z', 'w'];
arr2.splice(1, 2);
console.log(arr2);

let arr3 = [1, 2, 3, 4, 5];
arr3.splice(2, 1);
console.log(arr3);