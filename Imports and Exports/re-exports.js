// Re-export é uma maneira simples, direta e intuitiva de importar e exportar funcionalidades de diferentess môdulos
/* 
* Muito utilizado quando:
*   Não se deseja que o môdulo original seja acessado
*   Quer centralizar o que será exportado
*   Quer centralizar o que poderá ser acessado externamente
*   Quando quer se exportar uma Nomed com outro nome
*/

// Reexportando Nomeds

    // Reexportando individualmente
export { soma1, soma2, soma3, some4, soma5 } from './modulos/soma' 

    // Reexportando tudo de uma vez
export * from './modulos/soma'  // import * as soma from 'caminho/re-exports'

    // Reexportando uma Nomed com outro nome
export { soma1 as sumOne } from './modulos/soma' // Isto pode ocorrer

// Reexportando Default
export { default } from './modulos/sub' // Sempre que for reexportar o Padrão é necessário deixar explícito

export { default as Padrao } from './modulos/sub' // pode-se usar alias sempre respeitando a explícitação do default 

// Reexportação Mixed ==> Para reexportar tudo, duas declarações serão necessárias:
export * from './modulos/sub' // Reexporta do Nomed

export { default as Padrao } from './modulos/sub'  // Reexporta do Default 
