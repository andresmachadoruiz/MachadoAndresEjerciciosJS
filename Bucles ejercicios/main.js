//Ejercicio 1
/*
let enteredNumber = prompt("Whats your number?")


if (enteredNumber > 1 && enteredNumber < 100){

for (let i = enteredNumber; i >= 0; i--) {
   console.log(i);
} 
}else {
    console.log(`${enteredNumber} no es numero entre 1 y 100`)
}*/

//Ejercicio 2
/*
let enteredNumber2 = prompt("Ingresa un numero entre 1 y 10");

if (enteredNumber2 >= 1 && enteredNumber2 <= 10) {
  for (i = 1; i <= 10; i++) {
    console.log(`${enteredNumber2} x ${i} = ${enteredNumber2 * i}`);
  }
} else {
  console.log(`El numero ${enteredNumber2}, no esta entre 1 y 10`);
}*/

//Ejercicio 3
/*
let numeroIngresado2 = parseInt(prompt("Ingresa un numero"));
let sumatoria = numeroIngresado2;

while (numeroIngresado2 !== 0) {
  numeroIngresado2 = parseInt(prompt("Ingresa un 2no numero"));
  sumatoria += numeroIngresado2;
}
console.log(`La suma es ${sumatoria}`);
*/
//Ejercicio 4 
/*
let enteredNumber3 = parseInt(prompt("What number do you want to add?"));
let sumatoria = enteredNumber3;

do {
  enteredNumber3 = parseInt(prompt("Enter a #"));
  sumatoria += enteredNumber3;
} while (enteredNumber3 !== 0);
console.log(`la suma es ${sumatoria}`);

*/

//Ejercicio 5
/*
let adivinandoNumero = parseInt(prompt("Ingresa tu número para adivinar"));
let intentos = 0;

while (adivinandoNumero !== sumatoria) {
  intentos++;

  if (adivinandoNumero > sumatoria) {
    console.log(`El número ${adivinandoNumero} es mayor que el secreto`);
  } else {
    console.log(`El número ${adivinandoNumero} es menor que el secreto`);
  }

  adivinandoNumero = parseInt(prompt("Ingresa el número para adivinar"));
}

console.log(`Acertaste! El número secreto era: ${sumatoria}, realizaste ${intentos} intentos`);
*/


//Ejercicio 6
/*
let usedNumber = parseInt(prompt("Ingresa un numero"))
for (let i = 1; i <= usedNumber; i++) {
    let formula = usedNumber % i;
    if (formula === 0) {
      console.log(i);
    }
  }
  */

  //Ejercicio 7
/*
  const colores  = ["Rojo", "Verde", "Azul", "Violeta", "Amarillo", "Celeste"]

for (list of colores) {
    console.log(list);
}*/

//ejercicio 8
/*
const numbers = [2,3,4,5,6,7]

for(double of numbers){
    console.log(`El # es ${double} y su doble es ${double * 2}`)
}
*/

//Ejercicio 9 
/*
let family = [{
    nombre: "Steph",
    age: 33,
    hair: "brown",
    role: "Father",
},
{
    nombre: "Dray",
    age: 34,
    hair: "black",
    role: "Mother",
},
{
    nombre: "Klay",
    age: 35,
    hair:"black",
    role: "brother",
},
{
    nombre: "Andre",
    age: 38,
    hair: "none",
    role: "other brother"
},
]

for (let members of family) {
    console.log (
        `Hola soy ${members.nombre} y tengo ${members.age}.`
    );
}*/

//Ejercicio 10
/*
let player = {
  nombre: "Klay",
  apellido: "Thompson",
  jumperWet: true,
  edad: 33,
  Teams: ["UWashington", "Warriors"],
};

for (let propiedades in player) {
  console.log(propiedades);
}
*/


// Ejercicio 11
/*
for (let propiedades in personaje) {
  console.log(personaje[propiedades]);
}*/

// Ejercicio 12
/*
let ingresoNumero = parseInt(prompt("Ingresa un numero"));
let numerosPares = 0;
let numerosImpares = 0;

while (ingresoNumero !== 0) {
  if (ingresoNumero % 2 === 0) {
    numerosPares += ingresoNumero;
  } else {
    numerosImpares += ingresoNumero;
  }
  ingresoNumero = parseInt(prompt("Ingresa un numero"));
}

console.log(`La suma de numeros pares es: ${numerosPares}`);
console.log(`La suma de numeros Impares es: ${numerosImpares}`);
*/

// Ejercicio 13
/*
let numeros = [55, 12, 30, 45, 10, 77, 25, 33, 65, 41];
let numeroMayor = 0;
for (let i = 0; i < numeros.length; i++) {
  if (numeroMayor < numeros[i]) {
    numeroMayor = numeros[i];
  }
}
console.log(numeroMayor);
Ahi estan todos.
*/