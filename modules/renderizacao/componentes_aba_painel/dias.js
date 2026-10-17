import { data } from "../../../data/data.js"
import { colocarNaAba, gerarElementoDOM, padronizarValor } from "../../auxiliares/padronizacao.js"
import { renderizarAbaDetalhes } from "../renderizarAbaDetalhes.js"

export const criarElementoDia = (id, dia, valor, entregas, quilometragem) => {
    
    const novoElmento = 
    `
        <li id="${id}">
            <p class="data">${dia.slice(0,5).replace("-", "/")}</p>
            <p><span>R$</span> ${padronizarValor(valor)}</p>
            <p class="distintivo">${entregas} Entregas</p>
            <p class="distintivo">${quilometragem} km</p>
        </li>
    `

    const elemento = gerarElementoDOM(novoElmento)

    return elemento
}

export const dias = () => {

    const listaDeDias = document.createElement("ul")
    listaDeDias.classList = "dias"
    listaDeDias.textContent = ""

    data.toReversed().forEach((d) => {
        const novoDia = criarElementoDia(d.id, d.dia, d.valor, d.entregas, d.quilometragem)

        const eventos = ['click'] // adicionar 'touchstart'

        eventos.forEach((evento) => {
            novoDia.addEventListener(evento, () => {
                renderizarAbaDetalhes(d)
            })
        })

        listaDeDias.appendChild(novoDia)
    })

    colocarNaAba(listaDeDias, "#abaPainel")
}
