//FUNÇÃO DENTRO DE UMA VARIAVEL
let v = function(x){
    return x*2
}
console.log(v(5))

//fatorial
function fatorial(n){
    let fat = 1
    for(let c = n; c > 1; c--){
        fat = fat * c
    }
    return fat
}

console.log(fatorial(5))