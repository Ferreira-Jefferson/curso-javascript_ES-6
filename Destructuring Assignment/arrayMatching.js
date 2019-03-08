// Array Matching : Permite desestruturar um array em variáveis de forma simples e intuitiva

// Distribuntindo valores uniformemente
let arr1 = [1, 2, 3, 4]

let [a, b, c, d] = arr1
console.log(`${a}, ${b}, ${c}, ${d}`) // 1, 2, 3, 4


// Distribuindo valores de forma aleatória
const [x,,y] = arr1
console.log(`${x}, ${y}`) // 1, 3

// Pegando returno de função
function arrayFun() {
    return [10, 20, 30];
}

let [D, , T] = arrayFun()
console.log(`${D}, ${T}`) // 10, 30

// Distribuindo funções...pq não? isso é javaScript!
let arrFunc = [function(){return 2 + 2},()=>3+5,function euSou(nome){return nome}, (a, b)=> a+b]
let [quatro, oito, euSou, soma] = arrFunc
console.log(quatro())  // 4
console.log(oito())  // 8
console.log(euSou('Jefferson')) // Jefferson
console.log(soma(5, 7))  // 12

// Troca de valores: feature muito, muito útil
var a=10, b=20;
console.log(a, b) // 10 20

[ b, a ] = [ a, b ]
console.log(a, b) // 20 10
