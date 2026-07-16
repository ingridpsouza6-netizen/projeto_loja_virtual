// ARRAY DE ITENS DO CARRINHO
let itensCarrinho = JSON.parse(sessionStorage.getItem("carrinhoSessao")) || []
//const itensCarrinho = JSON.parse(localStorge.get('carrinhoSessao')) || []

//FUNÇÃO ITEM
const item = (objProduto) => {

    const item = {
        id_produto: objProduto.id_produto,
        descricao_produto: objProduto.descricao_produto,
        valor_unitario: objProduto.valor_unitario,
        unidade: objProduto. unidade,
        caminho_imagem: objProduto.caminho_imagem,
        quantidade: 1,
       /* totalItem: parseFloat(quantidade) * parseFloat(objProduto.valor_unitario)*/
    }
    return item
}

/*FUNÇÃO PARA ADICIONAR UM ITEM(essa função adiciona o item no carrinho sem olhar
se já tem algum item igual, ela apenas adiciona )

const addItem = (objItem) => {
    itensCarrinho.push(item(objItem))

    sessionStorage.setItem("carrinhoSessao", JSON.stringify(itensCarrinho))
    
 
}*/


/*FUNÇÃO PARA ADICIONAR UM ITEM(essa função adiciona, mas olha se existe um item igual, e apenas multiplica o mesmo item)*/

    const addItem = (objItem) => {

    // Procura se o produto já existe
    const itemExistente = itensCarrinho.find(
        produto => produto.id_produto === objItem.id_produto
    );

    if (itemExistente) {

        // Se já existir, aumenta a quantidade
        itemExistente.quantidade++;

    } else {

        // Se não existir, adiciona normalmente
        itensCarrinho.push(item(objItem));

    }

    sessionStorage.setItem(
        "carrinhoSessao",
        JSON.stringify(itensCarrinho)
    );

}

//FUNÇÃO PARA LISTAR OS ITENS DO CARRINHO
const listItens = () => {

    const listaItens = JSON.parse(sessionStorage.getItem("carrinhoSessao"))

    return listaItens

}

//FUNÇÃO REMOVER ITEM DO ARRAY
const removeItem = (pos)=>{
    itensCarrinho.splice(pos,1)

    sessionStorage.setItem('carrinhoSessao', JSON.stringify(itensCarrinho)) 
}

//FUNÇÃO PARA ALTERAR A QUANTIDADE DO ITEM
const alterarQuantidade = (idProduto, novaQuantidade) => {

    itensCarrinho.forEach((item) => {

        if (item.id_produto === idProduto) {
            item.quantidade = novaQuantidade;
        }

    });

    sessionStorage.setItem(
        "carrinhoSessao",
        JSON.stringify(itensCarrinho)
    );

}
//EXPORTAÇÃO
export { addItem, listItens, removeItem, alterarQuantidade}


	
