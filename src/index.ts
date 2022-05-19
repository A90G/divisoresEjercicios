
let num1: number = Number(prompt("ingrese un numero entero para buscar cantidad de divisores"));
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

console.log ("El numero" , num1, "tiene", numDeDivisores, "divisores");


/*necesito hacer prueba de escritorio*/


