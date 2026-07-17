//PEGANDO ELEMENTO DO DOM
const inputCep = document.querySelector('#cep')

//CAPTURANDO O EVENTO change
inputCep.addEventListener('change',(evt)=>{

 const numCep = evt.target.value.replace(/\D/g,"")

 if (numCep.leght !== 8){
    alert('CEP INVÁLIDO')

    return
 }
 //CHAMA A FUNÇÃO consultaCep
 consultaCEP(numCep)

})

//FUNÇÃO CONSULTA CEP VIACEP
const consultaCEP = async (cep) => {
    //TENTA CONECTAR A API
    try{
        //FAZ A COMUNICAÇÃO COM A API DO VIA CEP POR MEIO DA FUNÇÃO fetch 
    //AWAIT - AGUARDA ATÉ OBTER UM PROMISE
    const resposta = await fetch (`https://viacep.com.br/ws/${cep}/json/`)

    //SE O STATUS DA RESPOSTA NÃO FOR OK,DISPARA UMA EXCEÇÃO
    if(!reposta.ok){
        throw new Error(ERRO NA REQUISIÇÃO)
   }

   //OBTEM OS DADOS DA API
   const dadosEndereco = await reposta.json()

VERIFICA SE OS DADOS SÃO VÁLIDOS
if(dadosEndereco.erro){
alert('CEP NÃO LOCALIZADO')

return
}

//CHAMA A FUNÇÃO carregaInput
carregaInput(dadosEnderco)

//CASO HAJA QUALQUER ERRO É DISPARADA UMA EXCEÇÃO
    }catch(erro){
        console.log("ERRO", erro.menssage)
    }

    }

    //OBJETO LITERAL DOS INPUTS
    const campos = {
        logradouro:document.querySelector('#logradouro'),
        bairro:document
    }