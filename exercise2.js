//Que devuelve por consola cada uno de los siguientes console.log

//Devuelve por consola 'undefined' debido a que es una variable de tipo var
console.log(a);
var a = "hola";

//En este caso al ser una variable de tipo let la consola lanza un error de referencia
 console.log(b);
 let b = "hola";

// De igual forma a caso anterior al hacer un llamdo antes de la declaracion causa un error de referencia
 console.log(c);
 const c = "hola";

//En este caso la en la consola se puede visualizar el mensaje que se ha definido en la función, ya que apesar de 
// haber sido llamada antes la declaración de la función, la función tiene un hoisting más alto
sayHi();
function sayHi() {
  console.log("Hola desde sayHi!");
} 

//
function sayBye() {
  console.log("Adios desde sayBye!");
}

sayBye();


