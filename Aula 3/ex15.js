// Dados
let peso = 70; // Peso em quilogramas (kg) 
let altura = 1.75; // Altura em metros (m) 

// Calcular o IMC
let imc = peso / (altura * altura);

// Exibir o resultado
console.log("O IMC é: " + imc.toFixed(2));

// Classificar o IMC
if (imc < 18.5) {
    console.log("Classificação: Abaixo do peso");
} else if (imc >= 18.5 && imc < 24.9) {
    console.log("Classificação: Peso normal");
} else if (imc >= 25 && imc < 29.9) {
    console.log("Classificação: Sobrepeso");
} else {
    console.log("Classificação: Obesidade");
}
