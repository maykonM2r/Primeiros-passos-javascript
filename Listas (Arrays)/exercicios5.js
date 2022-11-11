
// 5) Dado uma lista com as médias tiradas pelos alunos. Imprima todas as médias que ficaram de recuperação (média < 5).


const notas = [4, 6, 7, 5, 2, 3, 9, 4, 7, 8, 9, 10]

for (let i = 0; i < notas.length; i++) {
    if (notas[i] < 5) {
        const recuperacao = notas[i]
        console.log(recuperacao)
    }
    
}