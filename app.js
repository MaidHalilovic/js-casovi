//algoritam koji ce pretraziti velika slova
//potrebno je smestiti velika slova for petlja treba uslov u petlji u uslovu se koristi && promenjiva
// koja se zove karakter i ima  vrednost svakog karaktera u tekstu  >= 'a ' && <= "Z"

// const noviNiz = [28, 36, 33, 38, 59, 55, 5];

// const najveciBroj = noviNiz[0];
// const najmanjiBroj = noviNiz[0];

// for (let i = 0; i < noviNiz.length; i++) {
//   if (noviNiz[i] > najveciBroj) {
//     najveciBroj = noviNiz[i];
//   }
//   console.log(najveciBroj);
// }

// function convertToCFah(celsius) {
//     let fah = (celsius * 9) / 5 + 32
// }
//////////////////////////////////////////////////////////////////////////////////////

// for (let i = 0; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

//////////////////////////////////////////////////////////////////

// const tekst = "dobar Dan, Kako Ste?";
// let velikaSlova = "";

// for (let i = 0; i < tekst.length; i++) {
//   let karakter = tekst[i];

//   if (karakter >= "A" && karakter <= "Z") {
//     velikaSlova += karakter;
//   }
// }

// console.log(velikaSlova);

//////////////objektno-orjentisanje////////////////////////////////////

// class Zivotinja {
//   constructor(ime) {
//     this.ime = ime;
//   }

//   info() {
//     console.log("ime sve zivotinje je"`${this.ime}`);
//   }
// }

// class Pas extends Zivotinja {
//   constructor(ime, rasa) {
//     super(ime);
//     this.pas = rasa;
//   }
// }

// const nekaZivotinja = new Zivotinja("Neki pas");
// console.log(nekaZivotinja);

// const nekiPas = new Pas("Pas, Pitbull");
// console.log(nekiPas);

// class Objekat {
//   constructor(vrsteObjekta, visina, duzina) {
//     this.vrsteObjekta = vrsteObjekta;
//     this.visina = visina;
//     this.duzina = duzina;
//   }
//   info() {
//     console.log(
//       "vrstaObjekta"`${this.vrsteObjekta}`,
//       "visina"`${this.visina}`,
//       "duzina",
//       `${this.duzina}`
//     );
//   }
// }

// class Zgrada extends Objekat {
//   constructor(vrsteObjekta, visina, duzina, boja, brojStanova, sirina) {
//     super(vrsteObjekta, visina, duzina);
//     this.boja = boja;
//     this.brojStanova = brojStanova;
//     this.sirina = sirina;
//   }
// }

// const nekiObjekat = new Objekat(
//   "vrstaobjekta",
//   "nekaVisina",
//   "nekaDuzina",
//   "nekaBoja",
//   "brojStanova",
//   "nekaSirina"
// );
// console.log(nekiObjekat);

// const nekeOsobine = new Zgrada("klasa", "200m", "40m", "bela", "30", "100m");
// console.log(nekeOsobine);

// omogućava jednoj klasi da nasledi osobine druge klase-extends-nasledjivanje

//////////////////////////////////////////////////////////////

//1.nacin preko funkcjie
//2.nacin preko drugih objekata

//1. nacin///////////
// class Car {
//   constructor(brand) {
//     this.brand = brand;
//     this.speed = 0;
//   }

//   accelerate(uvecanjeBrzine) {
//     this.speed += uvecanjeBrzine;
//   }
// }

// function driveCar(car, speed) {
//   car.accelerate(speed);
// }

// const myCar = new Car("Toyota");

// driveCar(myCar, 30);
// driveCar(myCar, 60);
// driveCar(myCar, 90);

// console.log(myCar);

//2.nacin preko objekta

// class Car {
//   constructor(brand) {
//     this.brand = brand;
//     this.speed = 0;
//   }

//   accelerate(uvecanjeBrzine) {
//     this.speed += uvecanjeBrzine;
//   }
// }

// class Driver {
//   driveCar(car, speed) {
//     car.accelerate(speed);
//   }
// }

// const car = new Car("Toyota");
// const nes = new Driver();

// nes.driveCar(nes, 50);
// nes.driveCar(nes, 100);
// nes.driveCar(nes, 150);

// console.log(nes);

// class Person {
//   #age = 25;
//   constructor(firstName, lastName, eyeColor) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.eyeColor = eyeColor;
//   }

//   changeAge() {
//     console.log(this.#age);
//   }
// }

// const nes = new Person("Maid", "Halilovic", "brown");

// console.log();

// nes.eyeColor = "Red";

// console.log(nes.eyeColor);

// console.log(nes);

// nes.changeAge();

// Array.prototype.customMap = function (callbackFn) {
//   const result = [];
//   for (let i = 0; i < this.length; i++) {
//     const newCallback = callbackFn(i, this(i), this);
//     result.push(newCallback);
//   }

//   return result;
// };

// const arr = [1, 2, 3, 4, 5];

// arr.map((el) => el + 2);

// arr.customMap((el) => console.log(el + 2));

const names = ["Maid", "Aleksa", "Ajsa", "Ahmed", "Hamad"];

// const [prvi, drugi, treci] = names;

// console.log(prvi);
// console.log(drugi);
// console.log(treci);

// console.log(peti);

// const [prvi, drugi, ...druugaimena] = names;
// console.log(names);

// const namesDva = [...druugaimena, "maid halilovic"];
// console.log(namesDva);

// const person = {
//   firstname: "Maid",
//   lastname: "Halilovic",
//   eyescolor: "brown",
//   skillsSet: {
//     programiranje: "JS",
//     sport: "Fudbal",
//     jezik: "srpski",
//   },
// };

// const { firstname, lastname, eyescolor } = person;
// console.log(firstname, lastname, eyescolor);

// const { firstname, ...ostalo } = person;
// console.log(firstname, ostalo);

// const { , ...preostalo } = person;
// console.log(skillsSet.programiranje, preostalo);

//esxecution context
