function peli(...nums) {
    let map = new Map();

    nums.forEach((n, i) => {
        map.set(i, n);
    });

    let array = Array.from(map.values()).sort((a, b) => b - a);

    console.log("Valores ordenados de mayor a menor:", array);

    return array;
}

function borrar(array1, array2){

}


function sindupli(a1, a2) {
    const resultat = [...a1];

    for (let x of a2) {
        if (!resultat.includes(x)) {
            resultat.push(x);
        }
    }
    return resultat;
}
function fusionarAmbSet(a1, a2) {
    return [...new Set([...a1, ...a2])];
}

function mapCubic(arr) {
    return arr.map(x => x ** 3);
}
function filtraMesDunaA(arr) {
    const resultat = [];

    for (let i = 0; i < arr.length; i++) {
        const paraula = arr[i];
        let comptadorA = 0;
        for (let j = 0; j < paraula.length; j++) {
            if (paraula[j].toLowerCase() === 'a') {
                comptadorA++;
            }
        }
        if (comptadorA > 1) {
            resultat.push(paraula);
        }
    }

    return resultat;
}

const m = new Map();

m.set("nom", "Joan");
m.set(123, "Número");
m.set(true, "Bolean");

console.log(m);

function esPalindrom(paraula) {
    const cua = [];

    for (let c of paraula) {
        cua.push(c);
    }

    let reconstruida = "";
    while (cua.length > 0) {
        reconstruida += cua.shift();
    }

    return reconstruida === paraula.split("").reverse().join("");
}

console.log(esPalindrom("anna"));
console.log(esPalindrom("casa"));

class Pelicula {
    constructor(titol, any) {
        this.titol = titol;
        this.any = any;
    }
}

const cua = [];
cua.push(new Pelicula("Pelicula A", 2003));
cua.push(new Pelicula("Pelicula B", 1995));
cua.push(new Pelicula("Pelicula C", 2010));

let mesAntiga = cua[0];

for (let p of cua) {
    if (p.any < mesAntiga.any) {
        mesAntiga = p;
    }
}

console.log("La pel·lícula més antiga és:", mesAntiga);
