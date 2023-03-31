interface Person {
  name: string;
  age: number;
  gender?: string;
}

function printPersonInfo(person: Person) {
  console.log(`Name: ${person.name}`);
  console.log(`Alter: ${person.age}`);
  if (person.gender) {
    console.log(`Geschlecht: ${person.gender}`);
  }
}

const person1 = { name: "Max", age: 25 };
const person2 = { name: "Lena", age: 30, gender: "weiblich" };

printPersonInfo(person1); // Ausgabe: Name: Max, Alter: 25
printPersonInfo(person2); // Ausgabe: Name: Lena, Alter: 30, Geschlecht: weiblich
