const leia = require('readline-sync');

let numeroA
let numeroB
let numeroC

numeroA = leia.questionInt("Digite o número A: ");
numeroB = leia.questionInt("Digite o número B: ");
numeroC = leia.questionInt("Digite o número C: ");

if ((numeroA + numeroB) > numeroC) {
    console.log("A Soma de A + B é maior que C");
}

else if ((numeroA + numeroB) === numeroC) {
    console.log("A Soma de A + B é igual a C");
} 

else{
 console.log("A soma de A + B é menor que C");
}
