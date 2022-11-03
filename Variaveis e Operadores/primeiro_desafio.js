/* Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
 -1 Preço do combustível;
 -2 Gasto médio de combustível do carro por KM (Kilometro por litro);
 -3 Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.

*/

const valor_combustivel = 5.25;
const km_por_litro = 9.5;
const distancia_km = 400;

const gasto_total = (distancia_km / km_por_litro) * valor_combustivel;

console.log('O Gasto Total da viagem vai ser de R$' + (gasto_total.toFixed(2)));