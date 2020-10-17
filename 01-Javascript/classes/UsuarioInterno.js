export class UsuarioInterno{
    _cpf;

    set cpf(value){
        this._cpf = value;
    }

    get cpf(){
        return this._cpf;
    }

    autenticar(cpf){
        return cpf == this._cpf
    }
}