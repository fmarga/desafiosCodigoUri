/*Leia um valor de ponto flutuante com duas casas decimais. Este valor representa um valor monetário. A seguir, calcule o menor número de notas e moedas possíveis no qual o valor pode ser decomposto. As notas consideradas são de 100, 50, 20, 10, 5, 2. As moedas possíveis são de 1, 0.50, 0.25, 0.10, 0.05 e 0.01. A seguir mostre a relação de notas necessárias.

Entrada
O arquivo de entrada contém um valor de ponto flutuante N (0 ≤ N ≤ 1000000.00).

Saída
Imprima a quantidade mínima de notas e moedas necessárias para trocar o valor inicial, conforme exemplo fornecido.

Obs: Utilize ponto (.) para separar a parte decimal.*/

const input = require('fs').readFileSync('./dev/stdin', 'utf8');
let valor = parseFloat(input);

let cedulas = [100, 50, 20, 10, 5, 2];
let moedas = [1, 0.50, 0.25, 0.10, 0.05, 0.01];

if(valor >= 2){
    console.log(`NOTAS:`);
    for(let cedula of cedulas){
        let qtdCedulas = parseInt(valor / cedula);
        console.log(`${qtdCedulas} nota(s) de R$ ${cedula}.00`);
        valor = valor % cedula;
    }
}

console.log(`MOEDAS:`);
for(let moeda of moedas){
    let qtdMoedas = parseInt(valor / moeda);
    console.log(`${qtdMoedas} moeda(s) de R$ ${moeda.toFixed(2)}`);
    valor = (valor % moeda) + 0.00001;
}



