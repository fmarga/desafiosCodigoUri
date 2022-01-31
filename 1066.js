/* Leia 5 valores Inteiros. A seguir mostre quantos valores digitados foram pares, quantos valores digitados foram ímpares, quantos valores digitados foram positivos e quantos valores digitados foram negativos.

Entrada
O arquivo de entrada contém 5 valores inteiros quaisquer.

Saída
Imprima a mensagem conforme o exemplo fornecido, uma mensagem por linha, não esquecendo o final de linha após cada uma. */

const input = require("fs").readFileSync("./dev/stdin", "utf8");
const lines = input.split("\n");

let pares = 0;
let impares = 0;
let positivos = 0;
let negativos = 0;

for (let i = 0; i < 5; i++) {
  if (lines[i] % 2 === 0) {
    pares++;
  }
  if (lines[i] % 2 !== 0) {
    impares++;
  }
  if (lines[i] > 0) {
    positivos++;
  }
  if (lines[i] < 0) {
    negativos++;
  }
}

console.log(
  `${pares} valor(es) par(es)\n${impares} valor(es) impar(es)\n${positivos} valor(es) positivo(s)\n${negativos} valor(es) negativo(s)`
);
