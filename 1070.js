/* Leia um valor inteiro X. Em seguida apresente os 6 valores ímpares consecutivos a partir de X, um valor por linha, inclusive o X ser for o caso.

Entrada
A entrada será um valor inteiro positivo.

Saída
A saída será uma sequência de seis números ímpares. */

const input = require("fs").readFileSync("./dev/stdin", "utf8");
let num = parseInt(input.split(" "));

for (let i = 0; i < 12; i++) {
  if (num % 2 === 0) {
    num++;
  } else {
    console.log(num);
    num++;
  }
}

/* 
    se o numero for impar - imprime o numero /
                            soma 2 e imprime + 5
                            
    se o numero for par - soma 1  /
                            imprime e soma 1 + 5

*/
