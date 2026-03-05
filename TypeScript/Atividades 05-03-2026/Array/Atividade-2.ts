import readlinesync = require('readline-sync');

function localizarNumero(): void {
    const numeros: number[] = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

    const busca: number = readlinesync.questionInt("Digite o número que quer achar: ");

    let posicao: number = -1;

    for (let i = 0; i < numeros.length; i++) {
        
    
        if (numeros[i] === busca) {
            posicao = i;
            break;   
        }
    }

    if (posicao !== -1) {
        console.log(`O número ${busca} está localizado na posição: ${posicao}`);
    } else {
        console.log(`O número ${busca} não foi encontrado!`);
    }
}
localizarNumero();