/* Leia os quatro valores correspondentes aos eixos x e y de dois pontos quaisquer no plano, p1(x1,y1) e p2(x2,y2) e calcule a distância entre eles, mostrando 4 casas decimais após a vírgula, segundo a fórmula:

Distancia =

Entrada
O arquivo de entrada contém duas linhas de dados. A primeira linha contém dois valores de ponto flutuante: x1 y1 e a segunda linha contém dois valores de ponto flutuante x2 y2.

Saída
Calcule e imprima o valor da distância segundo a fórmula fornecida, com 4 casas após o ponto decimal. */


const input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let p1 = lines.shift();
let p2 = lines.shift();

let [x1, y1] = p1.split(' ');
let [x2, y2] = p2.split(' ');

x1 = parseFloat(x1);
y1 = parseFloat(y1);
x2 = parseFloat(x2);
y2 = parseFloat(y2);

let dist = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));

console.log(dist.toFixed(4));