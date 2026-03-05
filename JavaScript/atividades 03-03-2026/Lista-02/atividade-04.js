const leia = require('readline-sync');

let saldo = 1000.00;

console.log("SISTEMA BANCÁRIO");
console.log("1 - Saldo");
console.log("2 - Saque");
console.log("3 - Depósito");

let operacao = leia.questionInt("Operacao: ");

switch (operacao) {
    case 1:
        console.log("Operação - Saldo");
        console.log(`Saldo: R$ ${saldo.toFixed(2)}`);
        break;

    case 2:
        console.log("Operação - Saque");
        let valorSaque = leia.questionFloat("Valor: R$ ");
        
        if (valorSaque <= saldo) {
            saldo -= valorSaque;
            console.log(`Novo Saldo: R$ ${saldo.toFixed(2)}`);
        } else {
            console.log("Saldo Insuficiente!");
        }
        break;

    case 3:
        console.log("Operação - Depósito");
        let valorDeposito = leia.questionFloat("Valor: R$ ");
        
        saldo += valorDeposito;
        console.log(`Novo Saldo: R$ ${saldo.toFixed(2)}`);
        break;

    default:
        console.log("Operação Inválida!");
}