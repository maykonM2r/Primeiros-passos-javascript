/* 
    3- Elabore um algoritimo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta
    e a escolha da condição de pagamento.
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

    Código condição de pagamento:
    1 - A vista débito, recebe 10% de desconto;
    2 - A vista no dinheiro ou pix, recebe 15% de desconto;
    3 - Em 2x, preço normal de etiqueta sem juros;
    4 - Acima de 2x, preço normal de etiquera mais juros de 10%;
*/

function formaPagamento(preco_produto, pagamento) {
    if (pagamento === 1) {
        console.log(preco_produto - (preco_produto * 0.1));
    }else if (pagamento === 2) {
        console.log(preco_produto - (preco_produto * 0.15));
    }else if (pagamento === 3) {
        console.log(preco_produto);
    }else if (pagamento === 4) {
        console.log(preco_produto + (preco_produto * 0.10));
    }
}

formaPagamento(200, 2)