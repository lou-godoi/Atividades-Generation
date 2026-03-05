import leia from 'readline-sync'

let numero;
let somaPositivos = 0;

do {
    numero = leia.questionInt("Digite o numero: ")
    
    if (numero > 0) {
      somaPositivos = somaPositivos + numero;
    }  
    
} while (numero !== 0);

console.log(`A soma dos números positivos é: ${somaPositivos}`);