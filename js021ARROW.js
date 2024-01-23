//ARROW FUNCTION
(a , b) => {
    return a + b;
}
//ou
(a, b) => a + b;

//
let a = 5;
let b = 10;

//VARIOS ARGUMENTOS
let c = (n1, n2) => n1 + n2;
console.log(c(a, b));

let d = (x, y) => {
    let op;
    if(x >= 5){
        op = x * y;
    }
    else{
        op = x / y;
    }

    return op;
}
console.log(d(a, b));

//UM ARGUMENTO
let frase = 'O maikon é lindo'
let fraseArray = (frase) => frase.split();
console.log(fraseArray(frase));

//SEM ARGUMENTO
let semArg = () => console.log('Sem argumentos');
semArg();