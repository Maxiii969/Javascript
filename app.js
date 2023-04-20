
// Primera funcion que hacemos en JS

console.log("Hola mundo desde un archivo externo")

/*
DECLARACION DE VARIABLES
*/

let numero = 5+15;
var nombre = "Arturo"
var nombre2 = prompt("Ingrese su nombre", "");
document.write("El nombre ingresado es ", nombre);
let booleano = true;
const pi = 3.1416;
var x;

var prueba = Number('A');
console.log(prueba);

var booleano2 = isFinite(numero);

console.log(numero);
console.log(nombre);
console.log(typeof numero);
console.log(isFinite(numero));
console.log(typeof nombre);
console.log(typeof x);
console.log(typeof resultado);
console.log(booleano);
console.log(pi);
// x larga undefined porque la variable no se definió
console.log(x);

nombre = 20;
console.log(nombre);

resultado = nombre*numero;
console.log("La nueva variable resultado es igual a:", resultado)

// TODO EL CODIGO SE LEE DE ARRIBA HACIA ABAJO SIEMPRE
// ESTO QUIERE SIGNIFICA QUE POR MAS QUE HAYAMOS DEFINIDO UNA VARIABLE CON CIERTO NOMBRE, LUEGO SI DECIDIMOS VOLVER A DEFINIRLA NOS VA A MOSTRAR EL ULTIMO CAMBIO
// NAN SIGNIFICA QUE EL CODIGO ES INVALIDO POR EL MAL USO DE LAS VARIABLES














