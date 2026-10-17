import { renderizarAbaDetalhes } from "../renderizarAbaDetalhes.js"
import { colocarNaAba, novoId } from "../../auxiliares/padronizacao.js"
import { gerarElementoDOM } from "../../auxiliares/padronizacao.js"

export const criarElementoBotao = (descricao) => {

    const novoElemento = `<a class="botao">${descricao}</a>`
    return gerarElementoDOM(novoElemento)

} 

export const botaoNovoDia = () => {

    const descricao = "Novo Dia"

    const $botao = criarElementoBotao(descricao)

    const novoDia = {
        id: novoId(),
        dia: "00-00-0000",
        valor: 0,
        entregas: 0,
        quilometragem: 0
    }

    $botao.addEventListener("click", () => renderizarAbaDetalhes(novoDia))

    colocarNaAba($botao, "#abaPainel")
}