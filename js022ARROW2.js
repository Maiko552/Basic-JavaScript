//Casos de uso da arrow
let roupas = [
    {produto: 'Camisa', preco: 25, cor: 'Amarelo'},
    {produto: 'Calça', preco: 70, cor: 'Azul'},
    {produto: 'Jaqueta', preco: 45, cor: 'Verde'},
    {produto: 'Camiseta', preco: 50, cor: 'Rosa'},
    {produto: 'Camisa', preco: 100, cor: 'Preto'},
];

let precoMaiorQue50 = roupas.filter((roupa) => {
    return roupa.preco >= 50
});

console.log(precoMaiorQue50);

/*
setTimeout(() => {
    console.log('Deu tempo')
}, 150)
//ou
setTimeout(function() {
    console.log('Deu tempo')
}, 150)
*/

//NAO USAR ARROW
//aqui usar function normal
let pessoa ={
    nome: 'Maikon',
    sayName: () =>{
        console.log(this.nome);
    }
}
pessoa.sayName();

//CORRETO
let carro ={
    nome: 'Gol',
    sayCarro(){
        console.log(this.nome);
    }
}
carro.sayCarro()