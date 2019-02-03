/*Define uma constante com escopo de bloco*/

//Escopo Global
const  PI = 3.1415
console.log("PI: escopo Global: "+ PI);

{
    console.log("PI: escopo do bloco: "+ PI);
}



/* Podem existir constantes com o mesmo nome desde que estejam em escopos diferentes */

//Escopo Global
const  E = 2.7182;
console.log("E: escopo Global: "+ E);

{   
    const  E = 2.7182818284;
    console.log("E: escopo do bloco: "+ E);
}


/* Por ser uma constante não pode ter seu valor reatribuído, nem mesmo em outro escopo */

const Y = 0.57;
console.log("Y: escopo Global: "+ Y);

// Y = 0.57721 => ERROR

{
    // Y = 0.57721 => ERROR
}

/* Objects definidos como const não podem ser reatribuídos, mas seus valores podem ser alterados, inclusive criados novos valores*/
const OBJ = {
    nome : "Maria",
    idade : 25
}
console.log('OBJ Original: '+ OBJ.nome);

/* 
OBJ = {
    nome : "Maria",
    idade : 25
}  => ERROR  
*/

OBJ.nome = 'José';
OBJ.idade = 30;
OBJ.peso = 67;

console.log('OBJ Modificado: '+ OBJ.nome);

//Em javaScript Arrays são um tipo de objeto com um construtor único 
const ARRAY = [0,1,2,3,4,5];
console.log('ARRAY Original: '+ ARRAY[0]);

// ARRAY = [10,20,30] => ERROR

ARRAY[0] = 10;
ARRAY[1] = 20;
ARRAY[2] = 30;
console.log('ARRAY Modificado: '+ ARRAY[0]);

/* Para deixar um objeto realmente imutável, ele deve ser congelado(freeze)*/

const OBJ2 = {
    nome : "Luzía",
    idade : 12
}
console.log('OBJ2 Original: '+ OBJ2.nome);

Object.freeze(OBJ2);  //Congelando o objeto

OBJ2.nome = "Lucas"; //Não dá erro, mas também não muda o valor
console.log('OBJ2 Original: '+ OBJ2.nome);
