//Primer Código
var usuario = {
  nombre: "Pedro",
  apellido: "Sánchez",
  edad: 45,
  profesion: "Barro man",
};

console.log(nombreUsuario(usuario));

//He cambiado únicamente el nombre de la variable, ya que en general la función está
//bien estruturada y solo tiene una funcionalidad
function nombreUsuario(user) {
  const nombreCompleto = "Me llamo " + user.nombre + " " + user.apellido;

  return nombreCompleto;
}

//Segundo Código
const user = {
  name: "Pedro",
  last: "Sánchez",
  age: 45,
  salary: 1000,
  profesion: "Barro man",
};

//En este caso he dividido las responsabilidades y he separado la logica
//del calculo anual del salario, y el nombre para hacerlo mas modularizado
//Además he creado la funcion userPresentation para la presentacion del usuario.
function userData(user) {
  const fullName = `${user.name} ${user.last}`;

  return fullName;
}

function userSalary(user) {
  const annualSalary = user.salary * 12;
  return annualSalary;
}

function userPresentation(user) {
  return `Me llamo ${userData(user)} y cobro ${userSalary(user)}€ al año`;
}

// Mostramos la presentación del usuario
console.log(userPresentation(user));

//Tercer Código
const user2 = {
  name: "Álvaro",
  last: "Morón",
  age: 30,
  nationality: "Morocco",
};

//Principalmente aquí lo que he cambiado es el bloque if a un modelo Early Return
//Para manteber ka legibilidad y facilitar el mantenimiento del código, además he 
//cambiado la comparación del user.age, porque era un string y el dato es un number
function esExtrangero(user) {

  if (user.nationality != "España" && user.age == 30) {
    return "Apto para la ayuda del gobierno";
  }
  return "No es apto para la ayuda del gobierno";
}

console.log(esExtrangero(user));
