/* Faça um programa que leia 5 valores inteiros. Conte quantos destes valores digitados são pares e mostre esta informação.

Entrada
O arquivo de entrada contém 5 valores inteiros quaisquer.

Saída
Imprima a mensagem conforme o exemplo fornecido, indicando a quantidade de valores pares lidos. */

const input = require("fs").readFileSync("./dev/stdin", "utf8");
const lines = input.split("\n").map((item) => parseInt(item));

let contador = 0;
for (let i = 0; i < 6; i++) {
  if (lines[i] % 2 === 0) {
    contador++;
  }
}

const resultado = `${contador} valores pares`;
console.log(resultado);
