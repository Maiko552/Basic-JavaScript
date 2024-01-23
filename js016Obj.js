//Objeto com função dentro
let amigo = {nome: 'José',
sexo: 'M',
peso: 85.4,
engordar(p=0){
  console.log('Engordou')
    return this.peso += p
},
somar(a, b){
  return a + b
}
}

console.log(`O nome dele é: ${amigo.nome}`)
//chamar a função nao precisa do console.log
amigo.engordar(2)
console.log(amigo.peso)
console.log('')

//resultado dentro de uma variavel
var soma = amigo.somar(2,2)
console.log(`Resultado da soma é: ${soma}`)
