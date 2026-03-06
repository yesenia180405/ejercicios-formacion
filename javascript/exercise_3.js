// Comparaciones con booleanos
console.log(false + false); //De resultado daría 0 (false)
console.log(false + true); //De resultado daría 1 (true)
console.log(true + true); //De resultado daría 2

// Comparaciones con arrays
console.log([] === []); //El resultado seria false ya que se estan comparando objetos por referencia
console.log([] + []); //Esto daría un conjunto vacío y js lo convierte en string
console.log([1, 2] + [3, 4]); // Esto retornaría la uni´n de ambos elementos del conjunto 1,2 3,4
console.log([1] + 1); //Al unir un número con un array se concatena y el resultado sería 11
console.log([1] - 1); //JS al no ser un lenguaje tipado convierte el [1] en un número y el resultado sería 0

// Comparaciones con objetos
// console.log({} + {}); //Al ser objetos debería devolver dos objetos
// console.log({} === {}); //Al igual que el caso pasado con [], la comparación es false
// console.log([] === {}); // De igual forma la comparaación de objetos refenciados es false

// Comparaciones especiales
console.log(null + 1); //El resultado seria el valor en este caso 1
console.log(undefined + 1); // Al sumar un valor indefinido con un Number debería devolver un NaN
console.log(null == 0); //El resultado sería false no es lo mismo un valor nulo(vacio) a un 0
console.log(null <= 0); // El resultado sería true ya que el cero con el hecho de ser un número ya es mayor a nulo
console.log(undefined == null); // En este caso tendría dudas así que no podría decir con certeza el resultado

// Operaciones con NaN
console.log(NaN + 1); //De resultado debería dar un NaN
console.log(NaN == NaN); // De resultado debería dar false ya que NaN no es igual a nada, ni a sí mismo
console.log(NaN === NaN); //Al igual que el caso anterior sería false