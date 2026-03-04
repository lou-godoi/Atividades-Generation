import leia from 'readline-sync'

let totalPares = 0;
let totalImpares = 0;
let resultado;

for (let i = 1; i <= 10; i++) {
    let numero = leia.questionInt("Digite um numero:")

    if (numero % 2 == 0) {
        numero = totalPares++;
    }

    else {
        numero = totalImpares++;
    }

}
resultado = console.log(`há ${totalPares} numeros pares e ${totalImpares} numeros ímpares.`);