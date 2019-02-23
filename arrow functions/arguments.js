// Arrow Functions não possue acesso aos arguments passados

// Function Tradicional
var soma = function() {
    let soma = 0;
    for(let i=0; i < arguments.length; i++) {
        soma += arguments[i];
    }
    console.log('Tradicional: '+ soma);
}
soma(1, 2, 3) // Tradicional: 6

// Arrow Functions
var somaArrow = () => {
    let soma = 0;
    for(let i=0; i < arguments.length; i++) {
        soma += arguments[i];
    }
    console.log('Arrow: '+ soma);
}
somaArrow(1, 2, 3) // Uncaught ReferenceError: arguments is not defined

// Este problema da Arrow Function não possuir o arguments pode ser resolvido utilizando outra feature do ECMA, a Rest Parameters
var somaArrowRest = (...arguments) => {
    let soma = 0;
    for(let i=0; i < arguments.length; i++) {
        soma += arguments[i];
    }
    console.log('Arrow Rest: '+ soma);
}
somaArrowRest(1, 2, 3) // Arrow Rest: 6