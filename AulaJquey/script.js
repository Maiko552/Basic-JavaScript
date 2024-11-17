$("#jqueryImage").click(function () {
     // Criar o modal dinamicamente
     $("body").append(`
        <div id="imageModal" style="
            display: flex;
            justify-content: center;
            align-items: center;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.8);
            z-index: 1000;
        ">
            <img src="${$(this).attr("src")}" style="width: 80%; max-width: 700px; border-radius: 5px;">
        </div>
    `);
     // Fechar o modal ao clicar fora da imagem
     $("#imageModal").click(function () {
        $(this).remove(); // Remove o modal do DOM
    });
})
//Botão
$('#btnInfo').click(function(){
    window.location.href = "Aulapdf/AulaJQueryJS.pdf";

})
//Estilização com encadeamento css: PROPRIEDADE1 : VALOR, PROPRIEDADE2 : VALOR
$("#tituloPrincipal").css({"color": "#CD5C5C", "border": '2px solid red'})
$("#beforeParag").css("color", "#6495ED")

//Titulo clicavel
$('#tituloPrincipal').click(function(){
    let tituloOriginal = 'Aulas utilizando JQuery';
    let tituloClickado = 'Você clickou aqui!!';
    
    if($('#tituloPrincipal').text() === tituloOriginal){
        $('#tituloPrincipal').text(tituloClickado)
        $('#tituloPrincipal').css('color', '#FFFFFF')
        $('#tituloPrincipal').css('background-color', '#000000')

    }else{
        $('#tituloPrincipal').text(tituloOriginal)
        $("#tituloPrincipal").css("color", "#CD5C5C")
        $('#tituloPrincipal').css('background-color', '#FFFFFF')
    }
})

//Encadeamento de Métodos sobre uma unico elemento
$('#beforeParag')
    .on('mouseenter', function() {
        $(this).css('font-size', '2.3rem');
    })
    .on('mouseout', function() {
        $(this).css('color', '#6495ED');
        $(this).css('font-size', '1.0rem');
    });




