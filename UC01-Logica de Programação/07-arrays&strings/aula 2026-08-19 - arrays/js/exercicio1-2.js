// 2. Leia 5 números via prompt e armazene em um array. 
// Exiba cada número com seu índice usando for.
let numeroArray = [];
for (let i = 0; i < 5; i++) {
    let entrada = Number(prompt("Digite 5 números."));
    numeroArray.splice(i, 0, entrada);
} for (let i = 0; i < numeroArray.length; i++) {
    console.log(`[${i}] ${numeroArray[i]}`);
}