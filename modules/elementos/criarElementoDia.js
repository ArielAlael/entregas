import { gerarElementoDOM, padronizarValor } from "../auxiliares/padronizacao.js"

export const criarElementoDia = (id, dia, valor, entregas, quilometragem) => {
    
    const novoElmento = 
    `
        <li id="${id}">
            <p class="data">${dia.slice(0,5).replace("-", "/")}</p>
            <p><span>R$</span> ${padronizarValor(valor)}</p>
            <p class="distintivo">${entregas} Entregas</p>
            <p class="distintivo">${quilometragem} km</p>
        </li>
    `

    const elemento = gerarElementoDOM(novoElmento)

    return elemento
}