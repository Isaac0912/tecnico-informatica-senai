// **ITEM 25**
// **Contexto:** Ao validar o cadastro de novos usuários, o sistema de uma rede social 
// identificou que caracteres especiais proibidos estão sendo utilizados no campo de 
// nome de usuário e precisam ser removidos antes de salvar o registro.
// **Comando:** *Implemente em JavaScript um programa que utilize o método replaceAll() 
// para substituir todas as ocorrências do caractere ’_’ por espaço em branco em um nome 
// de usuário informado, exibindo o resultado com console.log().

let nomeUsuario = 'Trooper2000_';
let nomeUsuarioValido = nomeUsuario.replaceAll('_', '');
console.log(nomeUsuarioValido);