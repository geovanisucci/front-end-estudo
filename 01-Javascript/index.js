import { Cliente } from "./classes/Cliente.js"
import { ContaCorrente } from "./classes/ContaCorrente.js"


const cliente = new Cliente();
cliente.nome = "Geovani";
cliente.cpf = 11122233309;

console.log(cliente);


const contaCorrente = new ContaCorrente();
contaCorrente.agencia = 1001;
contaCorrente.saldo = 0;
console.log(contaCorrente);

console.log("Saldo ==> " + contaCorrente.depositar(379));
console.log("Saldo ==> " + contaCorrente.sacar(100));
console.log("Saldo ==> " + contaCorrente.depositar(5));


