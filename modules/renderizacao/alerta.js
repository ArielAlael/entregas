import { gerarElementoDOM } from "../auxiliares/padronizacao.js"

export const alerta = (mensagem) => {

    const $listaAlertas = document.querySelector("#alertas")

    const novoElemento = `
        <div class="card-aleta">
            <p>${mensagem}</p>
        </div>
    `

    const $cardAlerta = gerarElementoDOM(novoElemento)
    $listaAlertas.appendChild($cardAlerta)

    $cardAlerta.addEventListener("click", () => $cardAlerta.remove())
    
    setTimeout(() => $cardAlerta.remove() , 5000);

    
}