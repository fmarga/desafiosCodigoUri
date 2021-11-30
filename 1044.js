/*Leia 2 valores inteiros (A e B). Após, o programa deve mostrar uma mensagem "Sao Multiplos" ou "Nao sao Multiplos", indicando se os valores lidos são múltiplos entre si.

Entrada
A entrada contém valores inteiros.

Saída
A saída deve conter uma das mensagens conforme descrito acima.*/

const input = require('fs').readFileSync('./dev/stdin', 'utf8');
let [a, b] = input.split(' ').map(item => parseInt(item));

if(b % a === 0 || a % b === 0){
    console.log('Sao Multiplos');
}else{
    console.log('Nao sao Multiplos');
}