function enconder(){
    

     const trocar = document.getElementById("container");
     const botao = document.getElementById("botao"); // pega o botão id=botao

     if (trocar.style.display === "none") {
            trocar.style.display = "block"  //sumir texto
            botao.textContent = "Esconder" // trocar texto
     } else {
            trocar.style.display = "none"; 
            botao.textContent = "Aparecer" // aparece texto
     }

}

   