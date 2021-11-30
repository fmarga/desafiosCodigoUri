/*Leia 3 valores inteiros e ordene-os em ordem crescente. No final, mostre os valores em ordem crescente, uma linha em branco e em seguida, os valores na sequência como foram lidos.

Entrada
A entrada contem três números inteiros.

Saída
Imprima a saída conforme foi especificado.*/

const input = require('fs').readFileSync('./dev/stdin', 'utf8');
let [n1, n2, n3] = input.split(' ').map(item => parseInt(item));

const arr = [n1, n2, n3];
const arrCresc = arr.sort(function(a, b) {
    return a - b;
});

console.log(`${arrCresc[0]}\n${arrCresc[1]}\n${arrCresc[2]}\n\n${n1}\n${n2}\n${n3}`);
