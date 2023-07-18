function idade (){
    var ano, calculo;
    ano = document.getElementById('Ano-que-nasceu').value;
    calculo = 2023 - ano;
    document.getElementById("Resultado").innerHTML = calculo;
}