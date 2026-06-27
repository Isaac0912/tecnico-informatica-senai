let opcao = -1;
while (opcao != 0) {
    opcao = Number(prompt("MENU:\n1-Saudação\n2-Data\n0-Sair"));
    if (opcao === 1) {
        console.log("Olá Mundo.");
    } else if (opcao === 2) {
        console.log(new Date().toLocaleDateString('pt-BR'));
    } else if (opcao != 0) {
        console.log("Opção inválida.");
    }
}
console.log("Fim do programa.")