/* 
    1- Faça um algoritimo que dado as três notas tiradas por um aluno em um semestre da faculdade calcule e imprima
    a sua média e a sua classificação conforme a tabela abaixo.

    Média = (n1 + n2 + n3) / 3;

    Classificação:
    - Média menor que 5, reprovação;
    - Média entre 5 e 7, recuperação;
    - Média acima de 7, passou de semestre;

*/

const n1 = 8.5;
const n2 = 8.0;
const n3 = 9.0;

const media = (n1 + n2 + n3) / 3;

if (media < 5.0) {
    console.log('Você Reprovou de Semestre. sua média foi de ' + (media.toFixed(1)));
}
else if (media >= 5.0 && media <= 7.0) {
    console.log('Você Ficou de Recuperação no Semestre. sua média foi de ' + (media.toFixed(1)));
}
else {
    console.log('Você Passou de Semestre. sua média foi de ' + (media.toFixed(1)));
}

