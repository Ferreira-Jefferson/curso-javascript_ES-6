// Object Matching: Forma simples de passar valores de um objeto para uma variável ou para outros objetos
// A notação exige que as variáveis e o objeto estejam ente parênteses()
// Esta notação exige que os nomes das variáveis devam ser iguais (Shorthand)


// Shorthand Notation
var objShotNotation = {a1: 10, b1: 20, c1: 30}  
({ a1, b1, c1 } = objShotNotation)
console.log(`${a1}, ${b1}, ${c1}`) // 10, 20, 30

// pegando retorno de uma função
function nuns() {
    obj = {a: 1, b: 2, c: 3};
    return obj
}
({a, c} = nuns())
console.log(`${a}, ${c}`) // 1, 3

// Deep Matching ==> Permite pegar objetos de objetos
objDeepMatching = {a: 1, b: {b1: 2, b2: 20}, c:()=>2+2}

({a, b:{b1, b2}, c, b} = objDeepMatching) 
console.log(`${a}, ${b1}, ${b2}, ${c()}, ${b}`) // 1, 2, 20, 4, {b1:2, b2: 20}