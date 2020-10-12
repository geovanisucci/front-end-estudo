import { Cliente } from "./classes/Cliente.js"
import { ContaCorrente } from "./classes/ContaCorrente.js"


const contaCorrente = new ContaCorrente();
contaCorrente.cliente = new Cliente();
contaCorrente.cliente.nome = "Geovani";
contaCorrente.cliente.cpf = 11122233309;
contaCorrente.agencia = 1001;
contaCorrente.saldo = 0;

console.log(contaCorrente);

console.log("Saldo ==> " + contaCorrente.depositar(379));
console.log("Saldo ==> " + contaCorrente.sacar(100));
console.log("Saldo ==> " + contaCorrente.depositar(5));


