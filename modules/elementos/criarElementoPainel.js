import { padronizarValor, gerarElementoDOM } from "../auxiliares/padronizacao.js"

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
    
    const elemento = gerarElementoDOM(novoElemento)

    return elemento

}