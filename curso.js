const Aluno = require('./aluno');
const estudantes = require('./estudantes');

const curso = {
    nome: 'Java e Paradigma Orientação a Objetos',
    notaAprovacao: 7,
    faltasMaximas: 5,
    listaDeEstudantes: [estudantes],
    adicionaAluno: function (nome,qtdFaltas,notas) {
        estudantes.push(new Aluno(nome,qtdFaltas,notas));
    },
    verificaAprovacao: function(alunoX) {
        const aprovados = [];
        const acimaDaMedia = this.notaAprovacao + (this.notaAprovacao/100);

        if((alunoX.calcularMedia() >= this.notaAprovacao && alunoX.faltas() < this.faltasMaximas) ||
        (alunoX.calcularMedia() >= acimaDaMedia && alunoX.faltas() == this.faltasMaximas))
            aprovados.push([alunoX,true]);
        if((alunoX.calcularMedia() < this.notaAprovacao) || 
        (alunoX.calcularMedia() >= acimaDaMedia && alunoX.faltas() > this.faltasMaximas))
            aprovados.push([alunoX,false]);

        curso.resultadoAprovacao(aprovados);     
    },
    aluno: function() {
        this.listaDeEstudantes.forEach(estudante => {
            for( let i = 0; i < estudante.length; i++ ) {
                curso.verificaAprovacao(estudante[i]);                    
            }
        })
    },
    resultadoAprovacao: function(lista) {
        lista.map(function(estudante) {
            return console.log(`Aluno: ${estudante[0].nome} | Aprovado: ${estudante[1]}`);
        });
    }
}

curso.adicionaAluno('Paulo',1,[7,6,4,9]);
curso.adicionaAluno('Bele',1,[7,8,10,9]);
curso.adicionaAluno('Gustavo',1,[7,6,4,9]);
curso.adicionaAluno('Lucas',1,[8,6,9,7]);
curso.adicionaAluno('Marcela',1,[10,8,4,9]);

console.log('============================================');
console.log(`Curso: ${curso.nome}`);
console.log('============================================');
curso.aluno();
console.log('============================================');
