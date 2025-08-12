function calcularIMC() {
    
    const peso = Number(document.getElementById("campoPeso").value);
    const altura = Number(document.getElementById("campoAltura").value);


    const imc = peso / (altura * altura);

    if (imc < 18.5) {
        alert("Abaixo do peso: IMC menor que 18,5.");
    } else if (imc >= 18.5 && imc <= 24.9) {
        alert("Peso normal: IMC entre 18,5 e 24,9.");
    } else if (imc >= 25 && imc <= 29.9) {
        alert("Acima do peso (sobrepeso): IMC entre 25 e 29,9.");
    } else {
        alert("Obesidade: IMC de 30 ou mais.");
    }
}