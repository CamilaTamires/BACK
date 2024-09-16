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

// Verifica se a propriedade avaliacao foi removida
if (!('avaliacao' in livro)) {
    console.log('A propriedade "avaliacao" foi removida.');
} else {
    console.log('A propriedade "avaliacao" ainda está presente.');
}
