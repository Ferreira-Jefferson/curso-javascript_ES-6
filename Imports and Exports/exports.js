// Permite importar variáveis, funções, classes e métodos para outros lugares
// Tudo que é declarado em um môdulo é restrito a ele e só pode ser  acessado caso seja exportado
// Possui como principal característica ser exportado em STRICT MODE
// Possui três formas de exportação, nomeada (nomed), padrão (default) e mista (nomed and default)

// Exportação nomeada  => indicada para quando vc quer deixar apenas uma "coisa" do môdulo visível e o restante privado
    // export nomed na declaração
export function soma (a, b) {
    return a + b;
} 

export const MAX = 1000
export let name = "Nomed"

    // nomed export após a declaração
function multiplicacao(a, b){
    return a * b;
}

pot = (a, b) => {
    if(b == 0)
        return 1;
    return a * pot(a, b-1);
}

const PI = 3.1415

export { multiplicacao as mult, pot, PI }  // atente-se às chaves {} e ao uso do ´as´ para dar um alias(apelido) ao que será importado


// Exportação padrão  ==> Indicada para quando queremos disponibilizar valores primários e mais importantes, geralmente funções e classes, 
// ...para definir se algo deve ser exportado como default pode-se pensar em: Qual é a "Coisa" mais importante deste môdulo, quem é a razão deste môdulo existir?
// SÓ PODE EXISTIR UMA EXPORTAÇÂO PADRAO NO MÔDULO

    // export defalt na declaração
function promessa(color){
    return new Promise((res, req) => {
        setTimeout(() => {
            if(color.toLowerCase() == 'red')
                return res(color);
            else if( color == 'blue')
                return res( color )
            else
                return req(`Color ${color} rejected!`);
        }, 3000)
    })
}
export default class Carro {   // Essa é com certeza a "coisa" mais importante do môdulo
    constructor(marca, modelo, cor){
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;   
    }      
}


    // export default após a declaração
const API_KEY = 'k3jkdfsakh3424l124l124l24b2b3';

export default API_KEY


// Exportação Mista
// Se dá quando utilizamos tanto a export nomed quanto a export default no mesmo môdulo

    // Na declaração
export const MAX = 1e9
export default function pi(){
    console.log('3.1415....');
}

    // Após a declaração
let casa = 'Rua das flores - 54';
minhaCasa = () => casa;

export { casa }
export default minhaCasa;

    // Mista raíz
let ola = 'Olá';
let padrao = () => `${ola} Mundo!`

export { padrao as default, ola }