// infoPessoa.js

// Cria um objeto chamado pessoa com as propriedades especificadas
const pessoa = {
    nome: "Ana Souza",                // Nome da pessoa
    idade: 29,                        // Idade da pessoa
    solteiro: true,                   // Indicador de estado civil (true se solteiro)
    hobbies: ["ler", "viajar", "correr"], // Lista de hobbies da pessoa
    endereco: {                       // Novo objeto para representar o endereço
        rua: "Rua das Flores, 123",   // Nome da rua
        cidade: "São Paulo",          // Nome da cidade
        estado: "SP"                  // Nome do estado
    }
};

// Função para mostrar as informações da pessoa
function mostrarInfoPessoa(pessoa) {
    console.log('Nome:', pessoa.nome, '| Tipo:', typeof pessoa.nome);
    console.log('Idade:', pessoa.idade, '| Tipo:', typeof pessoa.idade);
    console.log('Solteiro:', pessoa.solteiro, '| Tipo:', typeof pessoa.solteiro);
    console.log('Hobbies:', pessoa.hobbies.join(', '), '| Tipo:', typeof pessoa.hobbies);
    
    // Informações do endereço
    console.log('Endereço:');
    console.log('  Rua:', pessoa.endereco.rua, '| Tipo:', typeof pessoa.endereco.rua);
    console.log('  Cidade:', pessoa.endereco.cidade, '| Tipo:', typeof pessoa.endereco.cidade);
    console.log('  Estado:', pessoa.endereco.estado, '| Tipo:', typeof pessoa.endereco.estado);
}

// Chama a função mostrarInfoPessoa passando o objeto pessoa como argumento
mostrarInfoPessoa(pessoa);
