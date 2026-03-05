const leia = require('readline-sync'); 

let numero1;
let numero2;
let numero3;
let numero4;

let resultado;

numero1 = leia.questionInt("Digite o primeiro numero: ");
numero2 = leia.questionInt("Digite o segundo numero: ");
numero3 = leia.questionInt("Digite o terceiro numero: ");
numero4 = leia.questionInt("Digite o quarto numero: "); // (n1 * n2) – (n3 * n4)

resultado = (numero1 * numero2) - (numero3 * numero4);

console.log (`O resultado é: ${resultado}`);