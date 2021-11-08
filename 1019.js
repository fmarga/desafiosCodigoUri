/* Leia um valor inteiro, que é o tempo de duração em segundos de um determinado evento em uma fábrica, e informe-o expresso no formato horas:minutos:segundos.

Entrada
O arquivo de entrada contém um valor inteiro N.

Saída
Imprima o tempo lido no arquivo de entrada (segundos), convertido para horas:minutos:segundos, conforme exemplo fornecido. */

const input = require('fs').readFileSync('./dev/stdin', 'utf8');
let num = parseInt(input);

let horas = parseInt(num / 3600); //1h tem 3600s
num = num % 3600; //reatribui a variavel pro novo valor sem a qtd de horas
let minutos = parseInt(num / 60); //o resto da divisao em uma hora, divide por 1 minuto (60s)
num = parseInt(num % 60);
//o resto da divisao do numero por minutos

console.log(`${horas}:${minutos}:${num}`);