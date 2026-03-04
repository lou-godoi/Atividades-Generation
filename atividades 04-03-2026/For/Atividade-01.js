import leia from 'readline-sync'

let primeiroNumero = leia.questionInt("Digite o primeiro numero: ");
let ultimoNumero = leia.questionInt("Digite o ultimo numero: ");

if (primeiroNumero < ultimoNumero) {
    console.log("No Intervalo entre " + primeiroNumero + " e " + ultimoNumero + ":");

    for (let i = primeiroNumero; i <= ultimoNumero; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(i + " é múltiplo de 3 e 5");
        }
    }
} else {
    console.log("Intervalo Inválido!");
}