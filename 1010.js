/* Neste problema, deve-se ler o código de uma peça 1, o número de peças 1, o valor unitário de cada peça 1, o código de uma peça 2, o número de peças 2 e o valor unitário de cada peça 2. Após, calcule e mostre o valor a ser pago.

Entrada
O arquivo de entrada contém duas linhas de dados. Em cada linha haverá 3 valores, respectivamente dois inteiros e um valor com 2 casas decimais.

Saída
A saída deverá ser uma mensagem conforme o exemplo fornecido abaixo, lembrando de deixar um espaço após os dois pontos e um espaço após o "R$". O valor deverá ser apresentado com 2 casas após o ponto. */

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n'); //vai ter as duas linhas de dados

let peca1 = lines.shift(); //vai remover o primeiro dado e retornar ele
let peca2 = lines.shift(); //vai remover o primeiro dado (que mudou pq peca1 foi antes) e retornar ele

let [cod1, n1, v1] = peca1.split(' '); //vai dividir os dados desse array
let [cod2, n2, v2] = peca2.split(' '); //divide os dados desse array tb


let num1 = parseInt(n1);
let vpeca1 = parseFloat(v1);
let num2 = parseInt(n2);
let vpeca2 = parseFloat(v2);
let total = (num1 * vpeca1) + (num2 * vpeca2);


console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`);