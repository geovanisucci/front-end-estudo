export class ContaCorrente {
    
    _cliente;
    
    set cliente(value){
        this._cliente = value;
    }
    agencia;
    saldo;

    depositar(valor) {
        this.saldo += valor;
        return this.saldo;
    }

    sacar(valor) {

        if (this.saldo >= valor) {
            this.saldo -= valor;

            return this.saldo;
        }
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);

        conta.depositar(valorSacado);
    }

}