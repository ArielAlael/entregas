import { data } from "../../../data/data.js"
import { criarElementoPainel } from "../../elementos/criarElementoPainel.js"
import { calcularListrosGastos, calcularMediaEntregas, calcularMediaKm, colocarNaAba } from "../../auxiliares/padronizacao.js"

export const painel = () => {

    let mesAtual = new Date().toLocaleString(`pt-BR`, { month: "long" })
    mesAtual = mesAtual.charAt(0).toUpperCase() + mesAtual.slice(1)
    const valorTotal = data.reduce((acc, {valor}) => acc + valor, 0)
    const entregasTotal = data.reduce((acc, {entregas}) => acc + entregas, 0)
    const quilometragemTotal = data.reduce((acc, {quilometragem}) => acc + quilometragem, 0)

    const geral = {
        mesAtual,
        valorTotal,
        entregasTotal,
        quilometragemTotal,
        mediaKm: calcularMediaKm(valorTotal, quilometragemTotal),
        mediaEntrega: calcularMediaEntregas(valorTotal, entregasTotal),
        litrosGastos: calcularListrosGastos(quilometragemTotal),
    }
    
    const painel =  criarElementoPainel(geral)

    colocarNaAba(painel, "#abaPainel")
}