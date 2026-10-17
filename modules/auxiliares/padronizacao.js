import { data } from "../../data/data.js"

export const padronizarValor = (valor) => {
   return valor.toLocaleString(`pt-BR`, { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

// export const gerarElementoDOM = (novoElemento) => {
//     const elemento = new DOMParser()
//         .parseFromString(novoElemento, "text/html")
//         .body.firstElementChild

//     return elemento
// }

const template = document.createElement("template")

export const gerarElementoDOM = (novoElemento) => {
    template.innerHTML = novoElemento.trim()

    return template.content.firstElementChild
}

// calculos
export const calcularMediaKm = (valor, quilometragem) => Number((valor / quilometragem).toFixed(2))
export const calcularMediaEntregas = (valor, entregas) => Number((valor / entregas).toFixed(2))
export const calcularListrosGastos = (quilometragem) => Number((quilometragem / 28).toFixed(2))

export const colocarNaAba = (elemento, aba) => {
    const verificarAba = aba === "#abaPainel" ? "#abaPainel" : "#abaDetalhes"
    document.querySelector(verificarAba).appendChild(elemento)
}

export const novoId = () => {
    const todosIds = data.map(({id}) => id)
    const ultimoId = Math.max(...todosIds)
    return ultimoId + 1
}
