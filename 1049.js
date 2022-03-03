/*
    Neste problema, você deverá ler 3 palavras que definem o tipo de animal possível segundo o esquema abaixo, da esquerda para a direita.  Em seguida conclua qual dos animais seguintes foi escolhido, através das três palavras fornecidas.
    Entrada
    A entrada contém 3 palavras, uma em cada linha, necessárias para identificar o animal segundo a figura acima, com todas as letras minúsculas.

    Saída
    Imprima o nome do animal correspondente à entrada fornecida.    
 */

const input = require("fs").readFileSync("./dev/stdin", "utf8");
const [str1, str2, str3] = input.split("\n");

let resultado;

if (str1 === "vertebrado") {
  if (str2 === "ave") {
    if (str3 === "carnivoro") {
      resultado = "aguia";
    } else {
      resultado = "pomba";
    }
  } else {
    if (str3 === "onivoro") {
      resultado = "homem";
    } else {
      resultado = "vaca";
    }
  }
} else {
  if (str2 === "inseto") {
    if (str3 === "hematofago") {
      resultado = "pulga";
    } else {
      resultado = "lagarta";
    }
  } else {
    if (str3 === "hematofago") {
      resultado = "sanguessuga";
    } else {
      resultado = "minhoca";
    }
  }
}

console.log(resultado);
