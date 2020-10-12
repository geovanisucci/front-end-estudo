export class ContaCorrente {
    
    cliente;
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

}