/* Faça um programa que leia 6 valores. Estes valores serão somente negativos ou positivos (desconsidere os valores nulos). A seguir, mostre a quantidade de valores positivos digitados.

Entrada
Seis valores, negativos e/ou positivos.

Saída
Imprima uma mensagem dizendo quantos valores positivos foram lidos. */

const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const [a, b, c, d, e, f] = input.split('\n').map((item) => Number(item));

const arr = [a, b, c, d, e, f];
const arrPositivo = [];
for(let i = 0; i < arr.length; i++) {
    if(arr[i] > 0) {
        arrPositivo.push(i);
    }
}
const quantidade = arrPositivo.length;

console.log(`${quantidade} valores positivos`);