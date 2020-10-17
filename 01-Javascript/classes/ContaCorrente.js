import { Cliente } from "./Cliente.js"

export class ContaCorrente {

    _cliente;

    set cliente(value) {
        if (value instanceof Cliente) {
            this._cliente = value;
        }
    }

    get cliente(){
        return this._cliente;
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

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);

        conta.depositar(valorSacado);
    }

}