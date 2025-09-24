 /* 
 
 Condicionales

 Son estructuras de control que permiten ejecutar diferentes bloques de código según una condición (verdadera o falsa).

 1. if

 Evalúa una condición y si es verdadera, ejecuta el bloque de codigo dentro de sus llaves.

 Síntaxis 
  
  if (condicion) {
   //bloque p código que se ejecuta
   }
 
 */

   let edad = 15;

   if (edad >=18) {
     alert("Eres mayor de edad, date!😉")
   }

   /* 
   2. else
    Permite ejecutar un bloque de codigo si la condición es falsa.
   
   Sintaxis: 
   if (condicion) {
   // Codigo que se ejecuta si la condición es verdadera.
   
  } else {
    //código que se ejecuta si la condición es falsa.
  }

  */

  let hora = 10; 
  
  if (hora < 12) {
    console.log(buenos días solecito!☀);
  }

  /* 
  
  3. else if 

  Nos va permitir tener más de una condición a ser evaluada, esta evaluación es en secuencia, si una condición es verdadera se ejecuta su bloque de código.

  Sintaxis
  
  if (condición){
   // codigo que se ejecuta si es verdadera la condición
  } else if (condicion2) {
   // codigo que se ejecuta si la anterior es falsa y estas condición es verdadera.   
  }
  
  */

  let calificación = 10; 
  
  if (calificación >=9) {
    console.log("eres un exelente programador!😁");
  } else if (calificación >=7) {
    console.log("ahi la llevas ya casi te sale!👌");
  } else if (calificación>= 5) {
    console.log("echale mas ganas o nos veremos en el extra!😢");
  } else {
    console.log ("ya valio barriga, bienvenido al extra!🔥");
  }