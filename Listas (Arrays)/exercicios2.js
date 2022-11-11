
// 2- Crie um programa que seja capaz de percorrer uma lista de numeros e imprima cada numero PAR encontrado.


const lista = [2, 5, 3, 34, 56, 78, 60, 25, 20, 8, 10, 48, 77, 99, 37];

for (let i = 0; i < lista.length; i++) {
    if (lista[i] % 2 === 0) {
        let numeropar = lista[i];
        console.log(numeropar)
    }
    
}
