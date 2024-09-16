// Parte 1: Trabalhando com o objeto livro

// Cria a variável chamada anoAtual e atribui a ela o ano atual
const anoAtual = new Date().getFullYear();

// Cria um objeto chamado livro com as propriedades especificadas
const livro = {
    titulo: 'Dom Casmurro',          // Título do livro
    autor: 'Machado de Assis',       // Nome do autor do livro
    anoPublicacao: 1899,             // Ano de publicação do livro
    genero: 'Romance',               // Gênero do livro
    idadePublicacao: anoAtual - 1899 // Calcula a idade da publicação
};

// Se a propriedade avaliacao existir, exclui-a
delete livro.avaliacao;

// Exibe os detalhes do livro no console
console.log('Título:', livro.titulo);
console.log('Autor:', livro.autor);
console.log('Ano de Publicação:', livro.anoPublicacao);
console.log('Gênero:', livro.genero);
console.log('Idade da Publicação:', livro.idadePublicacao, 'anos');

// Parte 2: Trabalhando com o objeto pessoa

// Cria o objeto pessoa
const pessoa = {
    nome: "Bruce Banner",
    dataNascimento: "25/01/1980",
    carteiraIdentidade: "997776-X",
    email: "profbanner@email.com",
    telefone: "+552877776666",
    cidade: "Cachoeiro de Itapemirim",
    estado: "ES"
};

// Adiciona os campos seguroSocial e cpf ao objeto pessoa
pessoa.seguroSocial = "123-45-6789";
pessoa.cpf = "12345678900";

// Função para exibir os detalhes da pessoa com apenas os 4 primeiros dígitos do CPF e da carteira de identidade
function exibirDetalhesPessoa(pessoa) {
    const cpfPrimeiros4 = pessoa.cpf.slice(0, 4);
    const carteiraIdentidadePrimeiros4 = pessoa.carteiraIdentidade.slice(0, 4);
    
    console.log('Nome:', pessoa.nome);
    console.log('Data de Nascimento:', pessoa.dataNascimento);
    console.log('Carteira de Identidade:', carteiraIdentidadePrimeiros4 + '...');
    console.log('Email:', pessoa.email);
    console.log('Telefone:', pessoa.telefone);
    console.log('Cidade:', pessoa.cidade);
    console.log('Estado:', pessoa.estado);
    console.log('Seguro Social:', pessoa.seguroSocial);
    console.log('CPF:', cpfPrimeiros4 + '...');
}

// Exibe os detalhes da pessoa
exibirDetalhesPessoa(pessoa);
