// 15. Faça um programa que peça o tipo sanguíneo de uma pessoa 
// e informe para quais tipos ela pode doar e de quais pode receber sangue.

let tipoSanguineo = prompt("Digite seu tipo sanguíneo conforme exemplo (O+, AB-)");
if (tipoSanguineo === "O-") {
    alert("Você pode doar para: O+, O-, A+, A-, B+, B-, AB+ e AB-\nVocê pode receber de: O-");
} else if (tipoSanguineo === "O+") {
    alert("Você pode doar para: O+, A+, B+ e AB+\nVocê pode receber de: O- e O+");
} else if (tipoSanguineo === "A-") {
    alert("Você pode doar para: A+, A-, AB+ e AB-\nVocê pode receber de: O- e A-");
} else if (tipoSanguineo === "A+") {
    alert("Você pode doar para: A+ e AB+\nVocê pode receber de: O-, O+, A- e A+");
} else if (tipoSanguineo === "B-") {
    alert("Você pode doar para: B+, B-, AB+ e AB-\nVocê pode receber de: O- e B-");
} else if (tipoSanguineo === "B+") {
    alert("Você pode doar para: B+ e AB+\nVocê pode receber de: O-, O+, B- e B+");
} else if (tipoSanguineo === "AB-") {
    alert("Você pode doar para: AB+ e AB-\nVocê pode receber de: O-, A-, B- e AB-");
} else if (tipoSanguineo === "AB+") {
    alert("Você pode doar para: AB+\nVocê pode receber de: O-, O+, A-, A+, B-, B+, AB- e AB+");
}