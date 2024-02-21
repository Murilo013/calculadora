var mostrar = document.getElementById('resultado');

function inserir(num){
    mostrar.innerHTML += num;
}

function limpar(){
    mostrar.innerHTML = '';
}

function apagar(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0,resultado.length -1)
}

function calcular(){
    var resultado = mostrar.innerHTML
    if(resultado){
        mostrar.innerHTML = eval(resultado);
    }else{
        mostrar.innerHTML = '';
    }
}