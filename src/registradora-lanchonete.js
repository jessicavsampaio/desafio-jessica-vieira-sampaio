import readline from 'readline';
import { CaixaDaLanchonete } from './caixa-da-lanchonete.js';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const itens = [];

function inserirItemAoCarrinho() {
    rl.question("Digite o código do item a ser inserido no carrinho, conforme menu: ", function (codigo) {
        inserirQuantidade(codigo.toLowerCase());
        desejaInserirOutroItem();
    });
}

function inserirQuantidade(codigo) {
    rl.question(`Digite a quantidade de ${codigo}s: `, function (quantidade) {
            itens.push(codigo + "," + quantidade);
        desejaInserirOutroItem();
    });
}

function desejaInserirOutroItem() {
    rl.question("Deseja adicionar mais itens? (sim(s)/não(n)): ", function (resposta) {
        if (resposta.toLowerCase() === 'sim' || resposta.toLowerCase() === 's') {
            inserirItemAoCarrinho();
        } else if (resposta.toLowerCase() === 'não' || resposta.toLowerCase() === 'n' || resposta.toLowerCase() === 'nao') {
            inserirFormaDePgto();

        } else {
            desejaInserirOutroItem();
        }
    });
}

function inserirFormaDePgto() {
    rl.question("Qual será a forma de pagamento? (debito/credito/dinheiro): ", function (metodoDePagamento) {
        new CaixaDaLanchonete().calcularValorDaCompra(metodoDePagamento.toLowerCase(), itens);
    });
}

inserirItemAoCarrinho();