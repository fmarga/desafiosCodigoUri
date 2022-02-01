/* Leia 6 valores. Em seguida, mostre quantos destes valores digitados foram positivos. Na próxima linha, deve-se mostrar a média de todos os valores positivos digitados, com um dígito após o ponto decimal.

Entrada
A entrada contém 6 números que podem ser valores inteiros ou de ponto flutuante. Pelo menos um destes números será positivo.

Saída
O primeiro valor de saída é a quantidade de valores positivos. A próxima linha deve mostrar a média dos valores positivos digitados. */

const input = require("fs").readFileSync("./dev/stdin", "utf8");
const lines = input.split("\n").map((item) => parseFloat(item));

const arrPositivos = [];

for (let i = 0; i < lines.length; i++) {
  if (lines[i] > 0) {
    arrPositivos.push(lines[i]);
  }
}

const sum = arrPositivos.reduce((acc, curr) => acc + curr, 0);
const media = sum / arrPositivos.length;
const resultado = `${arrPositivos.length} valores positivos\n${media.toFixed(
  1
)}`;
console.log(resultado);
