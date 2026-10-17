import { atualizarData, data } from "../../../data/data.js"
import { colocarNaAba, novoId } from "../../auxiliares/padronizacao.js"
import { criarElementoBotao } from "../componentes_aba_painel/botaoNovoDia.js"

const criarNovoDia = ({id}) => {

    let [dia, valor, entregas, quilometragem] = document.querySelectorAll(".info")
    
    const [a, m, d] = dia.value.split("-")

    atualizarData([...data, {
        id,
        dia: `${d}-${m}-${a}`, 
        valor: Number(valor.value),
        entregas: Number(entregas.value),
        quilometragem: Number(quilometragem.value)
    }])
}

export const botaoSalvar = (dia) => {

    const $botao = criarElementoBotao("Salvar")

    const todosIds = data.map(({id}) => id)

    if (todosIds.includes(dia.id)) {
        // console.log("Dia Existe")

    } else {

        $botao.addEventListener("click", () => {
            criarNovoDia(dia)

        })
    }

    colocarNaAba($botao, "#abaDetalhes")
}