
// 3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".


const nomes = ['Vantuir', 'Elizeu', 'Joao', 'Valdir', 'Pedro', 'Ana', 'Vanuza']

for (let i = 0; i < nomes.length; i++) {
    if (nomes[i][0] === 'V') {
        const nomeV = nomes[i];
        console.log(nomeV)
    }
    
}
