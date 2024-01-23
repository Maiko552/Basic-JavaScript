//Métodos em JS par ou impar
function parimpa(n){
    if(n % 2 == 0){
        return 'par'
    }
    else{
        return 'impar'
    }
}
let res = parimpa(4)
//dois jeitos de chamar um sem atribuir variavel
console.log(parimpa(4))
//atribuindo variavel para a resposta
console.log(res)
console.log('')

function soma(n1, n2){
    return n1 + n2
}
console.log(soma(2, 5))