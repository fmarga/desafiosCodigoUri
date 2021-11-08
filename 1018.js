/* Leia um valor inteiro. A seguir, calcule o menor número de notas possíveis (cédulas) no qual o valor pode ser decomposto. As notas consideradas são de 100, 50, 20, 10, 5, 2 e 1. A seguir mostre o valor lido e a relação de notas necessárias.

Entrada
O arquivo de entrada contém um valor inteiro N (0 < N < 1000000).

Saída
Imprima o valor lido e, em seguida, a quantidade mínima de notas de cada tipo necessárias, conforme o exemplo fornecido. Não esqueça de imprimir o fim de linha após cada linha, caso contrário seu programa apresentará a mensagem: “Presentation Error”. */

const input = require('fs').readFileSync('./dev/stdin', 'utf8');
let num = parseInt(input);

let valores = [100, 50, 20, 10, 5, 2, 1];

console.log(num);

for(let valor of valores){
    let cedulas = parseInt(num / valor);
    console.log(`${cedulas} nota(s) de R$ ${valor},00`);
    num = num % valor;
}
/*
let cem = parseInt(num / 100);
num = num % 100;
let cinquenta = parseInt(num / 50);
num = num % 50;
let vinte = parseInt(num / 20);
num = num % 20;
let dez = parseInt(num / 10);
num = num % 10;
let cinco = parseInt(num / 5);
num = num % 5;
let dois = parseInt(num / 2);
num = num % 2;
let um = parseInt(num / 1);

console.log(`${cem}, ${cinquenta}, ${vinte}, ${dez}, ${cinco}, ${dois}, ${um}`);*/

