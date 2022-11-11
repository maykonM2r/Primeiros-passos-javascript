
const {gets, print} = require('./funcoes-auxiliares');

/*
    1- Uma sala contem 5 alunos e para cada aluno foi sorteado um numero de 1-100.
    faça um programa que recebe os 5 numeros sorteados para dos alunos e mostre o maior numero sorteado.
    Dados de Entrada:
    5
    50
    10
    98
    23

    Saida:
    98
*/

let maiorValor = 0;

for (let i = 0; i < 5; i++) {
    const numeros = gets();
    if (numeros > maiorValor) {
        maiorValor = numeros;
    }    
}

print(maiorValor);