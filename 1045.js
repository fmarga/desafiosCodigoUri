/*Leia 3 valores de ponto flutuante A, B e C e ordene-os em ordem decrescente, de modo que o lado A representa o maior dos 3 lados. A seguir, determine o tipo de triângulo que estes três lados formam, com base nos seguintes casos, sempre escrevendo uma mensagem adequada:
se A ≥ B+C, apresente a mensagem: NAO FORMA TRIANGULO
se A2 = B2 + C2, apresente a mensagem: TRIANGULO RETANGULO
se A2 > B2 + C2, apresente a mensagem: TRIANGULO OBTUSANGULO
se A2 < B2 + C2, apresente a mensagem: TRIANGULO ACUTANGULO
se os três lados forem iguais, apresente a mensagem: TRIANGULO EQUILATERO
se apenas dois dos lados forem iguais, apresente a mensagem: TRIANGULO ISOSCELES
Entrada
A entrada contem três valores de ponto flutuante de dupla precisão A (0 < A) , B (0 < B) e C (0 < C).

Saída
Imprima todas as classificações do triângulo especificado na entrada.*/

const input = require('fs').readFileSync('./dev/stdin', 'utf8');
let [a, b, c] = input.split(' ').map(item => parseFloat(item));
/*const a = lines.shift();
const b = lines.shift();
const c = lines.shift();
const lados = [a, b, c];*/

const triangulo = lados.sort();
console.log(triangulo);

if(A >= (B + C)){
    console.log('NAO FORMA TRIANGULO');
}
if((A*A) == ((B*B)+(C*C))){
    console.log('TRIANGULO RETANGULO');
}else if((A*A) > ((B*B)+(C*C))){
    console.log('TRIANGULO OBTUSANGULO');
}else if((A*A) < ((B*B)+(C*C))){
    console.log('TRIANGULO ACUTANGULO');
}
if(A == B && A == C && B == C){
    console.log('TRIANGULO EQUILATERO');
}else if((A == B) || (A == C) || (B == C)){
    console.log('TRIANGULO ISOSCELES');
}

//ainda nao finalizado