
/*
    2- Crie uma classe para representar pessoas.
    Para cada pessoa teremos os atributos nome, peso e altura.
    As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
    Instancie uma pessoa chamada josé que tenha 70kg e 1.75 de altura e peça ao jose para dizer
    o valor do seu IMC;

*/

class Pessoas {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calculoIMC() {
        return this.peso / Math.pow(this.altura, 2);
    }

    classificarIMC() {
        const imc = this.calculoIMC()
        if (imc < 18.5) {
            return('Abaixo do peso');
        }else if (imc >= 18.5 && imc < 25) {
            return('Peso Normal');
        }else if (imc >= 25 && imc < 30) {
            return('Acima do peso');
        }else if (imc >= 30 && imc < 40) {
            return('Obeso');
        }else {
            return('Obesidade grave');
        }
    }
}

const jose = new Pessoas('Jose', 98, 1.89);
const pedro = new Pessoas('Pedro', 90, 1.76);
console.log(jose.calculoIMC());
console.log(pedro.calculoIMC());
console.log(pedro.classificarIMC())

