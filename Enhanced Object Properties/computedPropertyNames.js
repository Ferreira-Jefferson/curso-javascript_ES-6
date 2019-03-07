// Computed Property Names: Permite definir o nome de uma propriedade de um objeto com base no retorno de uma função.

// Diretamente na criação de um objeto
function dois(){ return 2; };

var obj = {
    dois,  // Property Shorthand
    "tres" : 3,
    [dois() + '+2'] : 4,
    [dois() + obj.tres] : 23
}

obj.dois() // 2
obj.tres() // 3
obj["2+2"] // 4   ==> Variáveis não podem ter nomes que começam ou sejam números
obj[5]     // 23  ==> Variáveis não podem ter nomes que começam ou sejam números

// Após a criação do Objeto
casa = () => "quartos: 4, cozinha: 1";
obj[casa()] = "Rua das Laranjeiras";
obj["quartos: 4, cozinha: 1"]  // Rua das Laranjeiras  ...// Sempre que há espaço se invoca o valor utilizando conchetes[]

cama = (model) => model
obj[cama("Box")] = "R$ 50,00"
obj.Box // R$ 50,00

carro = (car) => car
obj[carro("Fucas") + "Azul"] = "R$ 200,00"
obj.FuscaAzul// R$ 200,00

