import { renderizarAbaDetalhes } from "../renderizarAbaDetalhes.js"
import { colocarNaAba } from "../../auxiliares/padronizacao.js"
import { criarElementoBotao } from "../../elementos/criarElementoBotao.js"

export const botaoNovoDia = () => {

    const descricao = "Novo Dia"

    const botao = criarElementoBotao(descricao)

    const novoDia = {
        id: 0,
        dia: "00-00-0000",
        valor: 0,
        entregas: 0,
        quilometragem: 0
    }

    botao.addEventListener("click", () => {
        renderizarAbaDetalhes(novoDia)
    })

    colocarNaAba(botao, "#abaPainel")
}