
// Cria um objeto livro com propriedades vazias
const livro = {
    titulo: '',         // Título do livro (inicialmente vazio)
    autor: '',          // Nome do autor do livro (inicialmente vazio)
    anoPublicacao: null, // Ano de publicação do livro (inicialmente nulo)
    genero: ''          // Gênero do livro (inicialmente vazio)
};



// instancie as propriedades do objeto livro com dados reais
livro.titulo = 'Dom Casmurro';          // Título do livro
livro.autor = 'Machado de Assis';       // Nome do autor do livro
livro.anoPublicacao = 1899;             // Ano de publicação do livro
livro.genero = 'Romance';               // Gênero do livro

// Exibe o objeto livro atualizado no console
console.log('Livro atualizado:', livro);

// Obtém o ano atual usando o objeto Date e o método getFullYear()
const anoAtual = new Date().getFullYear();

// Exibe o ano atual no console
console.log('Ano atual:', anoAtual);