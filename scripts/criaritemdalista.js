import gerarDiaDaSemana from "./gerardiadasemana.js";
const inputItem = document.getElementById("input-item");
let contador = 0;

export function criarItemDalista () {
    
if(inputItem.value === ""){
    alert("Por favor, insira um item!");
    return}

    const ItemDALista = document.createElement ("li");
    const containerItemdaLista = document.createElement ("div");
    containerItemdaLista.classList.add("lista-item-container");
    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.id = "checkbox-"+ contador++;
    const nomeItem = document.createElement ("p");
    nomeItem.innerText = inputItem.value;

    inputCheckbox.addEventListener("click", function (){
    if(inputCheckbox.checked){
    nomeItem.style.textDecoration = "line-through";
    } else {
    nomeItem.style.textDecoration = "none"
    }

    })

    containerItemdaLista.appendChild(inputCheckbox);
    containerItemdaLista.appendChild(nomeItem);
    const dataCompleta = gerarDiaDaSemana();
    
    const itemData = document.createElement ("p");
    itemData.innerText = dataCompleta;
    itemData.classList.add("texto-data")
    ItemDALista.appendChild (containerItemdaLista);
    
    
    ItemDALista.appendChild(itemData)
    return ItemDALista;
}