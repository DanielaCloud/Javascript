/* 

Bucles 

Son estructuras de control que permiten repetir un bloque de código varias veces, hasta que se cumpla una condición especifica. 

Los más comunes en JS son for, while y do...while

1. Bucle for

El bucle se utiliza cuando sabemos cuantas veces queremos repartir un bloque de codigo. La sintaxis es: 

for (inicialización; condición; ) {
  // el codigo que se va a repartir su ejecución
  ...
}

inicialización 👉 variable con un valor inicial
condición 👉 se evalua una expresión si es true se ejecuta el bucle
incremento 👉 aumenta el valor de la variable en cada interacción 

*/
for (let i = 0; i < 10; i++) {
  console.log("Repetición" + i + ";Oye Cucú, Papá se fue! 😢")
}

/* 
 2. Bucle white 

 El bucle white se utiliza cuando no sabemos cuántas veces queremos repetir un bloque de código, pero si queremos que se repita mientras una condición es verdadera. Sintaxis: 

 inicialización 

 while (condición) {
 // código que se repite su ejecución 
 incremento
 }

*/

let j =0; // inicialización
while (j < 5) {
   //codigo a ejuecutar en bucle 
   console.log("otro buclecito");
   j++; //incrementar 
}

/* 
3. Bucle do...white

Este bucle es similar al bucle while, pero garantiza que el bloqueo de código se ejecute al menos una vez. Ya que la condición se evalua depueés de la ejecución 
 
do {
// Código que se ejecuta al menos una vez
} while (condición);
*/

let k = 5;

do {
  console.log("Twice Rules!")
  k++;
} while (k < 5);

