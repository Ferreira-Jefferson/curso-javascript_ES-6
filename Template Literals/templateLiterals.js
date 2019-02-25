/* Template Literal nos permite escrever estrings de forma mais clara e direta, 
tendo como principal característicar permitir  pular linhas sem que quebre a string.
A Template String é definida sempre entre crases ( ` ` ) */

// Template Literal Simples
let txt = `Hellow World!`;

// Template Literal pulando linha
let pula = `Olá
SubMundo!
`;

// As templates estrings nos permite criar "Templates" de forma mais simples e elegante
let template = `
<input type="range"></input>
<input type="text"></input>
<button>Salvar</button>
`
document.body.innerHTML = template;


/**
 *  Uma outra feature da Template Literal que traz diversas vantagens é a String Interpolation.
 *  Ela nos permite interpolar Expressões dentro das Tempates Strings.
 *  Ela é definida pelo cifrão seguido de chaves e a Expressão dentro destas chaves ==> ${expressão}
 */

 // Interpolação simples
 let simples = `Soma = ${10}`; // Soma = 10

// Interpolação com variáveis
let  = 20;
let comVar = `Soma = ${comVar}`; // Soma = 20;

// Interpolação com funções
function soma(a, b){
    return a + b;
}

let result = `Soma = ${soma(simples, comVar)}` // Soma = 30;

// Definindo Funções Dentro da Interpolação : É importante destacar que somente Arrow Functions funcionam com este tipo de declaração
// Esta Feature tem grande utilidade na implementação de Tagged Templates
let defFun = `Nova Função: arrowFun = ${arrowFun = (a, b) => a + b}`;  // Nova Função: arrowFun = (a, b) => a + b
arrowFun(2, 3) // 5