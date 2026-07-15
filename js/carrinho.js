//CRIANDO O ARRAY DE ITENS DO CARRINHO
let itensCarrinho = JSON.parse(sessionStorage.getItem("carrinhoSessao")) || []

//const itensCarrinho2 = JSON.parse(sessionStorage.get("carrinhoSessao")) || []

//FUNÇÃO ITEM
const Item = (objProduto) => {

    const item= {
    id_produto:objProduto.id_produto,
    descricao_produto:objProduto.descricao_produto,
    valor_unitario: objProduto.valor_unitario,
    unidade: objProduto.unidade,
    Caminho_imagem: objProduto.Caminho_imagem,
    quantidade :1,
    totalItem: parseInt(quantidade) *parseFloat(objProduto.valor_unitario)
    }

    return item
}
  

//FUNÇÃO PARA ADICIONAR UM ITEM
const addItem = (objItem) => {
    itensCarrinho.push(item(objItem))

    sessionStorage.setItem("carrinhoSessao", JSON.stringify(itensCarrinho))
    //localStorage.setItem("carrinhoSessao", JSON.stringify(itensCarrinho))
}

//FUNÇÃO PARA LISTAR OS ITENS DO CARRINHO
const listItens = () => {
    const listaItens = JSON.parse(sessionStorage.getItem("carrinhoSessao"))

    return listaItens
}


//EXPORTAÇÃO
export { addItem, listItens }