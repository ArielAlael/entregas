import { atualizarData, data } from "../../../data/data.js"
import { colocarNaAba, novoId } from "../../auxiliares/padronizacao.js"
import { criarElementoBotao } from "../componentes_aba_painel/botaoNovoDia.js"

const editarDia = (diaObjeto) => {

    let [$dia, $valor, $entregas, $quilometragem] = document.querySelectorAll(".info")
    
    const [a, m, d] = $dia.value.split("-")

    const diaEditado = {
        ...diaObjeto,
        dia: `${d}-${m}-${a}`, 
        valor: Number($valor.value),
        entregas: Number($entregas.value),
        quilometragem: Number($quilometragem.value)
    } 

    const novaListaEditada = data.map((d) => d.id === diaObjeto.id ? diaEditado : d)

    atualizarData(novaListaEditada)

}

const criarNovoDia = ({id}) => {

    let [$dia, $valor, $entregas, $quilometragem] = document.querySelectorAll(".info")
    
    const [a, m, d] = $dia.value.split("-")

    atualizarData([...data, {
        id,
        dia: `${d}-${m}-${a}`, 
        valor: Number($valor.value),
        entregas: Number($entregas.value),
        quilometragem: Number($quilometragem.value)
    }])
}

export const botaoSalvar = (dia) => {

    const $botao = criarElementoBotao("Salvar")

    colocarNaAba($botao, "#abaDetalhes")

    const todosIds = data.map(({id}) => id)

    if (todosIds.includes(dia.id)) $botao.addEventListener("click", () => editarDia(dia))
        else $botao.addEventListener("click", () => criarNovoDia(dia))

}