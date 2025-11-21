let num1 = 7;

function modulo(num1) {
    if (num1 % 7 === 0) {
        console.log("Multiplo de 7")
    } else if (num1 % 3 === 0) {
        console.log("Multiplo de 3")
    } else {
        console.log("No es multiplo de nada")
    }
}

function ternaria(num1, num2) {
    console.log((num1 >= 10 && num1 <= 50) ? "Esta dentro del rango" : "No esta dentro del rango");
    console.log((num2 >= 10 && num2 <= 50) ? "Esta dentro del rango" : "No esta dentro del rango");
}

function calificacion(num1) {
    if (num1 >= 9) {
        console.log("Excelente")
    } else if (num1 >= 7) {
        console.log("Notable")
    } else if (num1 >= 6) {
        console.log("Bien")
    } else if (num1 >= 5) {
        console.log("Aprovado")
    } else {
        console.log("Reprobado")
    }
}

function arreglo(num1) {
    switch (true) {
        case (num1 % 7 === 0 && num1 % 3 === 0):
            console.log("Multiplo de 3 y de 7")
            break
        case (num1 % 7 === 0):
            console.log("Multiplo de 7")
            break
        case (num1 % 3 === 0):
            console.log("Multiplo de 3")
            break
    }
}

function maximo(num2) {
    let vueltas = 0;
    let numero = 1;
    while (numero + (vueltas + 1) < num2) {
        vueltas = vueltas + 1;
        numero = numero + vueltas;
    }
    console.log(vueltas)
}

function caracteres(car1) {
    let suma = 0;
    for (let i = 0; i < car1.length; i++) {
        if (!isNaN(car1[i]) && car1 !== ' ') {
            suma = suma + Number(car1[i])
        }
    }
    console.log(suma)
}

function ordenar(a, b, c) {
    let arr = [a, b, c];
    arr.sort((x, y) => y - x);
    console.log(arr);
}


function senares(a) {
    for (let i = 0; i <= a; i++) {
        if (i % 2 === 0) {
            console.log(i + "es par")
        } else {
            console.log(i + "es senar")
        }
    }
}

function arbol() {
    punto = "*"
    punto1 = "*"
    for (let i = 0; i < 5; i++) {
        console.log(punto1)
        punto1 = punto + punto1
    }
}

function dowhile() {
    num3 = 0
    num5 = 0
    do {
        num3 = num3 + 1;
        num5 = num5 + 1;
        if (num3 % 3 === 0) {
            console.log(num3)
        } else if (num5 % 5 === 0) {
            console.log(num5)
        }
    } while (num3 < 1000 || num5 < 1000)
}

function arbol2() {
    let punto = "*";
    let punto1 = "*";
    outer: for (let i = 0; i < 5; i++) {

        if (punto1.length % 2 === 0) {
            punto1 = punto + punto1;
            continue outer;
        }
        console.log(punto1);
        punto1 = punto + punto1;
    }
}
function intercanvio(num = 123456) {
    let cambio = [1, 2, 3, 4, 5, 6];

    for (let i = 0; i < cambio.length; i++) {
        if (i % 2 === 0 && i + 1 < cambio.length) {
            let camb = cambio[i];
            cambio[i] = cambio[i + 1];
            cambio[i + 1] = camb;
        }
    }
    for (let i = 0; i < cambio.length; i++) {
        console.log(cambio[i]);
    }
}
intercanvio();
