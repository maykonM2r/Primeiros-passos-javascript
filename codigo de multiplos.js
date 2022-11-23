
function soma(multiplo, limite) {
    let resultado = 0;
    for(i = 0; i <= limite; i++) {
        if (i % multiplo === 0)
            resultado += i;
    }
    console.log(resultado)
}

soma(3, 18)