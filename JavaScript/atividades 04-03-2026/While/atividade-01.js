import leia from 'readline-sync'

let menores21 = 0;
let maiores50 = 0;
let idade = false;
let resultado;

idade = leia.questionInt("Insira a idade: ");

while (idade >= 0) {

    if (idade < 21) {
        menores21++
    } else if (idade > 50) {
        maiores50++;
    }
    idade = leia.questionInt("Insira a idade: ");
}

resultado = console.log(`há ${menores21} menores de 21 e ${maiores50} maiores de 50.`);