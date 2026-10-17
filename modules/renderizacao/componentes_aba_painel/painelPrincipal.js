import { data } from "../../../data/data.js"
import { calcularListrosGastos, calcularMediaEntregas, calcularMediaKm, colocarNaAba, padronizarValor, gerarElementoDOM } from "../../auxiliares/padronizacao.js"

export const criarElementoPainel = (
    {
        dia=false,
        mesAtual=false,
        valorTotal,
        quilometragemTotal,
        entregasTotal,
        mediaKm,
        mediaEntrega,
        litrosGastos
    }
) => {
    
    const novoElemento = 
    `
        <div class="painel"> 
            ${ mesAtual === false ? "" : `<p>${mesAtual}</p>`}
            <div>
                ${
                    dia === false
                    ? "" 
                    : `
                    <ul class="paiDistintivo"> 
                        <li class="distintivo dia">${dia}</li>
                    </ul>` 
                }
                <h1>
                    <span>R$</span> ${padronizarValor(valorTotal)}
                </h1>
                
                <ul class="paiDistintivo"> 
                    <li class="distintivo">${entregasTotal} Entregas</li>
                    <li class="distintivo">${quilometragemTotal} Km</li>
                </ul> 
                <ul class="calculos">
                    <li>Média/KM R$ ${padronizarValor(mediaKm)}</li>
                    <li>Média/Entrega R$ ${padronizarValor(mediaEntrega)}</li>
                    <li>Litros Gastos ${padronizarValor(litrosGastos)} </li>
                </ul>
            </div>
        </div>
    `
    
    return gerarElementoDOM(novoElemento)

}

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
    
    const $painel =  criarElementoPainel(geral)

    colocarNaAba($painel, "#abaPainel")
}