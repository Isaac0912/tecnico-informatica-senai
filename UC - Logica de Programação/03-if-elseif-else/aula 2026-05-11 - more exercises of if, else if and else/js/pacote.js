let UF = prompt("Digite o estado de destino do pacote.").toUpperCase();
let pacotePeso = Number(prompt("Digite o peso do pacto em kgs."));
let pacoteFrete;
if (UF === "SC") {
    pacoteFrete = pacotePeso * 2.50;
} else if (UF === "SP" || UF === "RS" || UF === "PR") {
    pacoteFrete = pacotePeso * 5.00;
} else if (UF === "AM" || UF === "PA" || UF === "RR") {
    pacoteFrete = pacotePeso * 12.00;
} else {
    pacoteFrete = pacotePeso * 7.50;
} 
console.log("Estado informado:", UF);
console.log("Valor total do frete:", pacoteFrete.toFixed(2));