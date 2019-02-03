/* Possui escopo de bloco */

// Escopo global
let num = 22;
console.log("num: escopo Global: "+ num);

{
    /**
     * O escopo de bloco, pode ser de uma function(), uma condição, um loop ou como no exemplo apenas duas {}
     * funtion(){ Escopo da função };
     * if(i > 0) { Escopo da condição }
     * while(i) { Escopo do loop }
     */
    console.log("num: escopo do bloco: "+ num);
}



/* Podem existir variável com o mesmo nome desde que estejam em escopos diferentes, sendo que a definida no escopo em questão é a única que existe*/

//Escopo global
let nome = "Maria";
console.log("nome: escopo Global: "+ nome);

// let nome = "José" => ERROR

{
    let nome = "José" //Permitido
    console.log("nome: escopo do bloco: "+ nome);
}

console.log("nome: escopo Global: "+ nome); //José só existe no escopo do bloco