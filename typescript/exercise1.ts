//Creación del type animal
type Animal = {
  name: string;
  canEat: "Yes" | "No";
  canDrink: "Yes" | "No";
  canSleep: "Yes" | "No";
  canFly: "Yes" | "No";
};

//Creación del type mascota con datos del type Animal
type Mascota = Animal & {
  race: string;
  age: number;
};


//Creación del objeto bird
const bird: Animal = {
  name: "Periko",
  canEat: "Yes",
  canDrink: "Yes",
  canSleep: "Yes",
  canFly: "Yes",
};

//Creación del objeto dog
const dog: Mascota = {
  name: "Zeus",
  canEat: "Yes",
  canDrink: "Yes",
  canSleep: "Yes",
  canFly: "No",
  race: "teckel",
  age: 3,
};


console.log(JSON.stringify(bird));
console.log(JSON.stringify(dog));