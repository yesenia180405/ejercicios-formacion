const user = {
  name: "Álvaro",
  last: "Morón",
  age: 30,
  nationality: "Morocco",
};
const user2 = {
  name: "Eric",
  last: "Balasel",
  age: 30,
  nationality: "Rumania",
};

function findAnimal() {
  return "E animal es un perro";
}
const myMap = new Map();

myMap.set("moroso", user);
myMap.set("agarrado", user);
myMap.set("generoso", user2);
myMap.set("funcion", findAnimal());
myMap.set("color", "color");

//Mostrar por consola todo el map
console.log("\n Mostrar todo el map");
console.log(myMap);

// Mostrar por consola el key moroso
console.log("\n Mostrar todo el key moroso");
console.log(myMap.get("moroso"));

// Comprueba si existe la key hola
console.log("\n Mostrar si existe la key hola"); 
console.log(myMap.has("hola"));

// Muestra por consola el tamaño total del map
console.log("\n Mostrar el tamaño del map"); 
console.log(myMap.size);

// Recorre el map con un forEach
console.log("\n Mostrar por un foreach");
myMap.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

// Elimina el elemento agarrado del map
console.log("\n Borrar un elemento");
myMap.delete("moroso");
console.log(myMap);

// Limpia el mapa por completo
console.log("\n Borrar todo el map"); 
myMap.clear();
console.log(myMap);