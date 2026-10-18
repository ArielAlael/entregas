import { colocarNaAba, gerarElementoDOM } from "../auxiliares/padronizacao.js"

    const iconCheck =
    `
        <svg class="icon" style="fill: #00ff00; xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
            <path d="m18.214,9.098c.387.394.381,1.027-.014,1.414l-4.426,4.345c-.783.768-1.791,1.151-2.8,1.151-.998,0-1.996-.376-2.776-1.129l-1.899-1.867c-.394-.387-.399-1.02-.012-1.414.386-.395,1.021-.4,1.414-.012l1.893,1.861c.776.75,2.001.746,2.781-.018l4.425-4.344c.393-.388,1.024-.381,1.414.013Zm5.786,2.902c0,6.617-5.383,12-12,12S0,18.617,0,12,5.383,0,12,0s12,5.383,12,12Zm-2,0c0-5.514-4.486-10-10-10S2,6.486,2,12s4.486,10,10,10,10-4.486,10-10Z"/>
        </svg>
    ` 

    const iconClose =
    `
        <svg class="icon" style="fill: #ff746d;" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
            <path d="m15.707,9.707l-2.293,2.293,2.293,2.293c.391.391.391,1.023,0,1.414-.195.195-.451.293-.707.293s-.512-.098-.707-.293l-2.293-2.293-2.293,2.293c-.195.195-.451.293-.707.293s-.512-.098-.707-.293c-.391-.391-.391-1.023,0-1.414l2.293-2.293-2.293-2.293c-.391-.391-.391-1.023,0-1.414s1.023-.391,1.414,0l2.293,2.293,2.293-2.293c.391-.391,1.023-.391,1.414,0s.391,1.023,0,1.414Zm8.293,2.293c0,6.617-5.383,12-12,12S0,18.617,0,12,5.383,0,12,0s12,5.383,12,12Zm-2,0c0-5.514-4.486-10-10-10S2,6.486,2,12s4.486,10,10,10,10-4.486,10-10Z"/>
        </svg>
    ` 

    const iconAlert =
    `
    <svg class="icon" style="fill: #9AAEB1;" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
        <path d="m22.536,8.46L15.537,1.459C14.592.515,13.337-.006,12.001-.006s-2.592.521-3.536,1.465L1.466,8.46c-1.949,1.949-1.949,5.12,0,7.069l6.999,7.001c.944.944,2.2,1.465,3.536,1.465s2.591-.521,3.536-1.465l6.999-7.001c.944-.944,1.464-2.199,1.464-3.534s-.52-2.591-1.464-3.535Zm-1.414,5.655l-6.999,7.001c-1.134,1.133-3.11,1.133-4.244,0l-6.999-7.001c-1.169-1.169-1.169-3.072,0-4.241l6.999-7.001c.567-.566,1.32-.879,2.122-.879s1.555.312,2.122.879l6.999,7.001c.566.566.878,1.319.878,2.121s-.312,1.554-.878,2.12Zm-7.622,2.385c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5.672-1.5,1.5-1.5,1.5.672,1.5,1.5Zm-2.5-4v-5.5c0-.553.448-1,1-1s1,.447,1,1v5.5c0,.553-.448,1-1,1s-1-.447-1-1Z"/>
    </svg>
    ` 


export const alerta = (mensagem, tipo="alerta") => {

    let icone = ""
    const tipoTratado = tipo.trim().toLowerCase()

    if (tipoTratado === "alerta") icone = iconAlert
        else if (tipoTratado === "sucesso") icone = iconCheck 
        else if (tipoTratado === "erro") icone = iconClose

    const $listaAlertas = document.querySelector("#alertas")

    const novoElemento = `
        <div class="card-aleta">
            ${ icone }
            <p>${mensagem}</p>
        </div>
    `

    const $cardAlerta = gerarElementoDOM(novoElemento)
    $listaAlertas.appendChild($cardAlerta)

    $cardAlerta.addEventListener("click", () => $cardAlerta.remove())
    
    setTimeout(() => $cardAlerta.remove() , 5000);
    
}