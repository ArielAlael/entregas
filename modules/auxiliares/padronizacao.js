export const padronizarValor = (valor) => {
   return valor.toLocaleString(`pt-BR`, { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

export const gerarElementoDOM = (novoElemento) => {
    const elemento = new DOMParser()
        .parseFromString(novoElemento, "text/html")
        .body.firstElementChild

    return elemento
}

// calculos
export const calcularMediaKm = (valor, quilometragem) => Number((valor / quilometragem).toFixed(2))
export const calcularMediaEntregas = (valor, entregas) => Number((valor / entregas).toFixed(2))
export const calcularListrosGastos = (quilometragem) => Number((quilometragem / 28).toFixed(2))

export const colocarNaAba = (elemento, aba) => {
    const verificarAba = aba === "#abaPainel" ? "#abaPainel" : "#abaDetalhes"
    document.querySelector(verificarAba).appendChild(elemento)
}
