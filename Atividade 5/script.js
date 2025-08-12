let iNumero = Number(prompt("Digite um Numero: "))

function verificarNumero(){

    if (iNumero > 0) {
        alert("Numero é Positivo");
    } else if(iNumero  < 0) {
         alert("Numero é Negativo");
    }else{
         alert("Numero é 0");
    }    
    
    return iNumero;
}

alert(verificarNumero());