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
        dia: "",
        valor: "",
        entregas: "",
        quilometragem: ""
    }

    $botao.addEventListener("click", () => renderizarAbaDetalhes(novoDia))

    colocarNaAba($botao, "#abaPainel")

}