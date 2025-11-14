/*nsole.log("Neil")
console.log("Garcia Colque")
console.log("24/10/2006")
*/
function ex2(){
    console.log(typeof x)
}

function data(){
    data = "11/11/2025";
    console.log(data);
}

/*
function dec (){
    let vacio = 16
}

console.log(vacio)
*/
let palabra = "parapapapaaaaaa";

function vocal(palabra) {
    let contador = 0;
    for (let i = 0; i < palabra.length; i++) {
        if (palabra[i] === "a" || palabra[i] === "e" || palabra[i] === "i" || palabra[i] === "o" || palabra[i] === "u") {
            contador++;
        }
    }
    console.log(contador);
}

function ex6(entero1, entero2, entero3=1){
    console.log(entero1+entero2+entero3)
}


function ex7(){
    data()
    return(ex6(1,2,3))
}

let bol = false;
function ex8(enter=1,enter1=29){

        bol = enter + enter1 === 30 || (enter === 30 || enter1 === 30);
        console.log(bol)
}

let ex9 = (enter,enter1) => {
    bol = enter + enter1 === 30 || (enter === 30 || enter1 === 30);
    console.log(true)
}

let ex10 = (val1, val2) =>{
    if (typeof val1 === typeof val2){
        console.log(true)
    }
    else {
        console.log(false)
    }
}

let ex11 = (num = 10) => {
    let raiz = num ** 0.5;
    console.log(raiz)
}

let ex12 = (text = "PAPAPAPAP") => {
    console.log(text.toLowerCase());
    return text.toLowerCase();
}


function ex13 (a = 1, b) {
    console.log(a);
    return a !== null ? a : b;
}

let posicio = (frase, paraula) => {
    const index = frase.indexOf(paraula);
    if (index === -1) return -1;

    return frase.length - index;
}

let dividir = (frase, paraula) => {
    const pos = posicio(frase, paraula);
    if (pos === -1) return "";

    const index = frase.indexOf(paraula);
    return frase.substring(index + paraula.length).trim();
}

let N = (x) => x+x+x;
console.log(N("NA"));

