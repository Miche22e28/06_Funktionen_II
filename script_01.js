
"use strict";

/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung : 
2. Auswahl Rechenart : 
3. Fkt. Grundrechenarten : 
4. Ausgabe in Konsole : 
*/

// module: multiplication a * b |  test:
output(multiply(3,2));
output(multiply(3,-2));
output(multiply(3,0));
function multiply(a,b) {
    return a*b;
}


// module: subtraction a - b |  test:
output(subtract(3,2));
output(subtract(3,-2));
output(subtract(3,0));
output(subtract(0,3));
function subtract(a,b) {
	return a - b;
}


// module: output | test:
// output("hello");
// output(2);
function output(outputData) {
	console.log(outputData);
}
  

// module: addition a + b |  test:
// output(add(2,2));
// output(add(2,-2));
// output(add(2,0));
// function add(a,b) {
// 	let c = a + b;
// 	return a + b;
// }

