import { colocarNaAba, gerarElementoDOM } from "../../auxiliares/padronizacao.js"
import { renderizarAbaPainel } from "../renderizarAbaPainel.js"

export const voltar = () => {

    const novoElemento = `<a class="voltar">< Voltar</a>`
    const $elemento = gerarElementoDOM(novoElemento)

    $elemento.addEventListener("click", () => renderizarAbaPainel())

    colocarNaAba($elemento, "#abaDetalhes")

}