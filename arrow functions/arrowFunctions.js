// Arrow Functions são definidades pelo sinal de Igual '=' seguido pelo sinal de Maior Que '>', resultando em uma "Flexa" '=>'

/* Parâmetros */
// Sem parâmetro : Obrigatório o uso de parenteses
() => { }

// Com um parâmetro : Não é obrigatório o uso de parenteses 
a => { }

// Com mais de um pâmetro : Obrigatório o uso de parenteses
(a, b) => { }

/* Corpo */
// Uma Linha : Não é obrigatório o uso de chaves
() => a + b;

//Mais de uma Linha : Obrigatório o uso de chaves
/* Obs: a LINHA citada se dá pelo ponto-e-vírgula ou pela quantidade de comandos distintos, 
ou seja mesmo se os comandos estiverem na mesma linha do arquivo, se tiverem duas linha de comandos já é obrigatório o uso de {}
*/
() => {
    var soma = a + b
    console.log("Resultado: "+ soma);
}

/* Retorno */
//Quando não é utilizado chaves deve-se omitir o return 
// () => return a + b; Uncaught SyntaxError: Unexpected token return
() => a + b;

// Uma linha com return : Obrigatório o uso de chaves
() => { return a + b };

// Quando a Arrow Function é definida com chaves ela não faz o return automaticamente
() => { a + b }; // undefined

// Mais de uma linha com return : Obrigatório o uso de chaves
() => {
    soma = a + b;
    return soma;
}


// Escopo
var a = 10;
let b = 20;
const c = 30;
function D(){ return 40 };
E = () => 50;

// Quando a Arrow Function é definida sem as chaves ela tem acesso a todos os objetos dos escopos externos, sejameles defonidos como var, let, const, functions...todos.
Arrow = () => a + b + c + D() + E();
console.log(Arrow()) // 150

// Quando a Arrow Function é definida com chaves ela não tem acesso direto aos objetos definidos fora de seu escopo
Arrow2 = () => { a + b + c + D() + E() };
console.log(Arrow2()) // undefined