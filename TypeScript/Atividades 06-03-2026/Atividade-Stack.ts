import readlinesync = require('readline-sync');
import { Stack } from "./Stack";

const pilha = new Stack<string>();
let opcao: number;

do {
    console.log("*****************************************************");
    console.log("            1 - Adicionar Livro na pilha             ");
    console.log("            2 - Listar todos os Livros               ");
    console.log("            3 - Retirar Livro da pilha               ");
    console.log("            0 - Sair                                 ");
    console.log("*****************************************************");

    opcao = readlinesync.questionInt("Entre com a opcao desejada: ");

    switch (opcao) {
        case 1:
            const nomeLivro = readlinesync.question("Digite o nome: ");
            pilha.push(nomeLivro);
            
            console.log("Pilha:");
            pilha.printStack();
            console.log("Livro adicionado!");
            break;

        case 2:
            if (pilha.isEmpty()) {
                console.log("A Pilha está vazia!");
            } else {
                console.log("Lista de Livros na Pilha:");
                pilha.printStack();
                console.log("");
            }
            break;

        case 3:
            if (pilha.isEmpty()) {
                console.log("A Pilha está vazia!");
            } else {
                const livroRemovido = pilha.pop();
                console.log("Um Livro foi retirado da pilha!");
                
                console.log("Pilha:");
                pilha.printStack();
                console.log("");
            }
            break;

        case 0:
            console.log("Programa Finalizado!");
            break;

        default:
            console.log("Opção inválida!");
            break;
    }

} while (opcao !== 0);