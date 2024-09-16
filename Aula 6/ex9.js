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

// Imprime as propriedades iniciais do objeto livro
console.log('Título:', livro.titulo);
console.log('Autor:', livro.autor);
console.log('Ano de Publicação:', livro.anoPublicacao);
console.log('Gênero:', livro.genero);
console.log('Idade da Publicação:', livro.idadePublicacao, 'anos');

// Altera o gênero do livro para "Aventura"
livro.genero = 'Aventura';

// Imprime as propriedades do objeto livro após a alteração
console.log('Título:', livro.titulo);
console.log('Autor:', livro.autor);
console.log('Ano de Publicação:', livro.anoPublicacao);
console.log('Gênero:', livro.genero);
console.log('Idade da Publicação:', livro.idadePublicacao, 'anos');
