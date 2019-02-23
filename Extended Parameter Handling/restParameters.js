// Rest Parameters retorna um array com os valores passados a mais em uma função, ele é definido pelas reticências ( ... )

// Pode ser declarados apenas o Rest
function soma(...numbers){
    let soma=0;
    numbers.forEach(num => {
        soma += num;
    })
        
    return soma;
}
soma(1, 2, 3) // 6

// Pode ter outras váriáveis antes
function mult(value, ...numbers){
    let mult=1;
    numbers.forEach(num => {
        mult *= num;
    })
        
    return mult - value;
}
mult(1, 2, 3) // 5

// Não podem receber Dafault Parameters
function sub(...numbers = 2){
    let sub=0;
    numbers.forEach(num => {
        sub -= num;
    })
        
    return sub;
}  // Uncaught SyntaxError: Rest parameter may not have a default initializer   

// Deve ser declarado no final
function sub(...numbers, value){
    let sub=0;
    numbers.forEach(num => {
        sub -= num;
    })
        
    return sub + value;
} // Uncaught SyntaxError: Rest parameter must be last formal parameter

//Só pode ter um por função
function calc(...numbers, ...value){
    let sub=0, soma=0;
    numbers.forEach(num => {
        sub -= num;
    })
    value.forEach(num => {
        soma += num;
    })
        
    return sub + soma;
} // Uncaught SyntaxError: Rest parameter must be last formal parameter