/* 
    1- Crie uma classe para representar carros.
    Os carros possuem uma marca, uma cor e um gasto médio de combustivel por kilometro rodado.
    Crie um metodo que dado a quantidade de quilometros e o preço do combustivel nos de o valor
    gasto em reais para realizar este percurso.
*/

class Carros {
    marca;
    cor;
    kmporlitro;

    constructor(marca, cor, kmporlitro) {
        this.marca = marca;
        this.cor = cor;
        this.kmporlitro = kmporlitro;
    }

    calcularGasto(distancia, precoCombustivel) {
        return (distancia / this.kmporlitro) * precoCombustivel

    }

    descrever() {
        console.log(`O carro da ${this.marca} da cor ${this.cor} faz ${this.kmporlitro} Km/L`);
    }
}

const jetta = new Carros('Volkswagen', 'branco', 9);
const civic = new Carros('Honda', 'preto', 9.5);
jetta.descrever()
civic.descrever()

console.log(jetta.calcularGasto(92, 5.64));
console.log(civic.calcularGasto(92, 5.64));