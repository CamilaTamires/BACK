// Dados
let potenciaW = 1 / 5; // Potência da máquina em watts
let horasPorDia = 8; // número de horas por dia
let diasPorMes = 25;
let custoPorKWh = 0.75; // Custo da energia em euros por kWh
let taxaDeCambio = 5.5; // Exemplo de taxa de câmbio de euros para reais

// Calcular o consumo mensal em kWh
let consumoMensalKWh = (potenciaW * horasPorDia * diasPorMes) / 1000;

// Calcular o custo mensal em euros
let custoMensalEuros = consumoMensalKWh * custoPorKWh;

// Converter o custo para reais
let custoMensalReais = custoMensalEuros * taxaDeCambio;

// Exibir o resultado
console.log("Consumo mensal em kWh:", consumoMensalKWh.toFixed(2));
console.log("Custo mensal em euros:", custoMensalEuros.toFixed(2));
console.log("Custo mensal em reais:", custoMensalReais.toFixed(2));
