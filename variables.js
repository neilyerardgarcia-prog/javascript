/* console.log("Nom: Neil Yerard")
console.log("Cognoms: Garcia Colque")
console.log("Data neixement: 2006")

let nombre = "Neil";
let edad = 19;
let estudiante = true;

console.log(nombre, edad, estudiante);

/*
console.log(x);
var x = 10;
console.log(y);
let y = 10;

let dada = 123;
console.log(typeof dada);
dada1 = "Hola";
console.log(typeof dada1);

const cambio = 123;
cambio = 122;
console.log(cambio)
 */

let num = 1.234;
let big = 5.678;
let bigNum = Number(big);

console.log("Suma:", (num + bigNum).toFixed(1));
console.log("Resta:", (num - bigNum).toFixed(1));
console.log("Multiplicacion:", (num * bigNum).toFixed(1));
console.log("Division:", (num / bigNum).toFixed(1));


let catet1 = 4;
let catet2 = 8;
let hipotenusa = (catet1 **  2 + catet2 ** 2) ** 0.5;

console.log("Hipotenusa:", hipotenusa.toFixed(2));


let resultat = 10 / "hola";
console.log("10 / 'hola' ", resultat);


let nomComplet = "Neil Garcia Colque";
let parts = nomComplet.split(" ");
let primerCognom = parts[1];
console.log("El primer cognom és " + primerCognom);



let text = "Neil Garcia Colque";
let nouText = text.slice(0, 6) + text.slice(7);
console.log("Text:", nouText);

let a;
let b = null;
let suma = a + b;
console.log("undefined + null =", suma)


let bool = true;
let explícitaStr = String(bool);
let implícitaStr = bool + "";
console.log("Explicita", explícitaStr);
console.log("Implicita", implícitaStr);

let str = "Hola";
let explícitaBool = Boolean(str);
let implícitaBool = !!str;
console.log("explícita", explícitaBool);
console.log("implícita", implícitaBool);


let bool2 = false;
let explícitaNum = Number(bool2);
let implícitaNum = +bool2;
console.log("explícita", explícitaNum);
console.log("implícita", implícitaNum);

