// Pelo que entendi...tenho que estudar mais, o Method Properties permite definir métodos em um objeto sem que eles sejam de fato implementados ou possíveis de ser utilizados
// Entretanto após ser declarado ele pode ser sobrescrito e a partir disso funcionar como um método de fato...é como um protótipo de função

// Declaração: sua declaração é feita por meio do asterisco * no início do nome do método
obj = {
    foo (a, b) {
        return a+b;
    },
    bar (x, y) {
        return x + y
    },
    *quux (x, y) {
        return x + y
    },
    *ziix (x, y) {}
};

obj.quux(2, 3) // quux {<suspended>}
obj.ziix() // ziix {<suspended>}

// Atribuindo uma função ao 'protótipo da função'
//Com Arrow Function
obj.ziix = (a, b) => a + b; /* obj.ziix(1, 2) = 3  */

// Anonymous Function
obj.quux = function (a, b){ return a + b }  /* obj.quux(1, 2) = 3  */

// Function Declaration
obj.ziix = function soma(a, b){ return a + b } /* obj.ziix(1, 2) = 3  */

//Function Expression
obj.quux = soma =  function (a, b){ return a + b }  /* obj.quux(1, 2) = 3  */

// A real utilidade desta feature, eu hoje 07/03/2018 não sei e não achei conteúdo na internet explicando