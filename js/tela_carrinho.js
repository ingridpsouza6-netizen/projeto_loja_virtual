import { listItens, removeItem, alterarQuantidade } from "./carrinho.js"

//MONTAR TELA CARRINHO
const montaTelaCarrinho = ()=>{
    const sectionItensCarrinho = document.querySelector('#itens-carrinho')

    sectionItensCarrinho.innerHTML = ''

    let totalCarrinho = 0;
    
    listItens().forEach((elem, i) => {
        const sectionItem = document.createElement('section')
        sectionItem.setAttribute('class', 'itens')

        const divImgItem = document.createElement('div')
        divImgItem.setAttribute('class', 'img-item')

        const imgItem = document.createElement('img')
        imgItem.setAttribute('src', elem.caminho_imagem)
        imgItem.setAttribute('alt', elem.descricao_produto)

        divImgItem.appendChild(imgItem)

        const divDescricaoItens = document.createElement('div')
        divDescricaoItens.setAttribute('class', 'descricoes-itens')

        const divDescricao = document.createElement('div')
        divDescricao.setAttribute('class', 'descricao')
        divDescricao.innerHTML = elem.descricao_produto

        const divValores = document.createElement('div')
        divValores.setAttribute('class', 'valores')

        const pItem = document.createElement('p')
        pItem.innerHTML = `R$ ${parseFloat(elem. valor_unitario).
        toFixed(2).replace('.',',')}`

        const divQuant = document.createElement('div')
        divQuant.setAttribute('class', 'input-quantidade')

        const inputQuantidade = document.createElement('input')
        inputQuantidade.setAttribute('type', 'number')
        inputQuantidade.setAttribute('name', `quant${i}`)
        inputQuantidade.setAttribute('id', `quant${i}`)
        inputQuantidade.setAttribute('class', 'input-item')
        inputQuantidade.setAttribute('value', elem.quantidade)

 //essa função Lê o número digitado, verifica se é válido, salva a nova quantidade e desenha o carrinho novamente.
        inputQuantidade.addEventListener("change", () => {

            let quantidade = Number(inputQuantidade.value);
        
            if (quantidade < 1 || !Number.isInteger(quantidade)) {
                quantidade = 1;
                inputQuantidade.value = 1;
            }
        
            alterarQuantidade(elem.id_produto, quantidade);
        
            montaTelaCarrinho();
        
        });

//
        divQuant.appendChild(inputQuantidade)

        /*Essa função não importa se a quantidade é 1, 2 ou 50, ele sempre multiplica por 1.

        const pCalc = document.createElement('p')
        pCalc.innerHTML = `R$ ${elem.valor_unitario * 1}`*/



     /*Dica: sempre que você encontrar um document.createElement(...), pense:

       "O computador está criando uma peça nova da página."*/


      //Ela apenas cria um elemento HTML <p> (um parágrafo).
        const pCalc = document.createElement('p')
     //pega o preço de uma unidade e multiplica pela quantidade 
        const totalItem = parseFloat(elem.valor_unitario) * elem.quantidade;
    //+= quer dizer: "Pegue o que já existe e some mais isso."
        totalCarrinho += totalItem;
    //toFixed (2) é para aparecer assim 00.00 e replace('.', ',') é para aparecer 00,00
        pCalc.innerHTML = `R$ ${totalItem.toFixed(2).replace('.', ',')}`

        const divRemover = document.createElement('div');
        divRemover.setAttribute('class','img-remover');

        const imgRemover = document.createElement('img');
        imgRemover.setAttribute('src','../imagens/remover.png');

        divRemover.appendChild(imgRemover);

        imgRemover.addEventListener('click', () => {
            if (confirm(`Tem certeza que deseja remover ${elem.descricao_produto} do carrinho?`)) {
                removerItemTela(i);
            }
        })

        divValores.appendChild(pItem)
        divValores.appendChild(divQuant)
        divValores.appendChild(pCalc)
        divValores.appendChild(divRemover)

        divDescricaoItens.appendChild(divDescricao)
        divDescricaoItens.appendChild(divValores)

        sectionItem.appendChild(divImgItem)
        sectionItem.appendChild(divDescricaoItens)

        sectionItensCarrinho.appendChild(sectionItem)
    })

    const frete = 10;

    document.querySelector("#valor-total").innerHTML =
    `R$ ${totalCarrinho.toFixed(2).replace('.', ',')}`;
    
    document.querySelector("#valor-frete").innerHTML =
    `R$ ${frete.toFixed(2).replace('.', ',')}`;
    
    document.querySelector("#valor-pagar").innerHTML =
    `R$ ${(totalCarrinho + frete).toFixed(2).replace('.', ',')}`
}

montaTelaCarrinho()
const removerItemTela = (pos)=>{
    removeItem(pos)

    montaTelaCarrinho()
}

