// Cria um objeto chamado estudante com as propriedades especificadas
const estudante = {
    nome: "Maria Silva",              // Nome completo do estudante
    matricula: 123456,                // Número da matrícula (número inteiro)
    curso: "Engenharia da Computação", // Nome do curso atual
    materias: [                      // Array de matérias que o estudante está cursando
        "Programação I",
        "Estruturas de Dados",
        "Matemática Discreta",
        "Algoritmos"
    ]
};

// Exibe as informações do estudante no console
console.log('Nome:', estudante.nome);
console.log('Matrícula:', estudante.matricula);
console.log('Curso:', estudante.curso);
console.log('Matérias:', estudante.materias.join(', '));
