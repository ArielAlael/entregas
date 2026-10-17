import { calcularListrosGastos, calcularMediaEntregas, calcularMediaKm, colocarNaAba } from "../../auxiliares/padronizacao.js"
import { criarElementoPainel, painel } from "../componentes_aba_painel/painelPrincipal.js"

export const painelDetalhe = ({dia, valor, quilometragem, entregas}) => {

    const geral = {
        dia: dia.slice(0, 5).replace("-", "/"),
        mesAtual: false,
        valorTotal: valor,
        quilometragemTotal: quilometragem,
        entregasTotal: entregas,
        mediaKm: calcularMediaKm(valor, quilometragem),
        mediaEntrega: calcularMediaEntregas(valor, entregas),
        litrosGastos: calcularListrosGastos(quilometragem)
    }

    const $painelDetalhes = criarElementoPainel(geral)
    colocarNaAba($painelDetalhes, "#abaDetalhes")

}