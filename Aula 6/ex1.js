// Cria um array chamado frutas com alguns elementos iniciais
const frutas = ['maça', 'banana', 'laranja', 'uva', 'pera'];

// Adiciona um novo elemento 'morango' no início do array frutas
// O método splice é usado aqui com os seguintes argumentos:
// 0: o índice onde a inserção deve começar (no início do array)
// 0: o número de elementos a serem removidos (nenhum, porque é 0)
// 'morango': o elemento a ser adicionado
frutas.splice(0, 0, 'morango');

// Exibe o conteúdo atualizado do array frutas no console
// Neste ponto, o array será: ['morango', 'maça', 'banana', 'laranja', 'uva', 'pera']
console.log(frutas);

// Remove o primeiro elemento do array frutas
// O método shift é usado para remover o primeiro elemento e retornar esse elemento removido
// Depois dessa operação, o array será: ['maça', 'banana', 'laranja', 'uva', 'pera']
frutas.shift();

// Exibe o conteúdo atualizado do array frutas no console
console.log(frutas);
