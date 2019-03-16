// Permite importar môdulos ou apenas o que for permitido importar de um môdulo

 // importando tudo  ==> esta declaração funciona apenas para Exportação Nomed OU Default ...não funciona em Exportação Mixed(mista)
import * as soma from'./modulos/soma' // o asterisco * informa que será importado tudo, o `as` informa que tudo que houver no môdulo irá para o objeto  'soma' e deverá ser acessado por ele, outra coisa importante é que não é necessário informar a extensão .js


// Importando tudo mas separando o default ==> Para exportações Mixed(mista)
import defaultExport, * as sub from  './modulos/sub'


// Importando Default
import subtracao2 from './modulos/sub'

// importatando nomeadas
import { subtracao1, subtracao3 } from './modulos/sub'  // Repare na obrigatoriedade das chaves{}

// Importando e mudando o nome
// Somente exportações padrão podem receber um alias diretamente, Nomed somente quando importadas pelo asterisco *

    // Importando somente o padrão
import { subtracao2 as sub } from './modulos/sub' // para mudar o nome padrão ele deve ser invocado entre chaves {}

    // Importando padrão com os demais valores exportados
import { subtracao2 as sub, subtracao1, subtracao3} from './modulos/sub'

    // Importando Nomeadas (elas já são nomeadas...)
import { soma as sum } from'./modulos/soma' // Erro ou mesmo se não der erro a sintase está errada

    // Importando todas as nomeadas e mudando o nome pelo qual elas serão chamadas
import * as sub from './modulos/sub'

// Função import()...importando dinâmicamente
// A palavra-chave import pode ser chamada como uma função para importar dinamicamente um módulo. Quando usado dessa maneira, retorna uma promessa.
let soma = await import('./modules/soma.js'); // o await pede que expere a resposta da promessa para só então atribuir à variável