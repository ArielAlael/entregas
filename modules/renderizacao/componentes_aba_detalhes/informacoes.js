import { calcularListrosGastos, calcularMediaEntregas, calcularMediaKm, colocarNaAba, gerarElementoDOM, padronizarDia, padronizarValor } from "../../auxiliares/padronizacao.js"
import { alerta } from "../alerta.js"

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

const atualizarAba = (dia) => {

    const $inputs = document.querySelector(".informacoes")

    if ($inputs) $inputs.remove()

    inputs(dia)

} 

const editarInfo = (dia, input) => {

    let diaEditado = {}

    input.id === "dia"
        ? diaEditado = {...dia, [input.id]: padronizarDia(input.value)}
        : diaEditado = {...dia, [input.id]: input.value}

    return diaEditado
}

export const inputs = (dia) => {

    const $paiInputs = criarInput(dia)

    colocarNaAba($paiInputs, "#abaDetalhes")
 
    const $valor = document.querySelector("#valor")
    $valor.focus()

    // listaDeInputs.forEach((input) => {

    //     input.addEventListener("blur", (e) => {
    //         let diaEditado = editarInfo(dia, e.target)
    //         atualizarAba(diaEditado)
    //     })
    // })

}