import leia from 'readline-sync';

let vetor = [];
let soma = 0;
let elementosIndicesImpares = "";
let elementosPares = "";

for (let i = 0; i < 10; i++) {
    vetor[i] = leia.questionInt(`Digite o ${i + 1}o numero: `);
    soma += vetor[i];
}

for (let i = 0; i < 10; i++) {

    if (i % 2 !== 0) {
        elementosIndicesImpares += vetor[i] + " ";
    }
    if (vetor[i] % 2 === 0) {
        elementosPares += vetor[i] + " ";
    }
}

let media = soma / 10;

console.log("Elementos ímpares:");
console.log(elementosIndicesImpares);

console.log("Elementos pares:");
console.log(elementosPares);

console.log("Soma: " + soma);
console.log("Média: " + media.toFixed(2));