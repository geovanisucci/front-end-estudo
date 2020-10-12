import { Cliente } from "./classes/Cliente.js"
import { ContaCorrente } from "./classes/ContaCorrente.js"


const contaCorrente = new ContaCorrente();
contaCorrente.cliente = new Cliente();
contaCorrente.cliente.nome = "Geovani";
contaCorrente.cliente.cpf = "11122233309";
contaCorrente.agencia = 1001;
contaCorrente.saldo = 0;

console.log(contaCorrente);

console.log("Saldo ==> " + contaCorrente.depositar(300));
console.log("Saldo ==> " + contaCorrente.sacar(100));
console.log("Saldo ==> " + contaCorrente.depositar(5));


const contaCorrenteJuliana = new ContaCorrente();
contaCorrenteJuliana.cliente = new Cliente();
contaCorrenteJuliana.cliente.nome = "Juliana";
contaCorrenteJuliana.cliente.cpf = "00022233309";
contaCorrenteJuliana.agencia = 1001;
contaCorrenteJuliana.saldo = 0;

console.log(contaCorrenteJuliana);

contaCorrente.transferir(10, contaCorrenteJuliana);

console.log(contaCorrenteJuliana);
console.log(contaCorrente);
