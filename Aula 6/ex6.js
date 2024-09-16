// Cria a variável chamada anoAtual e atribui a ela o ano atual
const anoAtual = new Date().getFullYear();

// Cria um objeto chamado livro com as propriedades especificadas
const livro = {
    titulo: 'Dom Casmurro',         // Título do livro
    autor: 'Machado de Assis',      // Nome do autor do livro
    anoPublicacao: 1899,            // Ano de publicação do livro
    genero: 'Romance'               // Gênero do livro
};

// Adiciona a propriedade idadePublicacao ao objeto livro
livro.idadePublicacao = anoAtual - livro.anoPublicacao;

// Cria uma string chamada mostrarDetalhes contendo os detalhes do livro
const mostrarDetalhes = `Título: ${livro.titulo}\n` +
                        `Autor: ${livro.autor}\n` +
                        `Ano de Publicação: ${livro.anoPublicacao}\n` +
                        `Gênero: ${livro.genero}\n` +
                        `Idade da Publicação: ${livro.idadePublicacao} anos`;

// Exibe a string mostrarDetalhes no console
console.log(mostrarDetalhes);
