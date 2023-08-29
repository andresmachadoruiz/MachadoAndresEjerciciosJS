//Ejercicio 1 
/*

let numb1 = prompt("What is the first number?");
let numb2 = prompt("What is the second number?");

if (numb1 > numb2) {
  console.log("First number is larger");
} else if (numb1 < numb2) {
  console.log("First number is not larger");
} */


//Ejercicio 2
/*
let number1 = prompt("Enter the first number:");
let number2 = prompt("Enter the second number:");

if (number1 === number2) {
  console.log("The numbers are the same");
} else {
  console.log("The numbers are different");
} 
*/

//Ejercicio 3
/*
let number1 = prompt("Enter first number:")
let number2 = prompt("Enter second number:")

if (number1 > number2) {
    console.log("First number is larger")
} else if (number1 < number2) {
    console.log("The second number is larger")
} else {
    console.log("Both numbers are the same.");
  }
*/

//Ejercicio 4
/*
let number1 = prompt("Enter first number:")
let number2 = prompt("Enter second number:")
let number3 = prompt("Enter third number:")

if (number1 <= number2 && number1 <= number3) {
    alert("First number is smallest")
  } else if (number2 <= number1 && number2 <= number3) {
    alert("Second number is smallest")
  } else if(number3 <= number1 && number3 <= number2){
    alert("Third number is the smallest")
  }
*/
  //Ejercicio 5 
/*
let person1 = {
    name: "John",
    age: 22,
    height: 160
}

let person2 = {
    name: "Jane",
    age: 24,
    height: 170
}

function heightCompare(personaz, personax) {
if (personaz.height > personax.height) {
    alert("Person 1 es mas alta")
} else {
    alert("Person 2 es mas alta")
}
}

heightCompare(person1, person2) 

*/


//Ejercicio 6
/*
let nombre = prompt("whats your name?")
let edad = prompt("whats your age?")
let height = prompt("how tall are you?")
let vision = prompt("Whats your vision imparedness?")

function drivingElig() {
    if (edad >= 18 && height >= 150 && vision >= 8){
        console.log("Estas capacitado para conducir");
    } else {
        console.log("No estas capacitado para conducir");
    }
} 

drivingElig()
*/

//Ejercicio 7
/*
let name = prompt("whats your name")
let status = prompt ("what is your vip status")
let ticket = prompt ("do you have a ticket?")

function accessoLibre() {
    if (name === "Andres" || status === "yes") {
        return console.log ("welcome to the club")
        
    } else if (ticket === "yes"){
        let useTicket = prompt("Do you want to use your ticket?");
        if(useTicket === "yes"){
           return console.log("Welcome again")
        } else {
            return console.log("access denied")
        }
    } else { 
        let deseaCompra = prompt("would you like to buy a ticket?");
        if (deseaCompra === "yes"){
            let howMoney = prompt("How much money do you have?")
            if (howMoney >= 1000) {
                return console.log ("Sale Success, Welcome")
            } else {
                console.log("Sorry, not available")
            }
        }
    }
} 

accessoLibre ()
*/

//Ejercicio 8
/*
let numeroIncognita = Math.floor(Math.random() * 10) + 1;

function adivinar() {
  for (let intentos = 3; intentos > 0; intentos--) {
    let numeroIngresado = Number(
      prompt(`Ingresa un número de 1 a 10. Intentos restantes: ${intentos}`)
    );

    if (numeroIngresado === numeroIncognita) {
      console.log("¡Felicitaciones, adivinaste el número!");
      break;
    } else if (numeroIngresado > numeroIncognita) {
      console.log("El número es mayor al número incógnita");
    } else {
      console.log("El número es menor al número incógnita");
    }

    if (intentos === 1) {
      console.log(
        `Agotaste tus intentos. El número incógnita era ${numeroIncognita}.`
      );
    }
  }
}

adivinar();
*/

//Ejercicio 9
/*
let edadPersona = Number(prompt("Ingresa tu edad:"));
function ingresarEdad() {
  if (edadPersona >= 0 && edadPersona <= 12) {
    return console.log(`La edad ${edadPersona} es de un infante`);
  } else if (edadPersona > 13 && edadPersona <= 18) {
    return console.log(`La edad ${edadPersona} es de un adolescente`);
  } else if (edadPersona > 19 && edadPersona <= 45) {
    return console.log(`La edad ${edadPersona} es de un mayor-joven`);
  } else if (edadPersona > 45 && edadPersona <= 99) {
    return console.log(`La edad ${edadPersona} es de un anciano`);
  } else {
    return console.log(prompt("En realidad tienes esta edad?."));
  }
}
ingresarEdad();
*/

//Ejercicio 10
/*
let jugadorUno = prompt("Jugador uno: piedra, papel o tijera?");
let jugadorDos = prompt("Jugador dos: piedra, papel o tijera?");

function determinarGanador() {
  if (jugadorUno === jugadorDos) {
    return console.log("Empate");
  } else if (
    (jugadorUno === "piedra" && jugadorDos === "tijera")||
    (jugadorUno === "tijera" && jugadorDos === "papel")||
    (jugadorUno === "papel" && jugadorDos === "piedra")
  ) {
    return console.log(`${jugadorUno} GANA!`);
  } else {
    return console.log(`${jugadorDos} GANA!`);
  }
}
determinarGanador();
*/

//Ejercicio 11
/*
let colorUsuario = prompt("Elije un color:");

function definirColor() {
  switch (colorUsuario) {
    case "blanco":
    case "negro":
      console.log("Falta de color");
      break;
    case "verde":
      console.log("El color de la naturaleza");
      break;
    case "azul":
      console.log("Color del agua");
      break;
    case "amarillo":
      console.log("Color del sol");
      break;
    case "rojo":
      console.log("Color del fuego");
      break;
    case "marron":
      console.log("Color de la tierra");
      break;
    default:
      console.log("Excelente eleccion, no lo teniamos pensado!");
      break;
  }
}
definirColor();
*/
//

/*Ejercicio 12

let numeroUno = Number(prompt("Ingresa el primer numero"));

let numeroDos = Number(prompt("Ingresa el segundo numero"));

let operacion = prompt("Suma, resta, multiplicacion y/o division");

function suma(num1, num2, ope) {
    if (ope === "suma") {
      console.log(`La suma de ${num1} y ${num2} es ${num1 + num2}`);
    }
  }
  function resta(num1, num2, ope) {
    if (ope === "resta") {
      console.log(`La resta de ${num1} y ${num2} es ${num1 - num2}`);
    }
  }
  function multiplicacion(num1, num2, ope) {
    if (ope === "multiplicacion") {
      console.log(`La multiplicacion de ${num1} y ${num2} es ${num1 * num2}`);
    }
  }
  function division(num1, num2, ope) {
    if (ope === "division") {
      if (num2 !== 0) {
        console.log(`La division de ${num1} y ${num2} es ${num1 / num2}`);
      } else {
        console.log("Error el divisor ingresado es CERO");
      }
    }
}
  suma(numeroUno, numeroDos, operacion);
  resta(numeroUno, numeroDos, operacion);
  multiplicacion(numeroUno, numeroDos, operacion);
  division(numeroUno, numeroDos, operacion);

  */

  //Ejercicio 13

  let nombreInfo = prompt("Ingresa tu nombre");

let apellido = prompt("Ingresa tu apellido");

let cedula = Number(prompt("Ingresa tu numero de cedula"));

function confirmacionDatos() {
  let datosIngresados = {
    nombre: nombreInfo,
    apellido: apellido,
    cedula: cedula,
  };
  console.log(datosIngresados);
  let confirmando = prompt("Son estos datos, correctos?");
  if (confirmando === "si") {
    console.table(datosIngresados);
    console.log(`Hola ${datosIngresados.nombre} ${datosIngresados.apellido}, tu registro fue exitoso`);
  } else {
    console.log(`${datosIngresados.nombre} vuelve a intentarlo en un mes`);
  }
}
confirmacionDatos();