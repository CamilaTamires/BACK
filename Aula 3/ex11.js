// Dados
let salarioBruto = 3000; // valor do salário bruto
let percentualImposto = 20; // Percentual de imposto de renda

// Calcular o valor do imposto
let valorImposto = (percentualImposto / 100) * salarioBruto;

// Calcular o salário líquido
let salarioLiquido = salarioBruto - valorImposto;

// Exibir os resultados
console.log("Salário bruto: €", salarioBruto.toFixed(2));
console.log("Valor do imposto: €", valorImposto.toFixed(2));
console.log("Salário líquido: €", salarioLiquido.toFixed(2));
