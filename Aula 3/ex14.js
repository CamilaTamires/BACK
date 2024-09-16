// Notas do aluno
let nota1 = 9;
let nota2 = 8;
let nota3 = 7;

// Calcula a média
let media = (nota1 + nota2 + nota3) / 3;

// Verifica o status do aluno
if (media >= 6) {
    console.log("Aprovado");
} else if (media > 4 && media < 5) {
    console.log("Exame");
} else {
    console.log("Reprovado");
}
