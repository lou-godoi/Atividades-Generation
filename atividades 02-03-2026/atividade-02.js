const leia = require('readline-sync');

let nota1;
let nota2;
let nota3;
let nota4;

let mediaFinal;

nota1 = leia.questionInt("Digite a primeira nota: ");
nota2 = leia.questionInt("Digite a segunda nota: ");
nota3 = leia.questionInt("Digite a terceira nota: ");
nota4 = leia.questionInt("Digite a quarta nota: ");

mediaFinal = ((nota1 + nota2 + nota3 + nota4)/4).toFixed(1);

console.log (`A média do aluno será: ${mediaFinal}`);