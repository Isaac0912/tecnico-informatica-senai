// **ITEM 1**
// **Contexto:** O sistema de matrícula de uma escola técnica precisa reunir as informações de cada estudante — nome, 
// matrícula, turma e nota — em uma única estrutura, evitando a criação de variáveis soltas que dificultam a organização 
// do cadastro à medida que o sistema cresce.
// **Comando:** Implemente em JavaScript um objeto chamado aluno com as propriedades nome, matricula, turma e nota, e 
// exiba cada uma delas individualmente, utilizando a notação de ponto e console.log().

let aluno = {
    nome: "Lucas",
    matricula: 134988764,
    turma: "1B",
    nota: 8.0
}
console.log(aluno.nome);
console.log(aluno.matricula);
console.log(aluno.turma);
console.log(aluno.nota.toFixed(1));