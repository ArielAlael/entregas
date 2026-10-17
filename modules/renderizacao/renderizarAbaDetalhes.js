import { buscarDia } from "../auxiliares/padronizacao.js"
import { botaoSalvar } from "./componentes_aba_detalhes/botaoSalvar.js"
import { inputs } from "./componentes_aba_detalhes/informacoes.js"
import { painelDetalhe } from "./componentes_aba_detalhes/painelDetalhes.js"
import { voltar } from "./componentes_aba_detalhes/voltar.js"
import { limparAbaPainel } from "./limparRenderizacao.js"

export const renderizarAbaDetalhes = (dia) => {
    limparAbaPainel()
    voltar()
    painelDetalhe(dia)
    inputs(dia)
    botaoSalvar(dia)
    return
}