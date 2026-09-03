// 7. Desenvolva um programa que peça a velocidade de um carro e a velocidade máxima da via, 
// e informe se o motorista será multado e qual o valor da multa 
// (até 20% acima do limite: R$ 130, entre 20% e 50% acima: R$ 195, acima de 50%: R$ 880).

let velocidadeCarro = Number(prompt("Digite a velocidade do carro."));
let velocidadeMaximaVia = Number(prompt("Digite a velocidade máxima da via."));
let porcentagemVelocidade = ((velocidadeCarro - velocidadeMaximaVia) / velocidadeMaximaVia) * 100;
if (porcentagemVelocidade > 0) {
    console.log("Você foi multado!");
    if (porcentagemVelocidade <= 20) {
        console.log("Multa: R$130,00");
    } else if (porcentagemVelocidade > 20 && porcentagemVelocidade <= 50) {
        console.log("Multa: R$195,00");
    } else if (porcentagemVelocidade > 50) {
        console.log("Multa: R$880,00");
    }
}
