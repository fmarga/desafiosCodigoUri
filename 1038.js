/*Com base na tabela abaixo, escreva um programa que leia o código de um item e a quantidade deste item. A seguir, calcule e mostre o valor da conta a pagar.

Entrada
O arquivo de entrada contém dois valores inteiros correspondentes ao código e à quantidade de um item conforme tabela acima.

Saída
O arquivo de saída deve conter a mensagem "Total: R$ " seguido pelo valor a ser pago, com 2 casas após o ponto decimal.*/

const input = require('fs').readFileSync('./dev/stdin', 'utf8');
let [cod, quantItem] = input.split(' ').map(item => parseInt(item));

let total;

switch(cod){
    case 1:
        total = quantItem * 4.00;
        console.log(`Total: R$ ${total.toFixed(2)}`);
        break;
    case 2:
        total = quantItem * 4.50;
        console.log(`Total: R$ ${total.toFixed(2)}`);
        break;
    case 3:
        total = quantItem * 5.00;
        console.log(`Total: R$ ${total.toFixed(2)}`);
        break;
    case 4:
        total = quantItem * 2.00;
        console.log(`Total: R$ ${total.toFixed(2)}`);
        break;
    case 5:
        total = quantItem * 1.50;
        console.log(`Total: R$ ${total.toFixed(2)}`);
        break;
}