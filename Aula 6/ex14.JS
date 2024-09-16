// infoPessoa.js

// Cria um objeto chamado pessoa com as propriedades especificadas
const pessoa = {
    nome: "Ana Souza",                // Nome da pessoa
    idade: 29,                        // Idade da pessoa
    solteiro: true,                   // Indicador de estado civil (true se solteiro)
    hobbies: ["ler", "viajar", "correr"] // Lista de hobbies da pessoa
};

// Função para mostrar as informações da pessoa
function mostrarInfoPessoa(pessoa) {
    console.log('Nome:', pessoa.nome, '| Tipo:', typeof pessoa.nome);
    console.log('Idade:', pessoa.idade, '| Tipo:', typeof pessoa.idade);
    console.log('Solteiro:', pessoa.solteiro, '| Tipo:', typeof pessoa.solteiro);
    console.log('Hobbies:', pessoa.hobbies.join(', '), '| Tipo:', typeof pessoa.hobbies);
}

// Chama a função mostrarInfoPessoa passando o objeto pessoa como argumento
mostrarInfoPessoa(pessoa);
