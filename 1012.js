/*Escreva um programa que leia três valores com ponto flutuante de dupla precisão: A, B e C. Em seguida, calcule e mostre:
a) a área do triângulo retângulo que tem A por base e C por altura.
b) a área do círculo de raio C. (pi = 3.14159)
c) a área do trapézio que tem A e B por bases e C por altura.
d) a área do quadrado que tem lado B.
e) a área do retângulo que tem lados A e B.
Entrada
O arquivo de entrada contém três valores com um dígito após o ponto decimal.

Saída
O arquivo de saída deverá conter 5 linhas de dados. Cada linha corresponde a uma das áreas descritas acima, sempre com mensagem correspondente e um espaço entre os dois pontos e o valor. O valor calculado deve ser apresentado com 3 dígitos após o ponto decimal.*/

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
let [a, b, c] = input.split(' ');

a = parseFloat(a);
b = parseFloat(b);
c = parseFloat(c);
let pi = 3.14159;

let tri = (a * c)/2;
let cir = pi * Math.pow(c, 2);
let tra = ((a + b) * c) / 2;
let qua = b * b;
let ret = a * b;


console.log(`TRIANGULO: ${tri.toFixed(3)}\nCIRCULO: ${cir.toFixed(3)}\nTRAPEZIO: ${tra.toFixed(3)}\nQUADRADO: ${qua.toFixed(3)}\nRETANGULO: ${ret.toFixed(3)}`);