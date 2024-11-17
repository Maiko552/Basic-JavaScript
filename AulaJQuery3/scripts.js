
//Pega o repositório e lista lo adicionando o elemento no html
const url = "https://api.github.com/users/Maiko552/repos";
fetch(url)
    .then(response => response.json())  // Pega a resposta e converte para JSON
    .then(data => {
        // Itera sobre o array de repositórios e adiciona cada nome a uma lista
        data.forEach(element => {
            $('ul').append('<li>' + element.name + '</li>');
        });
    })
    .catch(err => console.log(err));  // Captura erros da requisição
