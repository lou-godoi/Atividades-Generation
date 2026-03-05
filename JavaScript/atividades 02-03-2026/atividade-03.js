const leia = require('readline-sync'); 

let salarioBruto;
let adicionalNoturno;
let horasExtras;
let desconto;

let salarioLiquido;

salarioBruto = leia.questionInt("Digite o salário bruto: ");
adicionalNoturno = leia.questionInt("Digite o adicional de horário noturno: ");
horasExtras= leia.questionInt("Digite a quantidade de horas extras: ");
desconto = leia.questionInt("Digite o desconto: ");

salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - desconto;

console.log (`O empregado receberá: ${salarioLiquido}`); // SALÁRIO LÍQUIDO = SALÁRIO BRUTO + ADICIONAL NOTURNO + (HORAS EXTRAS * 5) - DESCONTOS




