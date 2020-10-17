import { Cliente } from "./classes/Cliente.js"
import { ContaCorrente } from "./classes/ContaCorrente.js"
import { UsuarioInterno } from "./classes/UsuarioInterno.js"
import { Autenticar } from "./classes/Autenticar.js"


const contaCorrente = new ContaCorrente();
const clienteGeovani = new Cliente("Geovani","11122233309");
contaCorrente.cliente = clienteGeovani;
contaCorrente.agencia = 1001;
contaCorrente.saldo = 0;

console.log(contaCorrente);

console.log("Saldo ==> " + contaCorrente.depositar(300));
console.log("Saldo ==> " + contaCorrente.sacar(100));
console.log("Saldo ==> " + contaCorrente.depositar(5));


const contaCorrenteJuliana = new ContaCorrente();
const clienteJuliana = new Cliente("Nome","00022233309");
contaCorrenteJuliana.cliente = clienteJuliana;
contaCorrenteJuliana.agencia = 1001;
contaCorrenteJuliana.saldo = 0;

console.log(contaCorrenteJuliana.cliente);

contaCorrente.transferir(10, contaCorrenteJuliana);

console.log(contaCorrenteJuliana);
console.log(contaCorrente);

const usuarioInterno = new UsuarioInterno();
usuarioInterno.cpf = "213";

const authGeovani = Autenticar.login(clienteGeovani);
const authUsuarioInterno = Autenticar.login(usuarioInterno);

console.log(authGeovani, authUsuarioInterno);
