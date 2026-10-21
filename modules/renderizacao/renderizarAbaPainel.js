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

    window.history.pushState({ page: 1 }, "", "");

    // 2. Escuta o evento do botão de voltar
    window.addEventListener('popstate', function(event) {
        // O botão de voltar foi pressionado!
        renderizarAbaPainel()
        
        // Se quiser impedir que ele saia e mantê-lo na página, adicione o estado novamente:
        window.history.pushState({ page: 1 }, "", "");
    });

}