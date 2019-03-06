// Permite identificar quais são exatamente as strings e as expressões que estão sendo passadas em um Template Literal
/**
 * O primeiro valor é um array apenas com as strings, o restante são as expressões, estas vem separadas, mas podem ser unidadas usando o Rest Paramenters
 * Cada frase ou palavra que aparece antes de uma expression language, fica em um único índice do array caso o Template Literal possua Enters o '\n' também será incorporado à string
 */

 // Forma Simples
 function tagged(strings, exp1, exp2, exp3){
     console.log(strings); // [ 'Uma frase ', ' você. Aqui mais ', '. E por fim ', '' ] ==> É importante ressaltar que toda frase antes da interpolação fica em uma única posição do array e não cada palavra em uma posição 
     console.log(exp1);    // 4
     console.log(exp2);    // UMA-VARIÁVEL
     console.log(exp3);    // [Function: fun]
     console.log(exp3());  // UMA-VARIÁVEL3
 }
let uma = "UMA-VARIÁVEL";

tagged`Uma frase ${2+2} você. Aqui mais ${uma}. E por fim ${fun = ()=> uma+3}`; 

// Atribuindo retorno a uma variável 
function atrRet(strings, exp1){
    return strings[0] + exp1 + strings[1];
}

let varQueRecebe = atrRet`1${10+10}3`;
console.log(varQueRecebe) // 1203


// Utilizando Rest Parameters
function comRest(str, ...expres) {
    return str[0] + expres.reduce((count, value) => count + value);
}
var um = 10;
var dois = 20;
var tres = 30;
 
let pegaReturn = comRest`Soma: ${um} + ${dois} + ${tres} = ${um+dois+tres}`;

console.log(pegaReturn) // Soma: 120

// Expression Languege with Enter
function withEnter(str, value) {
    console.log(str[0]);   `<div>
                            <p>`
    console.log(str[1]);    `</p>
                             </div>`
    console.log(str);      //[ '<div>\n<p>', '</p>\n</div>' ]

    console.log(value) // Olá mundo!
}

withEnter`<div>
<p>${"Olá mundo!"}</p>
</div>`