import { calcularListrosGastos, calcularMediaEntregas, calcularMediaKm, colocarNaAba, gerarElementoDOM, padronizarValor } from "../../auxiliares/padronizacao.js"

const criarInput = ({dia, valor, entregas, quilometragem}) => {

    const [d, m, a] = dia.split("-")

    const novoElementoEditavel = 
    `
    <div class="informacoes">
        <div>
            <label for="dia">Dia</label>
            <input id="dia" type="date" value="${a}-${m}-${d}">
        </div>
    
        <div>
            <label for="valor">Valor</label>
            <input id="valor" type="number" value="${valor.toFixed(2)}">
        </div>

        <div>
            <label for="entregas">Entregas</label>
            <input id="entregas" type="number" value="${entregas}">
        </div>

        <div>
            <label for="quilometragem">Km's</label>
            <input id="quilometragem" type="number" value="${quilometragem}">
        </div>

        <div class="calculoDetalhes">
            <label for="mediaEntrega">Média/Entrega</label>
            <input disabled placeholder="—" id="mediaEntrega" type="number" value="${calcularMediaEntregas(valor, entregas).toFixed(2)}">
        </div>

        <div class="calculoDetalhes">
            <label for="mediaKm">Média/Km</label>
            <input disabled placeholder="—" id="mediaKm" type="number" value="${calcularMediaKm(valor, quilometragem).toFixed(2)}">
        </div>

        <div class="calculoDetalhes">
            <label for="litrosGastos">Litros Gastos</label>
            <input disabled placeholder="—" id="litrosGastos" type="number" value="${calcularListrosGastos(quilometragem).toFixed(2)}">
        </div>

    </div>
    `

    const elemento = gerarElementoDOM(novoElementoEditavel)

    return elemento
}


export const inputs = (dia) => {

    const paiInputs = criarInput(dia)

    colocarNaAba(paiInputs, "#abaDetalhes")

    return
}