import { botaoNovoDia } from "./componentes_aba_painel/botaoNovoDia.js"
import { dias } from "./componentes_aba_painel/dias.js"
import { painel } from "./componentes_aba_painel/painelPrincipal.js"
import { limparAbaDetalhes } from "./limparRenderizacao.js"


export const renderizarAbaPainel = () => {
    limparAbaDetalhes()
    painel()
    dias()
    botaoNovoDia()
}