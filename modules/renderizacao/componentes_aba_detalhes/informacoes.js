import { calcularListrosGastos, calcularMediaEntregas, calcularMediaKm, colocarNaAba, gerarElementoDOM, padronizarDia } from "../../auxiliares/padronizacao.js"
import { data } from "../../../data/data.js"
import { editarDia } from "./botaoSalvar.js"

const criarInput = ({dia, valor, entregas, quilometragem}) => {

    const novoElementoEditavel = 
    `
    <div class="informacoes">
        <div>
            <label for="dia">Dia</label>
            <input class="info" id="dia" type="date" value="${padronizarDia(dia)}">
        </div>
    
        <div>
            <label for="valor">Valor</label>
            <input placeholder="—" class="info" id="valor" type="number" value="${valor}">
        </div>

        <div>
            <label for="entregas">Entregas</label>
            <input placeholder="—" class="info" id="entregas" type="number" value="${entregas}">
        </div>

        <div>
            <label for="quilometragem">Km's</label>
            <input placeholder="—" class="info" id="quilometragem" type="number" value="${quilometragem}">
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

    return gerarElementoDOM(novoElementoEditavel)
}



export const inputs = (dia) => {

    const $paiInputs = criarInput(dia)

    colocarNaAba($paiInputs, "#abaDetalhes")
 
    const todosIds = data.map(({id}) => id)
    const $valor = document.querySelector("#valor")

    if (!todosIds.includes(dia.id)) $valor.focus()

    const $quilometragem = document.querySelector("#quilometragem")
    
    $quilometragem.addEventListener("focusout", () => editarDia(dia))

}