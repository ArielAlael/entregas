import { calcularListrosGastos, calcularMediaEntregas, calcularMediaKm, colocarNaAba, gerarElementoDOM, padronizarDia } from "../../auxiliares/padronizacao.js"
import { data } from "../../../data/data.js"
import { editarDia } from "./botaoSalvar.js"
import { alerta } from "../alerta.js"

const criarInput = ({dia, valor, entregas, quilometragem}) => {

    const novoElementoEditavel = 
    `
    <div class="informacoes">
        <div class="div-info">
            <label for="dia">Dia</label>
            <input class="info" id="dia" type="date" value="${padronizarDia(dia)}">
        </div>
    
        <div class="div-info">
            <label for="valor">Valor</label>
            <input placeholder="—" class="info" id="valor" type="number" value="${valor}">
        </div>

        <div class="div-info">
            <label for="entregas">Entregas</label>
            <input placeholder="—" class="info" id="entregas" type="number" value="${entregas}">
        </div>

        <div class="div-info">
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

export const validarDados = (info, tipo="texto") => {

    let config = ""

    if (tipo === "texto") config = !isNaN(Number(info))
        else if(tipo === "numero") config = isNaN(Number(info)) || Number(info) < 0
    

    if (info === "" || info === null || config) {
        return true
    }
    
}

const validarInputs = ($paiInputs) => {

    const listaInfo = document.querySelectorAll(".div-info")

    listaInfo.forEach(($elemento) => {

        if (($elemento.children[0].innerText.toLowerCase() === "dia")) {

            $elemento.addEventListener("focusout", (e) => {

                const valorElemento = e.target.value
                const p = document.createElement("p") 
                
                if (validarDados(valorElemento)) {
                    if ($elemento.children[2]) $elemento.children[2].remove()
                    $elemento.appendChild(p)
                    $elemento.classList.add("erro")
                    p.textContent = `${$elemento.children[0].innerText} nao pode ser igual ou menor que 0`
                } else {
                    $elemento.classList.remove("erro")
                    if ($elemento.children[2]) $elemento.children[2].remove()
                }
            })

        } else {

            $elemento.addEventListener("focusout", (e) => {

                const valorElemento = e.target.value
                const p = document.createElement("p") 

                if (validarDados(valorElemento, "numero")) {
                    if ($elemento.children[2]) $elemento.children[2].remove()
                    $elemento.appendChild(p)
                    $elemento.classList.add("erro")
                    p.textContent = `${$elemento.children[0].innerText} nao pode ser igual ou menor que 0`
                } else if ($elemento.children[2]) {
                    $elemento.classList.remove("erro")
                    if ($elemento.children[2]) $elemento.children[2].remove()
                }

            })

        }

    })

}

export const inputs = (dia) => {

    const $paiInputs = criarInput(dia)
    colocarNaAba($paiInputs, "#abaDetalhes")

    const $valor = document.querySelector("#valor")
    const $quilometragem = document.querySelector("#quilometragem")

    validarInputs($paiInputs)

    const todosIds = data.map(({id}) => id)

    if (!todosIds.includes(dia.id)) $valor.focus()

    $quilometragem.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.keyCode === 13) editarDia(dia)
    })

}