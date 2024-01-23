// JSON = JAVASCRIPT OBJECT NOTATION
const objs = [
    {
        "nome": "Maikon",
        "idade": 22,
        "esta_trabalhando": false,
        "detalhes": {
            "jogos":"Cod"
        },
        "hobbies":["Programar", "Jogar", "Anime"]
    },
    {
        "nome": "Jonathan",
        "idade": 18,
        "esta_trabalhando": true,
        "detalhes": {
            "jogos": "Lol"
        },
        "hobbies":["Programar", "Jogar", "Anime"]
    }
]

//JSON 
//Converter Obj em JSON
//método válido 
const jsonData = JSON.stringify(objs)
console.log(jsonData)

//saber o type dele
console.log(typeof jsonData)

//Converter JSON para obj
//resultado = irá mostrar o objeto novamente (dado original)
const objData = JSON.parse(jsonData)
console.log(objData)
console.log(typeof objData)

//usando o map = método comum para percorrer arrays
objData.map((pessoa) =>{
    console.log(pessoa.nome)
})