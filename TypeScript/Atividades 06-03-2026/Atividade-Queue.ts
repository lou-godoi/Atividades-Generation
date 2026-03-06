import readlinesync = require('readline-sync');
import { Queue } from "./Queue";

const fila = new Queue<string>();
let opcao: number;

do {
    console.log("*****************************************************");
    console.log("            1 - Adicionar Cliente na Fila            ");
    console.log("            2 - Listar todos os Clientes             ");
    console.log("            3 - Retirar Cliente da Fila              ");
    console.log("            0 - Sair                                 ");
    console.log("*****************************************************");

    opcao = readlinesync.questionInt("Entre com a opcao desejada: ");

    switch (opcao) {
        case 1:
            const nome = readlinesync.question("Digite o nome: ");
            fila.enqueue(nome);
            console.log("Fila:");
            fila.printQueue(); 
            console.log("Cliente Adicionado!");
            break;

        case 2:
            if (fila.isEmpty()) {
                console.log("A Fila está vazia!");
            } else {
                console.log("Lista de Clientes na Fila:");
                fila.printQueue();
                console.log("");
            }
            break;

        case 3:
            if (fila.isEmpty()) {
                console.log("A Fila está vazia!");
            } else {
                const chamado = fila.dequeue();
                console.log(`O Cliente ${chamado} foi chamado!`);
                
                console.log("Fila:");
                fila.printQueue();
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