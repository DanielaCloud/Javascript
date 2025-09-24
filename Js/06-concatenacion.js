/* 
Concatenación de cadenas de texto

Es el proceso de univer dos o más candenas de texto en una sala en una sola. Esto se hace utilizando el operador + o las plantillas literales (template strings) se usan con backticks `` (acento invertido o comillas agudas)

*/

let miNombre = "Daniela";
let miApellido = "DeLaVega";

// Usando el operador +

let nombreCompleto = miNombre + "  " + miApellido; 

console.log(nombreCompleto);

// Usando plantillas literales 

let nombreNuevo = `Mi nombre es ${miNombre} ${miApellido} y tengo ${10 * 2} años`;

console.log(nombreNuevo);

 /* 
 Si se utiliza el operador + con valores numericos se suman. Pero si se usan con cadenas de caearcter dr conectan.
 */

 let resultado = 5 + 10;

 console.log(resultado); // 15 

 let resultados = "5" + 10; 

 console.log(resultados)