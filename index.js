import { criarItemDalista } from "./scripts/criaritemdalista.js";
import verificarListaVazia from "./scripts/verificarlistavazia.js";
const listaDeCompras = document.getElementById("lista-de-compras");
const Botaoadicionar = document.getElementById ("adicionar-item");


Botaoadicionar.addEventListener ("click", (evento)=>{
    evento.preventDefault();
     const ItemDaLista = criarItemDalista ();
    listaDeCompras.appendChild(ItemDaLista);

    verificarListaVazia(listaDeCompras); 

})

verificarListaVazia(listaDeCompras);