
/*
const frutas = ['morango', 'banana', 'abacaxi'];
frutas.push('acerola');
frutas[4] = 'melancia'
console.log(frutas);
*/
 
const notas = [];

notas.push(7);
notas.push(6);
notas.push(9);
notas.push(8);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota / notas.length;
}

console.log(soma);