import { data } from "../../../data/data.js"
import { buscarDia, colocarNaAba, gerarElementoDOM, padronizarValor } from "../../auxiliares/padronizacao.js"
import { renderizarAbaDetalhes } from "../renderizarAbaDetalhes.js"

export const criarElementoDia = ({id, dia, valor, entregas, quilometragem}) => {
    
    const novoElmento = 
    `
        <li class="card-dia">
            <p class="data">${dia.slice(0,5).replace("-", "/")}</p>
            <p><span>R$</span> ${padronizarValor(valor)}</p>
            <p class="distintivo">${entregas} Entregas</p>
            <p class="distintivo">${quilometragem} km</p>
        </li>
    `

    return gerarElementoDOM(novoElmento)
}

export const dias = () => {

    const $listaDeDias = document.createElement("ul")
    $listaDeDias.classList = "dias"

    const frag = document.createDocumentFragment()

    data.toReversed().forEach((d) => {

        const $novoDia = criarElementoDia(d)
        $novoDia.dataset.id = d.id

        frag.appendChild($novoDia)

    })

    $listaDeDias.appendChild(frag)
    colocarNaAba($listaDeDias, "#abaPainel")

    $listaDeDias.addEventListener("click", (e) => {
       const card = e.target.closest(".card-dia")
       const id = Number(card.dataset.id)
       renderizarAbaDetalhes(buscarDia(id))
    })
}