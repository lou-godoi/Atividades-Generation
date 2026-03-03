const leia = require('readline-sync');

let numero

numero = leia.questionInt("Digite o número: ");

if (numero % 2 === 0 && numero >= 0) {
    console.log(`O número ${numero} é par e positivo!`)
}

else if (numero % 2 === 0 && numero < 0) {
    console.log(`o numero ${numero} é par e negativo!`)
}

else if (numero % 2 !== 0 && numero >= 0) {
    console.log(`o número ${numero} é ímpar e positivo!`)
}

else{
    console.log(`o número ${numero} é ímpar e negativo!`)
}
    