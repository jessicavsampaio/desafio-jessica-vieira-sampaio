

class CaixaDaLanchonete {
    calcularValorDaCompra(metodoDePagamento, itens) {
        const stringItens = itens.join();
        const menu = {
            cafe: 3,
            chantily: 1.5,
            suco: 6.20,
            sanduiche: 6.5,
            queijo: 2,
            salgado: 7.25,
            combo1: 9.5,
            combo2: 7.5
        };

        if (stringItens.includes('queijo')) {
            if (!stringItens.includes('sanduiche')) {
                return "Item extra não pode ser pedido sem o principal";
            }
        }

        if (stringItens.includes('chantily')) {
            if (!stringItens.includes('cafe')) {
                return "Item extra não pode ser pedido sem o principal";
            }
        }

        if (itens.length === 0) {
            return "Não há itens no carrinho de compra!";
        }

        if (metodoDePagamento !== 'credito' && metodoDePagamento !== 'debito' && metodoDePagamento !== 'dinheiro') {
            return "Forma de pagamento inválida!";
        }

        let valorTotal = 0;

        for (const item of itens) {
            const [itemNome, quantidade] = item.split(',');
            if (quantidade <= 0) {
                return "Quantidade inválida!";
            }

            if (itemNome === 'cafe' || itemNome === 'chantily' || itemNome === 'suco' || itemNome === 'sanduiche' || itemNome === 'queijo' || itemNome === 'salgado' || itemNome === 'combo1' || itemNome === 'combo2') {
                valorTotal += menu[itemNome] * parseInt(quantidade);
            } else {
                return "Item inválido!";
            }
        }

        //REGRA DE DESCONTOS E TAXAS
        if (metodoDePagamento === 'dinheiro') {
            valorTotal *= 0.95;
        } else if (metodoDePagamento === 'credito') {
            valorTotal *= 1.03;
        }

        return `R$ ${valorTotal.toFixed(2).replace(".", ",")}`;
    }

}

export { CaixaDaLanchonete };
