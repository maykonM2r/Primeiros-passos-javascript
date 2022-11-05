/* Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
 -1 Preço do etanol;
 -2 Preço da gasolina;
 -3 O tipo do combustivel que esta no carro;
 -4 Gasto médio de combustível do carro por KM (Kilometro por litro);
 -5 Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.

*/

const valorEtanol = 5.34;
const valorGasolina = 5.25;
const combustivelCarro = 'etanol';
const distanciaKm = 1250;
const kmPorLitro = 11;

if (combustivelCarro === 'etanol') {
    const gasto_com_etanol = (distanciaKm / kmPorLitro) * valorEtanol;
    console.log('O Gasto abastecendo com Etanol sera de R$' + (gasto_com_etanol.toFixed(2)));
}
else if (combustivelCarro === 'gasolina') {
    const gasto_com_gasolina = (distanciaKm / kmPorLitro) * valorGasolina;
    console.log('O Gasto abastecendo com Gasolina sera de R$' + (gasto_com_gasolina.toFixed(2)));
}
else {
    console.log('Informe se o carro foi abastecido com etanol ou gasolina.');
}