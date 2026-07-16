import { addItem } from "./carrinho.js";
import { produtos } from "./lista_produtos.js";

const botoes = document.querySelectorAll(".btn-add");

botoes.forEach((botao) => {

    botao.addEventListener("click", () => {

        const id = Number(botao.dataset.id);

        const produto = produtos.find(p => p.id_produto === id);

        if (produto) {
            addItem(produto);
            alert("Produto adicionado ao carrinho!");
        }

    });

});