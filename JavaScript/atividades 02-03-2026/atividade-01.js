const leia = require('readline-sync'); 

let salario;

salario = leia.questionInt("Digite o salario: ");

let abono;

abono = leia.questionInt("Adicione o abono: ");
let novoSalario = salario + abono;

console.log("Novo salario: " + novoSalario);