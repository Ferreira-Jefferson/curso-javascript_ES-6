// Defalut Parameter permite que sejam declarados valores para os parâmetros das funções

// Apenas Rest Parameters
function soma(value = 20){
    return value;
}
soma() // 20
soma('DEZ') // DEZ
soma(undefined) // 20
soma(null) // null

// Um Parâmetro simples e Rest Parameters
function calc(param1, param2 = 20){
    return param1 + param2;
}
calc(10) // 30
calc(10, 10) // 20
calc(10, undefined) // 30
calc(10, null) // 10

// Apenas Rest Parameters
function adicao(param1 = 5, param2 = 20){
    return param1 + param2;
}
adicao(10) // 30
adicao(30, 30) // 60
adicao(undefined, 10) // 15
adicao(undefined, undefined) // 25
adicao(null, 10) // 10
adicao(null, null) // 0 
