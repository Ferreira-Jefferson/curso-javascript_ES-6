/*Permite ler a string de forma bruta, sem interpretar os caracteres de escape.
 Isto abre uma grande vantagem para a criação de expressões regulares e inserção de caminhos do computador, permitindo que sejam escritas de forma mais clara 
 Permite também interpolar strings e variáveis de maneira contrária ao Tagged Template */

//Ignorando caracteres de escape
let ignorando = String.raw`Hi\n ${2+3}\t${"casa"}\0`;
console.log(ignorando);

 // Raw Strings para caminhos do computador
 var tradicional_errada = "C:\Development\profile\aboutme.html"
 console.log(tradicional_errada) // C:Developmentprofileaboutme.html

 var tradicional_certa = "C:\\Development\\profile\\aboutme.html"
 console.log(tradicional_certa) // C:\Development\profile\aboutme.html

 var rawStr = String.raw`C:\Development\profile\aboutme.html`;
 console.log(rawStr) // C:\Development\profile\aboutme.html


 // Tagged Template reverse (não sei o nome real dessa operação)
 /**
  * raw é uma key do metodo/objeto String.raw() que recebe as strings 
  * em seguida vem as variáveis e expressões que serão unidas
  */
 // Comuma única String
 let simple = String.raw({raw: 'UNICA'}, 1, 2, 1+2, (()=>2*2)());
 console.log(simple) // U1N2I3C4A

 // Com um array de Strings
let composta = String.raw({raw: ['um = ', ' dois = ', '']}, 1, 2);
console.log(composta) // um = 1 dois = 2