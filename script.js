function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const divResultado = document.getElementById('resultado');

    if (peso > 0 && altura > 0) {
        const imc = (peso / (altura * altura)).toFixed(1);
        let classificacao = "";

        if (imc < 18.5) classificacao = "Abaixo do peso";
        else if (imc < 25) classificacao = "Peso normal";
        else if (imc < 30) classificacao = "Sobrepeso";
        else classificacao = "Obesidade";

        document.getElementById('valor-imc').innerText = `Seu IMC é: ${imc}`;
        document.getElementById('classificacao').innerText = `Classificação: ${classificacao}`;
        divResultado.classList.remove('hidden');
    } else {
        alert("Por favor, insira valores válidos!");
    }
}
