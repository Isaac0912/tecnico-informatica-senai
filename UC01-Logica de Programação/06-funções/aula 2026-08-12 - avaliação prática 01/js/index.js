function calcularValorDoFrete(km) {
    return 5 * km;
}
function aplicarTaxaDeUrgencia(km, status) {
    let valorFrete = calcularValorDoFrete(km);
    switch (status) {
        case true:
            return valorFrete + 50;
        default:
            return valorFrete;
    }
}
function aplicarDesconto(km, status) {
    let valorFrete = aplicarTaxaDeUrgencia(km, status);
    if (km > 100) {
        return valorFrete * 0.90;
    } else {
        return valorFrete;
    }
}
function aplicarImposto(km, status) {
    let valorFrete = aplicarDesconto(km, status);
    return valorFrete * 1.05;
}

console.log("R$" + aplicarImposto(50, false).toFixed(2));
console.log("R$" + aplicarImposto(50, true).toFixed(2));
console.log("R$" + aplicarImposto(120, false).toFixed(2));
console.log("R$" + aplicarImposto(120, true).toFixed(2));