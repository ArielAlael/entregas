import { gerarElementoDOM } from "../auxiliares/padronizacao.js"

export const criarElementoBotao = (descricao) => {

    const novoElemento = `<a class="botao">${descricao}</a>`
    const elemento = gerarElementoDOM(novoElemento)

    return elemento

} 



