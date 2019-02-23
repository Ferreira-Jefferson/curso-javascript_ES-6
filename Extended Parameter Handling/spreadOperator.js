/* Spread Operator, permite transformar strings em arrays e também pegar os dados de arrays sem precisar iteralos.
O Spread Operator é definido pelas reticências(...) em frente á variável que se deseja 'Espalhar'...o Spread deve sempre  ser definido dentro de conchetes [], ficando : [...variável]
*/

// Espalhando Strings
let str = "Uma String";
let spreadStr = [...str] // ["U", "m", "a", " ", "S", "t", "r", "i", "n", "g"]

// Espalhando Arrays : Apesar de aparentar vantagens neste exemplo o próximo exemplo mostrará as vantagens que o Spreed fornece
let arr = [1, 2, 3];
let spreadArr = [...arr]; // [1, 2, 3]

// Espalhando Arrays dentro de outro Array
let arr1 = [1, 2, 3];
let arr2 = ['a', 'b', ...arr1]; // ["a", "b", 1, 2, 3]
let semSpread = ['a', 'b', arr1] // ["a", "b", Array(3)] ==> ["a", "b", [1, 2, 3]]

// Passando Spreed para funções
let sprFun = [1, 2, 3];

function spr(a, b, c){
    return a + b + c;
}

spr(...sprFun); // 6

// Spreed Operator com Rest Parameters
let sprRes = [1, 2, 3];

function sprRest(...rest){
    return rest[0] + rest[1] + rest[2];
}

sprRest(...sprRes); // 6