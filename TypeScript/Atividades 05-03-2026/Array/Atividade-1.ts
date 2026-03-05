import readlinesync = require('readline-sync');

const cores: string[] = [];

for (let i = 0; i < 5; i++) {
    cores.push(readlinesync.question(`Digite a cor ${i + 1}: `));
}

console.log("Listar todas as cores:");
cores.forEach(c => console.log(c));

cores.sort();

console.log("Ordenar as cores:");
cores.forEach(c => console.log(c));