/*
    2- O IMC - indice de massa corporal é um criterio da organização mundial da saúde para dar uma indicação sobre
    a condição de peso de uma pessoa adulta.

    Formula do IMC:
    IMC = peso / (altura * altura)

    Elabore um algoritimo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

    IMC em adultos condição:
    - Abaixo de 18.5 abaixo do peso;
    - Entre 18.5 e 25 peso normal;
    - Entre 25 e 30 acima do peso;
    - Entre 30 e 40 obeso;
    - Acima de 40 obesidade grave;

*/

const peso = 98;
const altura = 1.84;
const imc = peso / Math.pow(altura, 2);

if (imc < 18.5) {
    console.log('Abaixo do peso');
}else if (imc >= 18.5 && imc < 25) {
    console.log('Peso Normal');
}else if (imc >= 25 && imc < 30) {
    console.log('Acima do peso');
}else if (imc >= 30 && imc < 40) {
    console.log('Obeso');
}else {
    console.log('Obesidade grave')
}