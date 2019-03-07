// Property Shorthand: Sintaxe mais curta para a definição de propriedade de objetos com nome similares

// Traditional declaration
var x = 0, y = 0;
obj1 = { x: x, y: y }

// Property Shorthand
var x2 = 0, y2 = 0
obj2 = { x2, y2 }

// declaração de funções
function soma(a, b) {
    return a + b;
}

mult = (a, b) => a * b;

const myFunctions = { soma, mult};

// Juntando tudo
const all = {obj1, obj2, myFunctions}