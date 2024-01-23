//CLASSE EM JS JUNTO DE UM CONSTRUTOR
class Pessoa {
    //propriedades privadas
    #nome
    #idade
    #peso
    #altura
   constructor(nome, idade, peso, altura){
    //ATRIBUTOS THIS PRIVADOS
    this.#nome = nome
    this.#idade = idade
    this.#peso = peso
    this.#altura = altura
    
   }

   //métodos
   engordar(p=0){
    console.log('Engordou')
      return this.#peso += p
  }
   //get e set
   get nome(){
    return this.#nome
   }
   set nome(p_nome){
    this.#nome = p_nome
   }

   get idade(){
    return this.#idade
   }
   set idade(p_idade){
    this.#idade = p_idade
   }

   get peso(){
    return this.#peso
   }
   set peso(p_peso){
    this.#peso = p_peso
   }

   get altura(){
    return this.#altura
   }
   set altura(p_altura){
    this.#altura = p_altura
   }

}


//sem o get e set nao consigo visualizar as informçoes da pessoa
const pessoa1 = new Pessoa()
pessoa1.nome = 'Maikon'
pessoa1.idade = 22
pessoa1.peso = 70.4
pessoa1.altura = 1.70

console.log('Nome: ' + pessoa1.nome)
console.log('Idade: ' + pessoa1.idade)
console.log('Peso: ' + pessoa1.peso)
console.log('Altura: ' + pessoa1.altura)

console.log('')

//consigo fazer a alteração pois tenho os métodos setters
//atribuindo novos pois tenho metodos set

pessoa1.nome = 'Jonathan'
pessoa1.idade = 18
pessoa1.peso = 60
pessoa1.altura = 1.89

console.log('Nome: ' + pessoa1.nome)
console.log('Idade: ' + pessoa1.idade)
console.log('Peso: ' + pessoa1.engordar(40))
console.log('Altura: ' + pessoa1.altura)








