import { botaoNovoDia } from "./componentes_aba_painel/botaoNovoDia.js"
import { dias } from "./componentes_aba_painel/dias.js"
import { painel } from "./componentes_aba_painel/painelPrincipal.js"
import { limparAbaDetalhes, limparAbaPainel } from "./limparRenderizacao.js"


export const renderizarAbaPainel = () => {
    limparAbaPainel()
    limparAbaDetalhes()
    painel()
    dias()
    botaoNovoDia()
}