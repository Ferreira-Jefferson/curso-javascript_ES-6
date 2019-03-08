// Object And Array Matching, Default Values: permite aplicar o Destructuring Assignment e caso o valor não seja preenchido a variável recebe um valor padrão

var obj = { a: 1 }
var list = [ 10 ]
var { a, b = 2 } = obj
var [ x, y = 20 ] = list
console.log(`${a}, ${b}, ${x}, ${y}`) // 1, 2, 10, 20

// Fail-Soft Destructuring ==> Provocar a falha de um descructuring propositalmente
var list = [ 7, 42 ]
var [ a = 1, b = 2, c = 3, d ] = list
console.log(`${a}, ${b}, ${c}, ${d}`) // 7, 42, 3, undefined

// Parameter Context Matching : Permite aplicar todos os conceitos do destructuring nos parâmetros de funções
function f ([ name, val ]) {
    console.log(name, val)  // bar 42
}
function g ({ name: n, val: v }) {
    console.log(n, v)  // foo 7
}
function h ({ name, val }) {
    console.log(name, val)  // bar 42
}
f([ "bar", 42 ])
g({ name: "foo", val:  7 })
h({ name: "bar", val: 42 })