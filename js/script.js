window.onload = function() {
    let valor = document.getElementById("iPergunta");
    let resposta = document.getElementById("iResposta");
    let secreto = document.getElementById("iSecret");
    
    let i = 0;
    let frase = "Olá, BiroLiroBiro! Por favor me responda:";
    let logica = true;
    let contador = 0;
  
    valor.oninput = function () {
      
        var teclaPressionada = valor.value[i];
        var igualdade = "." == teclaPressionada;
        var tamanho = valor.value.length;

        if(igualdade) {
            logica = false;
        }
        if (logica) {
            valor.style.color = "white";
            resposta.value += valor.value[i];
            console.log(resposta.value);
            secreto.innerHTML = frase.slice(0, tamanho);
        }
        else if (contador == 0){ 
            secreto.innerHTML = "";   
            valor.value = frase.slice(0, tamanho);
            valor.style.color = "black";
            contador = 1;
        }
        i++;
    }
}
  
 function pesquisar() {
    let resposta = document.getElementById("iResposta");
    if (resposta.value == "") {
        resposta.value = "Não sei a resposta";
    }
    resposta.style.display ="block";
}

function abrirMenu() {
    document.getElementById("iMenu").style.display = "block";
}

function fecharMenu(){
    document.getElementById("iMenu").style.display = "none";
}
