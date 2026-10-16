import { atualizarData, data } from "../../../data/data.js"
import { colocarNaAba } from "../../auxiliares/padronizacao.js"
import { criarElementoBotao } from "../../elementos/criarElementoBotao.js"

export const botaoSalvar = (dia) => {

    const botao = criarElementoBotao("Salvar")

    const todosIds = data.map(({id}) => id)

    if (todosIds.includes(dia.id)) {
        console.log("Dia Existe")


    } else {
        console.log("novo dia")

        botao.addEventListener("click", () => {
            const att = [...data, dia]
            atualizarData(att)
        })
    }

    colocarNaAba(botao, "#abaDetalhes")
}