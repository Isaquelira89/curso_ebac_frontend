$(document).ready(function(){

    $('form').on('submit' , function(e){

        e.preventDefault();

        const tarefaAdicionada = $('#addtarefa').val();
        

        const novatarefa = $(`<li>${tarefaAdicionada}</li>`)
        $(novatarefa).appendTo('ul');

        $('#addtarefa').val(' ');

      






    })

    $('ul').on('click', 'li', function(){
        $(this).toggleClass('riscado');
    })

})