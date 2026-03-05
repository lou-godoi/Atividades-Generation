import readlinesync = require('readline-sync');

function buscarNoSet(): void {
  
    const numerosSet: Set<number> = new Set([2, 5, 1, 3, 4, 9, 7, 8, 10, 6]);

    const numeroBusca: number = readlinesync.questionInt("Digite o numero que quer encontrar: ");

    let encontrado: boolean = false;

    for (const numero of numerosSet) {
        if (numero === numeroBusca) {
            encontrado = true;
            break;
        }
    }

    if (encontrado) {
        console.log(`O número ${numeroBusca} foi encontrado!`);
    } else {
        console.log(`O número ${numeroBusca} não foi encontrado!`);
    }
}

buscarNoSet();