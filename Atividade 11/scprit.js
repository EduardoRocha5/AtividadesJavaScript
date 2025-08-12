function verificarCampo(){

    const campoTexto = document.getElementById("campo");
    
    if (!campoTexto.value) {
        alert("o Campo é obrigatorio!") 
    } else {
        alert("Campo preenchido com sucesso!")
    }

}