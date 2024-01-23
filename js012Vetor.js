let num = [5, 8, 2, 9, 3];


//organizar vetor ordem crescente
num.sort();
//colocar o número no final do array
num.push(1);
//todos elementos do array
console.log(num);
//lenght em JS é atributo por isso sem parenteses
console.log(`this arrays has ${num.length} positions`);
console.log(`First value in array is ${num[0]}`);

console.log('');
//mostrar elemento do array
let valores = [8, 1, 7, 4, 2, 9];
console.log(valores[0]);
console.log('');

//for 
for(let pos=0; pos< valores.length; pos++){
    console.log(`Position ${pos} have the value ${valores[pos]}`);
}