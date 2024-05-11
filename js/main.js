function calcular() {
    let altura = Number(document.getElementById("altura").value);
    let peso = Number(document.getElementById("peso").value);
    let resultado = document.getElementById("resultado");
    let imc = peso / (altura * altura);


    if (imc < 18.6) {
        resultado.innerHTML = "Seu IMC é: " + imc.toFixed(2) + "<br> Abaixo do Peso. ";
    }
    else if (imc > 18.6 && imc < 25) {
        resultado.innerHTML = "Seu IMC é: " + imc.toFixed(2) + "<br>  Peso Ideal. ";
    }

    else if (imc > 25 && imc < 30) {
        resultado.innerHTML = "Seu IMC é: " + imc.toFixed(2) + "<br>  Levemente acima do peso. ";
    }

    else if (imc > 30 && imc < 35) {
        resultado.innerHTML = "Seu IMC é: " + imc.toFixed(2) + "<br>  Obesidade Grau 1.";
    }
    else if (imc > 35 && imc < 40) {
        resultado.innerHTML = "Seu IMC é: " + imc.toFixed(2) + "<br>  Obsesidade Grau 2.";
    }
    else {
        resultado.innerHTML = "Seu IMC é: " + imc.toFixed(2) + "<br>  Obsesidade Grau 3.";
    }
}





