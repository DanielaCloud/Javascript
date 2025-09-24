/*  

Operadores

Son simbolos que le indican al interprete que debe realizarse una operación matématica, logica o relacional y producir un resultado.

1. Operaaciones Aritméticas 

Se utilizan operaciones matematicas basicas como la suma, resta, division y multiplicacion 

+👉🏻 suma

-👉🏻 resta

*👉🏻 multiplicación 

/👉🏻 división

%👉🏻 módulo (residuo de una división)

++👉🏻 incremento (suma 1 al valor)

--👉🏻 decrmento (resta 1 al valor)

Expresión: Conjunto de valores, variables y operadores
 */



let a = 11;
let b = 5;

console.log(a + b); // 15
console.log(a - b); // 5
console.log(a * b); // 50
console.log(a / b); // 2
console.log(a % b); // 1
a++; 
console.log(a++) // 11
b--;
console.log(b); // 4

/* 
2. Operadores de Asignación 
Estos operadores se utilizan para asignar valores a las variables

= 👉🏻asignación 
+= 👉🏻 suma y asigna 
-= 👉🏻 resta y asigna 
*= 👉🏻 multiplica y asigna
/= 👉🏻 divide y asigna
%= 👉🏻 módulo y asigna
*/

let c = 20;
console.log(c)// 20

c += 5; //25
c -= 10; // 15
c *= 2; // 30
c /= 3; // 10
c %= 3; //
console.log(c)

/* 

3. Operadores de comparación 

Estos operadores se utilizan para comparar dos valores y devolver un valor booleano (true o false)

== 👉🏻 igualdad (compara solo el valor)
=== 👉🏻 igualdad estricta (compara el valor y el tipo)
!= 👉🏻 desigualdad (compara solo el valor)
!== 👉🏻 desigualdad estricta (compara el valor y el tipo)
> 👉🏻 mayor que
< 👉🏻 menor que
>= 👉🏻 mayor o igual que
<= 👉🏻 menor o igual que

*/

let d = 10; // number - numero
let e = "10" // string -cadena de caracteres 

console.log(d == e); // true
console.log(d == e); // false
console.log(d != e); // false 
console.log(d !== e); // true 
console.log(d > 5); // true
console.log(d < 15); // false
console.log(d >= 10) // true
console.log(d <= 5) // false

/* 
4. Operadores Lógicos

Se utilizan para combinar expresiones booleanas.

&& 👉🏻 AND (y) - Si ambos valores son verdadero el resultado es verdadero. Si al menos un valor es falso el resultado es falso.

|| 👉🏻 OR (o) - Si al menos un valor es verdadero el resultado es verdadero. Solo si ambos valores son falsos el resultado es falso.

! 👉🏻 NOT (no) - Niega el valor. El resultado es el valor contrario al que se esta negando. 
 */ 

let f = true;
let g = false; 

console.log(f && g); // falso
console.log(f || g); // true
console.log(!f); // false
console.log(!g) // true 