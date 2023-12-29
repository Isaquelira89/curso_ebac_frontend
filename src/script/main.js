document.addEventListener('DOMContentLoaded', function () {
    var input1 = document.getElementById('num1');
    var input2 = document.getElementById('num2');
    var resultado = document.getElementById('resultado');
    
    // Adiciona um ouvinte de evento ao formulário
    var form = document.getElementById('calcForm');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Impede a submissão padrão do formulário
        atualizarResultado();
    });

    // Adiciona um ouvinte de evento para o evento "input" em ambos os inputs
    input1.addEventListener('input', atualizarResultado);
    input2.addEventListener('input', atualizarResultado);

    // Função para atualizar o resultado quando os inputs mudam ou o formulário é submetido
    function atualizarResultado() {
        var valorInput1 = parseFloat(input1.value) || 0;
        var valorInput2 = parseFloat(input2.value) || 0;
        var soma = valorInput1 + valorInput2;
        resultado.innerHTML = valorInput1 + ' + ' + valorInput2 + ' = ' + soma;
    }
});