// O this das Arrow Functions possui o chamado escopo léxico, ou seja, leva em consideração o contexto externo de onde ele está sendo utilizado


var html = `
<h3>Não Usar</h3>
    <button id="btn1">Click Btn1</button>
    <button id="btn2">Click Btn2</button>

<h3 style="margin-top: 25px;">Usar</h3>
    <button id="btn3">Click Btn1</button>
    <button id="btn4">Click Btn2</button>
    <h5></h5>
`
 document.body.innerHTML = html;

 /* Não utilizar pois gera problemas*/
 let $btn1 = document.querySelector('#btn1');
 let $btn2 = document.querySelector('#btn2');

 $btn1.addEventListener('click', () => {
     this.innerText = 'Arrow Function';  // Não muda texto do button
     console.log(this); // Window
 });

 $btn2.addEventListener('click', function(){
     this.innerText = 'Tradicional Function'; // Muda texto do button
     console.log(this); // button
 });

 /* Não gera problemas */
 let $btn3 = document.querySelector('#btn3');
 let $btn4 = document.querySelector('#btn4');
 var $h5 = document.querySelector('h5');

 function CarroArrow(){
    this.marca = 'Fiat';
    this.mostraMarca = () => {
        $h5.innerText = this.marca;
        console.log(this);
    }
 }

 function CarroTradicional(){
    this.marca = 'Mercedes';
    this.mostraMarca = function() {
        $h5.innerText = this.marca;
        console.log(this);
    }
 }

$btn3.addEventListener('click', function(){
    let uno = new CarroArrow();
    uno.mostraMarca();
});

$btn4.addEventListener('click', function(){
    let classeA = new CarroTradicional();
    classeA.mostraMarca();
});

// Por conta desta peculiáridade no tratamento do this as Arrow Functions não podem ser utilizadas como Funções Contrutoras...além disso ela não possui prototypes...
ArrowCar = () => {
    this.marca = 'GM';
    this.mostraMarca = () => {
        $h5.innerText = this.marca;
        console.log(this);
    }
}

arrowCar = new ArrowCar();
arrowCar.mostraMarca(); // Uncaught TypeError: ArrowCar is not a constructor