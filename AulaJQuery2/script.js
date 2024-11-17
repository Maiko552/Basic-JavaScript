


//Verificar se possui compatibilidade com a API de WebStorage
if (typeof (Storage) !== "undefined") {
    alert("Seu navegador possui suporte ao WebStorage!")
} else {
    alert("Desculpe, mas seu navegador não possui suporte!")
}


let clickLogar = $('#logar').click(function () {

    let nome = $('#name').val();
    let rgm = $('#rgm').val();
    let termos = $('#aceitarTermos').prop('checked'); // Usando .prop() para obter o estado de checked

    if (nome === '') {
        alert('Nome é obrigatório!');
        return;
    }

    if (rgm === '') {
        alert('RGM é obrigatório!');
        return;
    }

    if (!termos) {
        alert('Você precisa aceitar os termos!');
        return;
    }

    alert('Tudo certo!');
    apagarDados();

});

//CRUD COM DADOS
//Armazenar dados sem data de validade
function gravarDados() {
    localStorage.setItem("rgm", $("#rgm").val());
    localStorage.setItem("nome", $("#name").val());
    alert("Dados gravados");
    limparCampos();
}

function carregarDados() {
    if (localStorage.length > 0) {
        $("#rgm").val(localStorage.getItem("rgm"));
        $("#name").val(localStorage.getItem("nome"));
    } else {
        alert("Nenhum registro encontrado");
    }
}

function limparCampos() {
    $("#rgm").val("");
    $("#name").val("");
}

function apagarDados() {
    if (localStorage.length > 0) {
        localStorage.clear();
    } else {
        alert("Nenhum registro encontrado");
    }
    limparCampos();
}


