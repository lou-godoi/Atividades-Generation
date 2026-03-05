import leia from 'readline-sync';

const vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

const numeroProcurado = leia.questionInt("Digite o numero que voce deseja encontrar: ");

let encontrado = false;
let posicao = -1;

for (let i = 0; i < vetor.length; i++) {

    if (vetor[i] === numeroProcurado) {
        encontrado = true;
        posicao = i;
        break;
    }
}

if (encontrado) {
    console.log(`O número ${numeroProcurado} está localizado na posição: ${posicao}`);
} else {
    console.log(`O número ${numeroProcurado} não foi encontrado!`);
}