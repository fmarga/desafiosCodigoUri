/*Leia um valor inteiro correspondente à idade de uma pessoa em dias e informe-a em anos, meses e dias

Obs.: apenas para facilitar o cálculo, considere todo ano com 365 dias e todo mês com 30 dias. Nos casos de teste nunca haverá uma situação que permite 12 meses e alguns dias, como 360, 363 ou 364. Este é apenas um exercício com objetivo de testar raciocínio matemático simples.

Entrada
O arquivo de entrada contém um valor inteiro.

Saída
Imprima a saída conforme exemplo fornecido.*/

const input = require('fs').readFileSync('./dev/stdin', 'utf8');
let dias = parseInt(input);

let anos = parseInt(dias / 365);
dias = dias % 365;
let meses = parseInt(dias / 30);
dias = parseInt(dias % 30);

console.log(`${anos} ano(s)\n${meses} mes(es)\n${dias} dia(s)`);