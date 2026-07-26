// 9. **Simulador de Login Simples**
//     - O programa pede uma senha (fixa, por exemplo `"1234"`).
//     - Se a senha estiver correta, exibe `"Acesso permitido"`, caso contrário `"Senha incorreta"`.

let senhaUsuario = 1234;
let senhaSolicitada;
do {
    senhaSolicitada = Number(prompt("Digite a senha"));
    if (senhaSolicitada !== senhaUsuario) {
        alert("Senha incorreta");
    } else if (senhaSolicitada === senhaUsuario) {
        alert("Acesso permitido");
    }
} while(senhaSolicitada !== senhaUsuario);