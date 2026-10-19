import { atualizarData, data } from "../../../data/data.js"
import { colocarNaAba, novoId, padronizarDia } from "../../auxiliares/padronizacao.js"
import { alerta } from "../alerta.js"
import { criarElementoBotao } from "../componentes_aba_painel/botaoNovoDia.js"
import { renderizarAbaDetalhes } from "../renderizarAbaDetalhes.js"

const editarDia = (diaObjeto) => {

    const [$dia, $valor, $entregas, $quilometragem] = document.querySelectorAll(".info")
    
    const diaEditado = {
        ...diaObjeto,
        dia: padronizarDia($dia.value), 
        valor: Number($valor.value),
        entregas: Number($entregas.value),
        quilometragem: Number($quilometragem.value)
    } 

    const novaListaEditada = data.map((d) => d.id === diaObjeto.id ? diaEditado : d)

    atualizarData(novaListaEditada)

    alerta("Salvo com sucesso", "sucesso")
}

const criarNovoDia = ({id}) => {

    const [$dia, $valor, $entregas, $quilometragem] = document.querySelectorAll(".info")

    const novoDia = {
        id,
        dia: padronizarDia($dia.value), 
        valor: Number($valor.value),
        entregas: Number($entregas.value),
        quilometragem: Number($quilometragem.value)
    }

    atualizarData([...data, novoDia])

    renderizarAbaDetalhes(novoDia)

    alerta("Criado com sucesso", "sucesso")
}

export const botaoSalvar = (dia) => {

    const $botao = criarElementoBotao("Salvar")

    colocarNaAba($botao, "#abaDetalhes")

    const todosIds = data.map(({id}) => id)
   
    if (todosIds.includes(dia.id)) $botao.addEventListener("click", () => editarDia(dia))
        else $botao.addEventListener("click", () => criarNovoDia(dia))

}