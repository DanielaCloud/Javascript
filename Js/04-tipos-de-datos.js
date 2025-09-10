/* 

    Tipos de datos

    Los tipos de datos son una clasificación de los diferentes valores que podemos manejar en un lenguaje de programación.

    En JS existen varios tipos que se pueden agrupar en dos categorias pricnipales: primitivos y complejos u objetos.

    Cada tipo de dato tiene sus propias caracteriscticas y usos especificos en la programación.

    1. Primitivos

    Datos Basicos que se consideren "objetos" y no tienen "metodos".

    👉🏻 Number o numero

    Estos representan numericos ya sean enteros o decimales (punto flotante).

    👉🏻 Strings o Cadenas de Caracteres

    Representan texto. El texto se coloca entre comillas dobles o simples: "texto" 'texto'. Se valen las dos, pero hay que ser consistentes 

    👉🏻 Boolean o Boleanos

    Representan un valor logico que puede ser 'true' o 'false'.

    👉🏻 Undefined o Indefinido

    Es el valor que se asigna a una variable que ha sido declarada pero no inicializada.

    👉🏻 Null o nulo 

    Esta respresenta la ausencia intencional de cualquier valor u objeto. Es una tipo de dato que indica que una variable no tiene ningun valor asignado.

*/

/* Numbers */

let miNumero = 8; //Enteros
let miNumeroDecimal = 7.7; //Decimales

console.log(miNumero);
console.log(miNumeroDecimal);

/* Strings */

let miNombre = 'Yeyo';
let miApellido = 'Vilchis';

/* Boolean */

let esEstudiante = true;
let tieneTrabajo = false;

console.log(esEstudiante);
console.log(tieneTrabajo);

/* Undefined */

let aprobareDesarrolloApps; //Inicializar una variable
console.log(aprobareDesarrolloApps);

/* Null */

let meQuiere = null;
console.log(meQuiere);

/* 👉🏻 Array o arreglo

    Es un conjunto de datos que se almacenan en una lista ordenada de elementos. Los elementos. Los datos dentro de los arreglos se escriben entre corchetes [] y separados por comas ,
    
    👉🏻 Object u objeto 

    Es un conjunto dde multiples datos en pares "clave" - "valor" .
    Se escriben entre {} y separados por comas ,

    👉🏻 Functions o funsiones

    Es un tipo de datos que puede ser "invocado". Se declaran con la palabra reservada "funtion" y el codigo que se ejecuta va entre {"codigo"}
 */




/* Array */

let misSeries = ["The office", "Breaking Bad", "The Boys"];
let misNumeros = [5, 10, 8, 13, 88 ];
let tutifruti = ["Puchunguito", 182, true];

console.log( misSeries[2]); // The boys
console.log( misSeries[4]); // 88
console.log( tutifruti[1]); //182

/* object */

let perro = {
  nombre: "Chule",
  color: "Café",
  ladra: true,
  muerde: false,
}

console.log( perro.nombre);
console.log( perro.edad);
console.log( perro.muerde);

/* function */

function saludar () {
  //Código a ejecutar 
  console.log ("Hola mamá, estoy aprendiendo JS!");
}

/* Numbers */

let miNumero = 8; //Enteros
let miNumeroDecimal = 7.7; //Decimales

console.log(miNumero);
console.log(miNumeroDecimal);

/* Strings */

let miNombre = 'Daniela';
let miApellido = 'De La Vega';

/* Boolean */

let esEstudiante = true;
let tieneTrabajo = false;

console.log(esEstudiante);
console.log(tieneTrabajo);

/* Undefined */

let aprobareDesarrolloApps; //Inicializar una variable
console.log(aprobareDesarrolloApps);

/* Null */

let meQuiere = null;
console.log(meQuiere);