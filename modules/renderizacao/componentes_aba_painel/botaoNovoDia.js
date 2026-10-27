import { renderizarAbaDetalhes } from "../renderizarAbaDetalhes.js"
import { colocarNaAba, novoId } from "../../auxiliares/padronizacao.js"
import { gerarElementoDOM } from "../../auxiliares/padronizacao.js"

export const criarElementoBotao = (descricao) => {

    const novoElemento = `<button class="botao">${descricao}</button>`
    return gerarElementoDOM(novoElemento)

} 

export const botaoNovoDia = () => {

    const descricao = "Novo Dia"
    const $botao = criarElementoBotao(descricao)

    const novaData = new Date()
    const [dia, mes, ano] = [novaData.getDate(), novaData.getMonth() + 1, novaData.getFullYear()]
    const diaAtual = `${dia}-${mes}-${ano}`

    const novoDia = { 
        id: novoId(),
        dia: diaAtual,
        valor: "",
        entregas: "",
        quilometragem: ""
    }

    $botao.addEventListener("click", () => renderizarAbaDetalhes(novoDia))
    colocarNaAba($botao, "#abaPainel")

}