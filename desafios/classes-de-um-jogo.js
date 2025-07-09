class ClassesDeUmJogo {
    constructor(classe, nome, idade) {
        this.classe = classe
        this.nome = nome
        this.idade = idade
    }

    returnAttack() {
        if (this.classe === 'guerreiro') {
            return 'usou espada'
        }
        else if (this.classe === 'mago') {
            return 'usou magia'
        }
        else if (this.classe === 'monge') {
            return 'usou artes marciais'
        }
        else if (this.classe === 'ninja') {
            return 'usou shuriken'
        }
    }

    toString() {
        return `O ${this.classe} atacou usando ${this.returnAttack()}. Seu nome é ${this.nome} e ele tem ${this.idade} anos.`
    }
}

guerreiro = new ClassesDeUmJogo('guerreiro', 'Lucas', 24)
console.log(guerreiro.toString())