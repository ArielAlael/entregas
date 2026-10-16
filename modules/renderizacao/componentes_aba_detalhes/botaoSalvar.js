import { colocarNaAba } from "../../auxiliares/padronizacao.js"
import { criarElementoBotao } from "../../elementos/criarElementoBotao.js"

export const botaoSalvar = () => {

    const descricao = "Salvar"

    const botao = criarElementoBotao(descricao)

    colocarNaAba(botao, "#abaDetalhes")
}