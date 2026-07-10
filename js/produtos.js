//IMPORTANDO OS PRODUTOS DO ARQUIVO lista_produtos.js
import { produtos } from './lista_produtos.js '

//PEGANDO ELEMENTOS DO DOM
const sectionCards = document.querySelector('#cards')

//CARREGANDO OS CARDS
const listaProdutos = () => { 

}

//CHAMANDO A FUNÇÃO listarProdutos
listaProdutos()

//MONTANDO OS MENUS SEÇÕES 
const menuSecoes = () => {
    //CRIANDO A COLEÇÃO MAP
    const mapSecoes = new Map ()

    //PECORRENDO O ARRAY PRODUTO
    produtos.forEach((elem)=>{
        //SELECIONANDO AS SEÇÕES
        mapSecoes.set(elem.id_secao, elem)
    })

    //COVERTENDO MAP EM ARRAY
    const secoesFiltradas = Array.from(menuSecoes.values())

    //RETORNANDO O ARRAY SELECIONADO
    return secoesFiltradas
    }

    //FUNÇÃO PARA INSERIR OS MENUS NA LISTA 
    const carregaSecoes = () => {
    //PEGANDO O ELEMENTO ul menu-secoes DO DOM
    const ulMenuSecoes = document.querySelector('#menu-secoes')

    //LIMPANDO O ELEMENTO DO DOM
ulMenuSecoes.innerHTML=''
    
//CHAMANDO A FUNÇÃO menuSecoes E PERCORRENDO O ARRAY DE SEÇÕES JA SELECIONADAS
      ulMenuSecoes.innerHTML =''
        menuSecoes().forEach((elem, i)=>{
            const liMenu = document.createElement('li')
    
            const aMenu = document.createElement('a')
            aMenu.setAttribute('href', '#')
            aMenu.setAttribute('class', 'lnk-secao')
            aMenu.innerHTML = elem.secao

            aMenu.addEventListerner('click ', () => {
                filtroProduto(elem.id_secao)
            })

            //ADICIONANDO O ELEMENTO FILHO a NO li
            liMenu.appendChild(aMenu)
    
           //ADICIONANDO O ELEMENTO FILHO liMenu NO OBJETO DOM
         ulMenuSecoes.appendChild(liMenu)
        })
    }

   carregaSecoes()
   //FUNÇÃO FILTRO PRODUTO
   const filtroProdutos = (idSeção) =>{
    return produtos.filter(elem.id_secao===idSecao)
 }

 //FUNÇÃO MONTA CARDS 
 const montaCards = (objProdutos) =>{

 }

//LIMPANDO A SECTION cards
sectionCards.innerHTML = ''

//PECORRENDO O ARRAY DE PRODUTOS
produtos.forEach((elem, i)=>{
    //CRIANDO O ELEMENTO div E DEFININDO O ATRIBUTO CARD
    const divCard = documentcreateElement('div')
    divCard.setAttribute('class','card')
    
    //CRIANDO O ELEMENTO img E DEFININDO OS ATRIBUTOS SRC E ALT OS VALORES DO CAMINHO DAS IMAGENS E A DESCRIÇÃO DOS PRODUTOS
 const imgCard = document.createElement('img')
imgCard.setAttribute('src', elem.caminho_imagem)
imgCard.setAttribute('alt', elem.descricao_produto)

//CRIANDO O ELEMENTO p E ATribuindo A DESCRIÇÃO DOS PRODUTOS
const pCard = document.createElement('p')
pCard.innerHTML = elem.descricao_produto

//CRIANDO O ELEMENTO h2 E ATRIBUINDO O VALOR UNITÁRIO DEIXANDO EM DUAS CASAS DECIMAIS E SUBSTITUINDO PONTO POR VÍRGULA
const h2Card = document.createElement('h2')
h2Card.innerHTML = `R$ ${parseFloat(elem.valor_unitario).  toFixed(2).replace('.', ',')}`

//CRIANDO O ELEMENTO button E DEFININDO OS ATRIBUTOS CLASS E A DESCRIÇÃO ADICIONAR
const btnCard = document.createElement('button')
btnCard.setAttribute('class', 'btn-add')
btnCard.innerHTML = 'Adicionar'

//ADICIONANDO OS ELEMENTOS FILHOS AOS divCard
divCard.appendChild(imgCard)
divCard.appendChild(pCard)
divCard.appendChild(h2Card)
divCard.appendChild(btnCard)

//ADICIONANDO O divCard A SECTION CARDS
sectionCards.appendChild(divCard)

})