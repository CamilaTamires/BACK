const clinica = [];

// Adiciona três elementos ao final do array clinica usando o método push
clinica.push('Gato', 'Cachorro', 'Louro');

// Exibe o conteúdo atualizado do array clinica no console
console.log(clinica);

// Define a variável i como o número de elementos no array clinica
var i = clinica.length;

// Exibe o valor de i no console
console.log(i);

// Inicia um loop for que itera do final para o início do array
// i é inicializado com clinica.length - 1, que é 2 (o índice do último elemento do array)
// O loop continuará enquanto i for maior ou igual a 0
for (let i = clinica.length - 1; i >= 0; i--) {
    // Remove o primeiro elemento do array clinica usando o método shift
    // O método shift remove o primeiro elemento e altera o array original
    clinica.shift();

    // Exibe o conteúdo atualizado do array clinica no console
    // A cada iteração, um elemento é removido do início do array
    // Portanto, após a primeira iteração, clinica será ['Cachorro', 'Louro']
    // Após a segunda iteração, clinica será ['Louro']
    // Após a terceira iteração, clinica será []
    console.log(clinica);

    // Exibe o valor de i no console
    // O valor de i é decrementado em cada iteração do loop
    // Portanto, o valor exibido será 2, 1 e 0 em cada iteração, respectivamente
    console.log(i);
}

