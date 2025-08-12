let count = 0;

function incrementar() {
    count++;
    const contadorEl = document.getElementById("contador");

    contadorEl.textContent = `Número de cliques: ${count}`;

    if (count <= 4) {
        contadorEl.style.color = "green";    // até 4 cliques fica verde
    } else if (count <= 9) {
        contadorEl.style.color = "orange";   // de 5 a 9 fica laranja
    } else {
        contadorEl.style.color = "red";      // 10 ou mais fica vermelho
    }
}
