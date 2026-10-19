import { alerta } from "./renderizacao/alerta.js";
import { botaoNovoDia } from "./renderizacao/componentes_aba_painel/botaoNovoDia.js";
import { renderizarAbaDetalhes } from "./renderizacao/renderizarAbaDetalhes.js";
import { renderizarAbaPainel, } from "./renderizacao/renderizarAbaPainel.js";

renderizarAbaPainel()
// renderizarAbaDetalhes()

// 1. Adiciona um novo estado no histórico para "prender" o usuário na página atual
window.history.pushState({ page: 1 }, "", "");

// 2. Escuta o evento do botão de voltar
window.addEventListener('popstate', function(event) {
    // O botão de voltar foi pressionado!
    renderizarAbaPainel()
    
    // Se quiser impedir que ele saia e mantê-lo na página, adicione o estado novamente:
    window.history.pushState({ page: 1 }, "", "");
});
 