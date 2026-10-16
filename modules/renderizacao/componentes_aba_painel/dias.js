import { data } from "../../../data/data.js"
import { colocarNaAba } from "../../auxiliares/padronizacao.js"
import { criarElementoDia } from "../../elementos/criarElementoDia.js"
import { renderizarAbaDetalhes } from "../renderizarAbaDetalhes.js"

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
