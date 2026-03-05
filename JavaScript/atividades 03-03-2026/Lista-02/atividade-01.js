const leia = require('readline-sync');

// Precisamos atribuir o valor digitado às variáveis
console.log("=== CARDÁPIO ===");
console.log("1 - Cachorro quente");
console.log("2 - X-salada");
console.log("3 - X-bacon");
console.log("4 - Bauru");
console.log("5 - Refrigerante");
console.log("6 - Suco de Laranja");

// O comando .questionInt garante que o valor seja lido como um número inteiro
let codigo = leia.questionInt("Digite o codigo do produto (1-6): ");
let quantidade = leia.questionInt("Digite a quantidade: ");

let produto = "";
let precoUnitario = 0;

switch (codigo) {
    case 1:
        produto = "Cachorro Quente";
        precoUnitario = 10.00;
        break;
    case 2:
        produto = "X-Salada";
        precoUnitario = 15.00;
        break;
    case 3:
        produto = "X-Bacon";
        precoUnitario = 18.00;
        break;
    case 4:
        produto = "Bauru";
        precoUnitario = 12.00;
        break;
    case 5:
        produto = "Refrigerante";
        precoUnitario = 8.00;
        break;
    case 6:
        produto = "Suco de laranja";
        precoUnitario = 13.00;
        break;
    default:
        produto = "Código Inválido";
        precoUnitario = 0;
}

// Cálculo racional: só processamos se o preço for válido
if (precoUnitario > 0) {
    let valorTotal = quantidade * precoUnitario;
    console.log("--- RECIBO ---");
    console.log(`Produto: ${produto}`);
    console.log(`Valor total: R$ ${valorTotal.toFixed(2)}`);
} else {
    console.log("Erro: Código de produto inexistente.");
}