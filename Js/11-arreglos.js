/*

Arreglos (Arra)

Un arreglo es una colección de datos, es decir, una lista

En JS los arreglos se definen utilizando los corchetes [] .
internos se separan por comas.

Pueden contener el mismo tipo de dato o de diferentes tipos... contener arreglos animados.

*/

let frutas = ["Pera", "Sandia", "Uva", "Fresa", "mango"];
let calificaciones = [10, 8, 4, 10];
let misDatos = ["Daniela", 37, true];
let coordenadas = [ [1, 2, 3] , [4, 5, 6] ,[7, 8, 9] ]

console.log(frutas);
console.log(calificaciones);
console.log(misDatos);
console.log(coordenadas);

/* 

Propiedades Length

lengtht 👉 Nos indica la cantidad de elementos que tenemos dentro del arreglo.
indice 👉 Nos indica la "posición" del elemento dentro del arreglo.

Para acceder a los elementos de un arreglo utilizando su undice. Los arreglos siempre comienzan con el indice 0.

*/

console.log(frutas.length); // Cantidad de elementos.
console.log(calificaciones.length);
console.log(misDatos.length);
console.log(coordenadas.length);

/*  

Indice 👉 Nos indica la "posición" del elemento dentro del arreglo.

Para acceder a los elementos de un arreglo utilizamos su indice. Los arreglod siempre comienzan con el indice 0 y se coloca el valor entre corchetes [].

*/

console.log("Mi fruta favorita es:" + frutas[1] + " 🍉");
console.log("Con Limón saque" + calificaciones[2] + " de Calificación! 😢" );
console.log("Me llamo" + misDatos [0] + " y tengo " + misDatos[1] + " años! ");
console.log("Este dato esta en un arreglo anidado:" + coordenadas[1][2]);


/* 

Métodos de los arreglos:

push() 👉 Agrega uno o más elementos al final de arreglo.
pop() 👉 Elimina el ultimo elemento del arreglo y lo devuelve.
shift() 👉 Elimina el primer elemento del arreglo y lo devuelve.
unshift() 👉 Agrega uno o más elementos al inicio del arreglo.
indexOf() 👉 Devuelve el índice del primer elemento que coincida con el valor especificado o regresa -1 si no encuentra nanais.

 */

console.log(frutas.length); // 5

frutas.push("uvas", "papaya"); 

console.log(frutas.length); // 7

let ultimaFruta = frutas.pop();

console.log(frutas.length); // 6
console.log(ultimaFruta); //papaya

let primeraFruta = frutas.shift();

console.log(frutas.length); // 5
console.log(primeraFruta); // Manzana

frutas.unshift("maracuyá", "Fresa", "mango");

console.log(frutas.length); // 8

let indeceFruta = frutas.indexOf("mango");

console.log(indiceFruta)

/* 

Interación aobre arrays

Tomamos una lista de datos y accedemos a sus datos, a través de un bucle.

*/

frutas.unshift("pitajaya" , "caguama")

for (i =0; i < 9; i++) {
  console.log("se me antojo una" + frutas[i]);
}