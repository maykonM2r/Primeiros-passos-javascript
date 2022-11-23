/*Você receberá um número onde: 
Se o número for um múltiplo de 3 e 5 -> "FizzBuzz" ; 
Se o número for apenas múltiplo de 3 -> "Fizz" ; 
Se o número for apenas múltiplo de 5 -> "Buzz"; 
Se o número não for um múltiplo de 3 ou 5, o número deve ser exibido; 
*/
let resultado = 15

function soma(numero) {
    if (numero % 3 === 0 && numero % 5 === 0)
        console.log("FizzBuzz")
    else if (numero % 3 === 0)
        console.log("Fizz")
    else if (numero % 5 === 0)
        console.log("Buzz")
    else
        console.log(numero)
}

soma(resultado)
