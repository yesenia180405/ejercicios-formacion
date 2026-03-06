import type { Animal, Mascota } from "./exercise_1";
//Creación del type animal
type Animales = Animal & {
  color: string;
};

//Creación del type mascota con datos del type Animal
type Mascotas = Animales & {
  //Permitir solo estos tres tipo se razas
  race: "Husky" | "Labrador" | "Chucho";
  age: number;
};

//Creación del objeto bird
const bird: Animales = {
  name: "Periko",
  color: "Blue",
  canEat: "Yes",
  canDrink: "Yes",
  canSleep: "Yes",
  canFly: "Yes",
};

//Creación del objeto dog
const dog: Mascotas = {
  name: "Zeus",
  color: "Brown",
  canEat: "Yes",
  canDrink: "Yes",
  canSleep: "Yes",
  canFly: "No",
  race: "Chucho",
  age: 3,
};

//Usar solo los datos name, color canSleep
type MascotaFelina = Pick<Mascotas, "name" | "color" | "canSleep">;

//Omitir los demas datos y solo usar canEat, CanDrink,CanSleep
type AnimalSalvaje = Omit<Animales, "name" | "color" | "canFly">;

//Creación de los objetos cat y Snake
const cat: MascotaFelina = {
  name: "Michi",
  color: "Orange",
  canSleep: "Yes",
};

const snake:AnimalSalvaje={
  canEat:"No",
  canDrink:"No",
  canSleep:"Yes"
}

console.log(JSON.stringify(bird));
console.log(JSON.stringify(dog));
console.log(JSON.stringify(cat));
console.log(JSON.stringify(snake));
