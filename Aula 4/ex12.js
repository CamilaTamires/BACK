function verificarIdade(idade) {
    if (idade >= 18) {
        return "A pessoa é maior de idade.";
    } else {
        return "A pessoa é menor de idade.";
    }
}

// Chamando a função com uma idade e armazenando o resultado em uma variável
let resultado = verificarIdade(20);


console.log(resultado);
