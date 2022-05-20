//funciona bien, pero no me cuenta el mismo número como divisor o el cero entoces me tira siempre un número menos que la pureba de escritorio.
let num1: number = Number(prompt("ingrese un numero entero para buscar cantidad de divisores"));
let num2 = 1;


function esMultiplo( num1: number , num2: number): boolean {
  return ((num1 % num2 )=== 0);}
  esMultiplo (num1, num2);

function cantidadDeDivisores (num1: number) {
  let cantidad: number = 0;
for (let num2 = 0; num2 < num1; num2++) {
  if (esMultiplo (num1, num2)){
   cantidad++
  }
}
return cantidad;
}
let numDeDivisores: number = cantidadDeDivisores(num1, num2);

console.log ("El numero" , num1, "tiene", numDeDivisores, "divisores");

//24 tiene 8 divisores: 24 - 12 - 8 - 6- 4- 3- 2- 1- 
//50 tiene 6 divisores: 50- 25- 10- 5- 2- 1-
//30 tiene 8 divisores: 30- 15- 10- 6- 5- 3- 2- 1- 

/*let num1: number = Number(prompt("ingrese un numero entero para buscar cantidad de divisores"));
let num2: number = Number(prompt("ingrese un segundo numero entero como divisor"));


function esMultiplo( num1: number , num2: number): boolean {
  return ((num1 % num2 )=== 0);}
  esMultiplo (num1, num2);

function cantidadDeDivisores (num1: number) {
  let cantidad: number = 0;
for (let num2 = 0; num2 < num1; num2++) {
  if (esMultiplo (num1, num2)){
   cantidad++
  }
}
return cantidad;
}
let numDeDivisores: number = cantidadDeDivisores(num1, num2);

console.log ("El numero" , num1, "tiene", numDeDivisores, "divisores");*/

