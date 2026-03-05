import leia from 'readline-sync';

let numero;
let soma = 0;
let contador = 0;

do {
    numero = leia.questionInt("Digite um numero: ");

    if (numero !== 0 && numero % 3 === 0) {
        soma += numero;
        contador++;
    }
} while (numero !== 0);

if (contador > 0) {
    let media = soma / contador;
    console.log("A média de todos os números múltiplos de 3 é: " + media.toFixed(2));
} else {
    console.log("Nenhum número múltiplo de 3 foi digitado.");
}