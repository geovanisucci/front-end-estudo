export class Pessoa{

    constructor(nome, cpf){
        this._nome = nome;
        this._cpf = cpf;
    }
    _nome;
    _cpf

    get cpf(){
        return this._cpf;
    }

    autenticar(cpf){
        return cpf == this._cpf
    }
}