// Cria um array vazio chamado meuArray
const meuArray = [];

// Adiciona três elementos ao final do array meuArray usando o método push
meuArray.push(21, 31, 33);

// Exibe o conteúdo atualizado do array meuArray no console
console.log(meuArray);

// Atualiza o array meuArray usando o método splice
// O método splice é usado para remover e/ou adicionar elementos ao array
// Aqui, 0 indica o índice onde a remoção deve começar (início do array)
// 1 indica o número de elementos a serem removidos (neste caso, o primeiro elemento 21 será removido)
// meuArray[0] * 2 é o novo valor a ser adicionado no índice especificado
// Como meuArray[0] é 21, meuArray[0] * 2 será 42
// Portanto, o valor 21 será removido e substituído por 42
meuArray.splice(0, 1, meuArray[0] * 2);

// Exibe o conteúdo atualizado do array meuArray no console
console.log(meuArray);

