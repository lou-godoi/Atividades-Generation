const leia = require('readline-sync');

console.log("SISTEMA DE REAJUSTE SALARIAL");
let nome = leia.question("Nome do colaborador: ");
let codigoCargo = leia.questionInt("Codigo do Cargo (1-6): ");
let salario = leia.questionFloat("Salario: R$ ");

let cargo = "";
let percentualReajuste = 0;

switch (codigoCargo) {
    case 1:
        cargo = "Gerente";
        percentualReajuste = 0.10; // 10%
        break;
    case 2:
        cargo = "Vendedor";
        percentualReajuste = 0.07; // 7%
        break;
    case 3:
        cargo = "Supervisor";
        percentualReajuste = 0.09; // 9%
        break;
    case 4:
        cargo = "Motorista";
        percentualReajuste = 0.06; // 6%
        break;
    case 5:
        cargo = "Estoquista";
        percentualReajuste = 0.05; // 5%
        break;
    case 6:
        cargo = "Tecnico de TI";
        percentualReajuste = 0.08; // 8%
        break;
    default:
        cargo = "Cargo Invalido";
        percentualReajuste = 0;
}

let novoSalario = salario + (percentualReajuste * salario);

if (percentualReajuste > 0) {
    console.log(`Nome do colaborador: ${nome}`);
    console.log(`Cargo: ${cargo}`);
    console.log(`Salário: R$ ${novoSalario.toFixed(2)}`);
} else {
    console.log("Erro: Codigo de cargo inexistente. O salario nao foi alterado.");
}