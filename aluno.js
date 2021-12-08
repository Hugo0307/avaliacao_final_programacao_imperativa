module.exports = class Aluno {

    constructor(nome, qtdFaltas, notas) {
        this.nome = nome;
        this.qtdFaltas = qtdFaltas;
        this.notas = notas;
    }
    calcularMedia() {
        return this.notas.reduce((nota,notaSeguinte) => nota + notaSeguinte) / this.notas.length;
    }
    faltas() {
        return this.qtdFaltas + 1;
    }   
};
