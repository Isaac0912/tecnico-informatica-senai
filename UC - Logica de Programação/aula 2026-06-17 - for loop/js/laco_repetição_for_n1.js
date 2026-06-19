//Algoritmo criado pelo professor para ensino
let i;
for (i = 0; i <= 5; i++) {
    console.log("Iteração", i);
}
console.log("Decremento");
for (i = 5; i >= 0; i--) {
    console.log("Iteração", i);
}

console.log("Número Par.")
for (i = 0; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log("Número Par", i);
    }
}
console.log("Tabuada.");
let num = 7; //Tabuada do 7
for (i = 0; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
}
console.log("Todas as tabuadas");
for (i = 1; i <= 10; i++) {
    for (j = 0; j  <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}