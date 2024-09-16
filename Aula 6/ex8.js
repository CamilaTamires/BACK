// Cria a variável chamada anoAtual e atribui a ela o ano atual
const anoAtual = new Date().getFullYear();

// Cria um objeto chamado livro com as propriedades especificadas
const livro = {
    titulo: 'Dom Casmurro',          // Título do livro
    autor: 'Machado de Assis',       // Nome do autor do livro
    anoPublicacao: 1899,             // Ano de publicação do livro
    genero: 'Romance',               // Gênero do livro
    idadePublicacao: anoAtual - 1899, // Calcula a idade da publicação
    avaliacao: null                 // Inicializa a avaliação como null
};

// Acessa e imprime as propriedades do objeto livro usando notação de colchetes
console.log('Título:', livro['titulo']);
console.log('Autor:', livro['autor']);
console.log('Ano de Publicação:', livro['anoPublicacao']);
console.log('Gênero:', livro['genero']);
console.log('Idade da Publicação:', livro['idadePublicacao'], 'anos');

// Adiciona ou verifica a avaliação do livro
if (livro.avaliacao === null) {
    livro.avaliacao = 5; // Atribua a avaliação desejada, por exemplo, 5
    console.log('Avaliação atribuída ao livro:', livro.avaliacao);
} else {
    console.log('O livro já possui uma avaliação:', livro.avaliacao);
}
